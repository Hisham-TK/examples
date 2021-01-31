import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-topic-app',
  brokers: ['localhost:9092'],
});

const admin = kafka.admin();

async function init() {
  await admin.connect();
  admin.createTopics({
    topics: [{ topic: 'asd', numPartitions: 45, replicationFactor: 1, }],
  });
}
init();
