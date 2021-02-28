import { Admin, Kafka, Producer } from "kafkajs";
import mongoose, { Document } from "mongoose";

async function init() {
  await connectToMongodb();
  await connectKafkaAdmin();
  await connectKafkaProducer();
  await createKafkaTopics();

  await watchTicketsCollection();
}
init();

async function connectToMongodb() {
  await mongoose.connect(
    "mongodb://localhost:27017/mongo-kafka-connector",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    (err) => {
      console.log(err || "Connected to Database successfully");
    }
  );
}

/**
 *  Admin
 **/
const kafkaAdmin: Kafka = new Kafka({
  clientId: "my-connector-admin",
  brokers: ["localhost:9092"],
});
const admin: Admin = kafkaAdmin.admin();

async function connectKafkaAdmin() {
  await admin.connect();
  console.log("Admin connected successfully");
}
async function createKafkaTopics() {
  await admin.createTopics({
    topics: [
      { topic: "tickets", numPartitions: 2 },
      { topic: "tickets-summary", numPartitions: 2 },
    ],
  });
}

/**
 *  Producer
 **/
const kafkaProducer: Kafka = new Kafka({
  clientId: "my-connector-producer",
  brokers: ["localhost:9092"],
});
const producer: Producer = kafkaProducer.producer();

async function connectKafkaProducer() {
  await producer.connect();
  console.log("Producer connected successfully");
}

async function watchTicketsCollection() {
  const mongoClient = mongoose.connection.getClient();
  const mongoKafkaConnectorDb = mongoClient.db("mongo-kafka-connector");
  const ticketsCollection = mongoKafkaConnectorDb.collection("tickets");
  const changeStream = ticketsCollection.watch();

  changeStream.on("change", async (doc) => {
    if (doc.operationType === "insert") {
      await produceTicketToKafka(doc.fullDocument);
    }
  });
}

async function produceTicketToKafka(doc: Document) {
  await producer.send({
    topic: "tickets",
    
    messages: [{ value: JSON.stringify(doc) }],
  });
}
