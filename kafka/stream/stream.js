const { KafkaStreams, KStorage } = require("kafka-streams");
const config = require("./config.json");
const factory = new KafkaStreams(config);
// console.log(`TCL ~ file: index.js ~ line 4 ~ factory`, factory);
/* 
export interface Storage {
    set(key: any, value: any): Promise<any>;
    get(key: any): Promise<any>;
    increment(key: any, by?: number): Promise<number>;
    getState(): Promise<object>;
    setState(newState: object): Promise<boolean>;
    close(): Promise<boolean>;
}
export class KStorage implements Storage {
    constructor(options: object);
    set(key: any, value: any): Promise<any>;
    get(key: any): Promise<any>;
    increment(key: any, by?: number): Promise<number>;
    getState(): Promise<object>;
    setState(newState: object): Promise<boolean>;
    close(): Promise<boolean>;
}
export class KafkaStreams {
    constructor(config: KafkaStreamsConfig, storageClass?: new () => KStorage, storageOptions?: object,
        disableStorageTest?: boolean);
    static checkStorageClass(storageClass: new () => KStorage): void;
    getKafkaClient(topic: string): KafkaClient;
    getStorage(): KStorage;
    getKStream(topic?: string, storage?: new () => KStorage): KStream;
    fromMost($stream: any, storage?: new () => KStorage): KStream;
    getKTable(topic: string, keyMapETL: Function, storage: new () => KStorage): KTable;
    getStats(): Array<object>;
    closeAll(): Promise<Array<boolean>>;
}
*/
// const kstream = factory.getKStream("animals");
// const ktable = factory.getKTable(
//   "animal-table",
//   (...args) => {
//     console.log(`TCL ~ file: index.js ~ line 22 ~ ktable ~ args`, args);
//   },
//   new KStorage()
// );
// console.log(`TCL ~ file: index.js ~ line 9 ~ ktable`, ktable);

// kstream
// //   .merge(ktable)
//   //   .filter((value) => {
//   // console.log(`TCL ~ file: index.js ~ line 49 ~ .filter ~ value`, value);
//   //   })
//   .map((value) => {
//     console.log(`TCL ~ file: index.js ~ line 52 ~ .map ~ value`, value);
//   })
//   //   .reduce(/* .. */)
//   .to("output-topic");

// console.log(`TCL ~ file: index.js ~ line 47 ~ kstream`, kstream);

function keyMapperEtl(kafkaMessage) {
  console.log(
    `TCL ~ file: index.js ~ line 60 ~ keyMapperEtl ~ kafkaMessage`,
    kafkaMessage
  );
  const value = kafkaMessage.value.toString("utf8");
  const elements = value.toLowerCase();
  return {
    ticketType: elements,
  };
}

const kafkaStreams = new KafkaStreams(config);

kafkaStreams.on("error", (error) => {
  console.log("Error occured:", error.message);
});

const stream = kafkaStreams.getKStream();

stream
  //   .getMost()
  .from("tickets")
  .map(keyMapperEtl)
  .countByKey("ticketType", "count")
  // .filter((kv) => {
  //   console.log(`TCL ~ file: index.js ~ line 82 ~ kv`, kv);
  //   return true
  //   // return kv.count >= 3;
  // })
  // .map((kv) => {
  //   console.log(`TCL ~ file: index.js ~ line 84 ~ .map ~ kv`, kv);
  //   return kv.animal + " " + kv.count;
  // })
  .tap((kv) => {
    console.log(kv);
  })
  .to("tickets-summary");

// const inputStream = kafkaStreams.getKStream();
// inputStream.to("my-input-topic");

// const produceInterval = setInterval(() => {
//   inputStream.writeToStream("kah vow");
// }, 100);

Promise.all([stream.start() /* , inputStream.start() */]).then(() => {
  console.log("started..");
  //   setTimeout(() => {
  //     clearInterval(produceInterval);
  //     kafkaStreams.closeAll();
  //     console.log("stopped..");
  //   }, 10e3);
});
