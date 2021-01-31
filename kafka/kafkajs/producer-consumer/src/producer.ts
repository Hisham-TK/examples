import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'producer',
  brokers: [
    'kafka1:9091',
    'kafka2:9092',
    'kafka3:9093',
    'kafka4:9094',
    'kafka5:9095',
  ],
});

const producer = kafka.producer();
async function init() {
  await producer.connect();
  await producer.send({
    topic: 'test-topic',
    messages: [{ value: 'Hello KafkaJS user!' }],
  });

  await producer.disconnect();
}
init();
