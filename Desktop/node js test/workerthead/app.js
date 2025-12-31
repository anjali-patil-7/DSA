const express = require("express");
const path = require("path");
const { Worker } = require("worker_threads");

const app = express();

app.get("/message", (req, res) => {
  // 1️⃣ DECLARE worker first (nothing above this touches `worker`)
  const worker = new Worker(path.join(__dirname, "worker.js"));

  // 2️⃣ THEN use it
  worker.postMessage("Hello Anjali");

  worker.on("message", (msg) => {
    res.send(msg);
  });
});

app.listen(4000, () => {
  console.log("server running on port 4000");
});
