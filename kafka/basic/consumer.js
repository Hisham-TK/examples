const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

async function init() {
  const consumer = kafka.consumer({ groupId: "test-group" });

  await consumer.connect();
  await consumer.subscribe({ topic: "ticket" /* , fromBeginning: true */ });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        messageValue: message.value.toString(),
      });
    },
  });
}

init();
