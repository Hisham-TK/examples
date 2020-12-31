const { DeepstreamClient } = require("@deepstream/client");
const client = new DeepstreamClient("localhost:6020");
client.login();

async function init() {
  const record = client.record.getRecord("hsa-dsOrderBidsList/2");
  console.log({ record });
  console.log({
    debugId: record.debugId,
    hasProvider: record.hasProvider,
    isReady: record.isReady,
    name: record.name,
    version: record.version,
  });

  console.log({
    get: record.get(),
    hasListeners: record.hasListeners(),
    // discard: record.discard(),
    // emit: record.emit(),
    // erase: record.erase(),
    // delete: record.delete(),
    // eraseWithAck: record.eraseWithAck(),
    eventNames: record.eventNames(),
    // off: record.off(),
    // on: record.on(),
    // once: record.once(),
    // removeContext: record.removeContext(),
    // set: record.set(),
    // setMergeStrategy: record.setMergeStrategy(),
    // setWithAck: record.setWithAck(),
    // subscribe: record.subscribe(),
    // unsubscribe: record.unsubscribe(),
    // whenReady: record.whenReady(),
  });
  // console.log(client.eventNames());
}
init();

// setInterval(function () {
//   console.log("timer that keeps nodejs processing running");
// }, 1000 * 60 * 60);

// process.stdin.resume();
