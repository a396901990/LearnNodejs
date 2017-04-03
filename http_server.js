const http = require('http')

const server = http.createServer((req, res) => {
  console.log("request url: " + req.url);
  res.writeHead(200, {'content-type' : "text/plain"});
  res.end("hello nodejs")
})

server.listen(3000, "localhost", () => {
  console.log("lisen on 3000!");
});
