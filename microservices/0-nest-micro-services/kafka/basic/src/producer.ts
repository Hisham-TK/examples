import { Kafka } from 'kafkajs';
import * as Chance from 'chance';

const chance = new Chance();
const kafka = new Kafka({
  clientId: 'my-producer-app',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

async function init() {
  await producer.connect();

  await setInterval(async () => {
    let animalName = chance.animal();
    console.log({ animalName });
    await producer.send({
      topic: 'animals3',
      messages: [{ value: animalName }],
    });
  }, 3000);

  // await producer.disconnect();
}
init();
