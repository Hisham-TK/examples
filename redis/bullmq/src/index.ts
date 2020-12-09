import { addJobs } from "./queue";
import { queueEvents } from "./queueEvents";
import { worker } from "./worker";

async function init() {
  queueEvents;
//   worker;
  await addJobs();
}

init();
