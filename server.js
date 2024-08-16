import express from "express";

const server = express();

server.route("/").get((req, res) => {
  res.send("testing");
});

server.listen(8000, () => {
  console.log("server is running in port number 8000");
});
