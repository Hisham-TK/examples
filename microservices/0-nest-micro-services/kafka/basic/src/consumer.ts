import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-consumer-app',
  brokers: ['localhost:9092'],
});
const consumer = kafka.consumer({ groupId: 'consumer-group' });

async function init() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'animals3',  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      // console.log(
      //   `TCL ~ file: consumer.ts ~ line 15 ~ eachMessage: ~ partition`,
      //   partition,
      // );
      // console.log(
      //   `TCL ~ file: consumer.ts ~ line 15 ~ eachMessage: ~ topic`,
      //   topic,
      // );

      // console.log(
      //   `TCL ~ file: consumer.ts ~ line 15 ~ eachMessage: ~ message`,
      //   message,
      // );
      console.log({
        value: message.value.toString(),
      });
      // while(Date.now()  + 3e4){}
      
      // await new Promise((resolve, reject)=>{
      //   setTimeout(()=>{
      //     console.log('hi 2')
      //     resolve('Hi')},3e3)
      // })
    },
  });
}
init();
