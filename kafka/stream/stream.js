const { KafkaStreams } = require("kafka-streams");
const config = require("./config.json");

const kafkaStreams = new KafkaStreams(config);

kafkaStreams.on("error", (error) => {
  console.log("Error occurred:", error.message);
});
// let counter = 0
const stream = kafkaStreams.getKStream();
stream
  .from("tickets")
  .map((kafkaMessage) => {
    const message = kafkaMessage.value.toString("utf8");
    // console.log({ message });
    return {
      ticketType: JSON.parse(message).ticketType,
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
  // setTimeout(() => {
  //   clearInterval(produceInterval);
  //   kafkaStreams.closeAll();
  //   console.log("stopped..");
  // }, 10e3);
});
