import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'consumer',
  brokers: [
    'kafka1:9091',
    'kafka2:9092',
    'kafka3:9093',
    'kafka4:9094',
    'kafka5:9095',
  ],
});

const consumer = kafka.consumer({ groupId: 'test-group' });
async function init() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });
}
init();
