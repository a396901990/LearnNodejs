const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log("request url: " + req.url);
  res.writeHead(200, {'content-type' : "text/plain"});
  const readeStream = fs.createReadStream("./.gitignore", "utf-8")
  readeStream.pipe(res);
})


server.listen(3000, "localhost", () => {
  console.log("lisen on 3000!");
});
