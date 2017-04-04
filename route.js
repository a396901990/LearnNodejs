const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log("request url: " + req.url);
  console.log("dir name: " + __dirname);
  if (req.url === "/") {
    res.writeHead(200, {'content-type' : "text/plain"});
    fs.createReadStream("./.gitignore", "utf-8").pipe(res);
  }
  else if (req.url === "/html") {
    res.writeHead(200, {'content-type' : "text/html"});
    fs.createReadStream(__dirname + "/files/test.html", "utf-8").pipe(res);
  }
  else if (req.url === "/json") {
    var json = [{name : 'dean', age : 20}, {name : 'jack', age : 30}];
    res.writeHead(200, {'content-type' : 'application/json'})
    res.end(JSON.stringify(json));
  }

})


server.listen(3000, "localhost", () => {
  console.log("lisen on 3000!");
});
