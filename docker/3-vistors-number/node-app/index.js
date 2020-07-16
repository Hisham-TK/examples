const express = require("express");
const redis = require("redis");

// Init express server
const app = express();
// Configure redis
const client = redis.createClient({
  host: "redis-server",
});
client.on("error", (error) => console.error("Redis connection error"));
// client.set("visits", 0);

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

app.get("/", async (req, res) => {
  // process.exit(1);
  let visits = await getAsync("visits");
  if (!visits) client.set("visits", 0);
  res.send("Number of visitors " + (visits || 0));
  client.set("visits", +visits + 1);
});
// Restart policy 'always' will restart whenever container stopped or error occurred
// Restart policy 'unless-stopped' will restart whenever error occurred
// Restart policy 'on-failure' will restart whenever error occurred
app.get("/error", async (req, res) => {
  process.exit(1); // this error occurred
});
app.get("/exit", async (req, res) => {
  process.exit(0); // this normal exit from application
});

app.listen(8080, () => console.log("Server start on 8080"));
