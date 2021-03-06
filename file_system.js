const fs = require('fs');

// Synchronous
// var result = fs.readFileSync("../.gitignore", 'utf-8')
// console.log(result);
// fs.writeFileSync("testSync.txt", result);


// Asynchronous
fs.mkdir('FileSystem', () => {
  fs.readFile("./.gitignore", "utf-8", (err, data) => {
      if (err) console.log(err);
      console.log(data);
      fs.writeFile("FileSystem/testAync.txt", data);
  })
})


// delete file
// fs.unlink('./FileSystem/testAync.txt', () => {
//   fs.rmdir("FileSystem");
// });
