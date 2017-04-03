const fs = require('fs');

const readStream = fs.createReadStream(__dirname + "/.gitignore", 'utf-8');
const writeStream = fs.createWriteStream(__dirname + "/testStream.txt");

readStream.on('data', (chunk) => {
  console.log("new chunk recive");
  writeStream.write(chunk);
})
