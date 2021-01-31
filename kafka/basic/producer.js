const { Kafka } = require("kafkajs");
const { Chance } = require("chance");

const change = new Chance();
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

async function init() {
  const producer = kafka.producer();

  await producer.connect();

  setInterval(async () => {
    // const animalName = change.animal();
    const ticketsTypes = ["Customer service", "Accounts", "Cards", ""];
    const index = Math.floor(Math.random() * ticketsTypes.length);
    ticketType = ticketsTypes[index];
    await producer.send({
      topic: "tickets",
      messages: [{ value: ticketType }],
    });
    console.log({ ticketType });
  }, 1e3);

  //   await producer.disconnect();
}

init();
