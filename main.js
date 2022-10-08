const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.use("/api", router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
