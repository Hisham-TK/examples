import { Queue } from "bullmq";

const myQueue = new Queue("foo");

export async function addJobs() {
  await myQueue.add(
    "myJobName",
    { foo: "bar" },
    { delay: 1000, removeOnComplete: true }
  );
  await myQueue.add("myJobName", { qux: "baz" });
}
