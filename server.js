const Connection = require("./config/dBConnect");
const app = require("./config/expressConfig");
const http = require("http");
const PORT = process.env.PORT || 8000;
Connection();
console.log(process.env.SECRET)

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

