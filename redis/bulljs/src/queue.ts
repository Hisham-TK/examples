import * as Queue from "bull";
const queueName = "foo";

const _queue = new Queue(queueName, {
  redis: { port: 6379, host: "127.0.0.1" },
});

_queue.add(
  { message: true },
  {
    delay: 3000,
    // removeOnComplete: true,
    // repeat: { every: 1000, limit: 2,cron: '' },
    // attempts: 2,
  }
  
);

// _queue.add({ message: true }, { delay: 1000 });
// _queue.getCompleted()

// _queue.on("progress", (job) => {
//   console.log("Order progress");
// });
// _queue.on("completed", (job) => {
//   console.log("Order completed");
// });

_queue.process((job /* done */) => {
  console.log("Order process");
  console.log({ "job.data": job.data, "job.id": job.id });
  //   done();
});

// _queue.process(function (job, done) {
//   // transcode audio asynchronously and report progress
//   job.progress(42);

//   // call done when finished
//   //   done();

//   // or give a error if error
//   //   done(new Error("error transcoding"));

//   // or pass it a result
//   //   done(null, { samplerate: 48000 /* etc... */ });

//   // If the job throws an unhandled exception it is also handled correctly
//   //   throw new Error("some unexpected error");
// });

// console.log("queue.eventNames", _queue.eventNames());

export default _queue;
