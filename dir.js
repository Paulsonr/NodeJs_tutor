const fs = require("fs");

/* remove dir*/
// if (fs.existsSync("./newFolder")) {
//   fs.rmdir("./newFolder", (err) => {
//     if (err) throw err;
//     console.log("Folder created!");
//   });
// }

/* create dir*/
if (!fs.existsSync("./newFolder")) {
  fs.mkdir("./newFolder", (err) => {
    if (err) throw err;
    console.log("Folder created!");
  });
}
