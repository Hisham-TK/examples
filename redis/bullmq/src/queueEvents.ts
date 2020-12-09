import { QueueEvents } from "bullmq";

const queueName = "foo";

export const queueEvents = new QueueEvents("foo");

queueEvents.on("progress", ({ jobId, data }, timestamp) => {
  console.log(`progress: ${jobId} reported progress ${data} at ${timestamp}`);
});

queueEvents.on("waiting", ({ jobId }) => {
  console.log(`waiting: A job with ID ${jobId} is waiting`);
});

queueEvents.on("active", ({ jobId, prev }) => {
  console.log(
    `active: Job ${jobId} is now active; previous status was ${prev}`
  );
});

queueEvents.on("completed", ({ jobId, returnvalue }) => {
  console.log(`completed: ${jobId} has completed and returned ${returnvalue}`);
});

queueEvents.on("failed", ({ jobId, failedReason }) => {
  console.log(`failed: ${jobId} has failed with reason ${failedReason}`);
});
