const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "Files", "msg.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile(
  path.join(__dirname, "Files", "new.txt"),
  "This is a newly created file.",
  (err) => {
    if (err) throw err;
  }
);

process.on("uncaughtException", (err) => {
  console.error("There is an uncaught error : ", err);
  process.exit(1);
});
