import { KafkaStreams } from "kafka-streams";
import config from "config";

const kafkaStreams = new KafkaStreams(config.get("kafkaStream"));
(kafkaStreams as any).on("error", (error: any) => {
  console.log("Error occured:", error.message);
});

const stream = kafkaStreams.getKStream();
stream
  .from("tickets")
  .map((kafkaMessage) => {
    const value = kafkaMessage.value.toString("utf8");
    const elements = value.toLowerCase();
    return {
      ticketType: elements,
    };
  })
  .countByKey("ticketType", "count")
  .map((kv) => {
    console.log(kv);
    return kv.ticketType + " " + kv.count;
  })
  .to("tickets-summary");

Promise.all([stream.start()]).then(() => {
  console.log("started..");
  //   setTimeout(() => {
  //     clearInterval(produceInterval);
  //     kafkaStreams.closeAll();
  //     console.log("stopped..");
  //   }, 10e3);
});
