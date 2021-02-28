const { Kafka, ConfigResourceTypes } = require("kafkajs");
// const { Chance } = require("chance");

// const change = new Chance();

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});
let count = 0;
async function init() {
  const producer = kafka.producer();

  await producer.connect();

  const interval = setInterval(async () => {
    if (count >= 100) {
      // console.log("Hi there");
      return clearInterval(interval);
    }
    // const animalName = change.animal();
    const ticketsTypes = [
      "Open account" /* , "Close account", "Withdrow", "Deposit" */,
    ];
    const index = Math.floor(Math.random() * ticketsTypes.length);
    ticketType = ticketsTypes[index];
    await producer.send({
      topic: "tickets",
      messages: [{ value: ticketType }],
    });
    count++;
    console.log({ ticketType });
  }, 10);

  //   await producer.disconnect();
}
function randomNumber() {
  return Math.random() * 1e4;
}
init();
