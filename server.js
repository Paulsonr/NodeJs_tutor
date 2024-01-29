const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const fileData = await fsPromises.readFile(
      path.join(__dirname, "Files", "msg.txt"),
      "utf8"
    );
    console.log(fileData);
    console.log("Read Complete!");
    await fsPromises.writeFile(
      path.join(__dirname, "Files", "new.txt"),
      "This is a newly created file."
    );
    console.log("Write Complete!");
    await fsPromises.appendFile(
      path.join(__dirname, "Files", "new.txt"),
      "\n\n This is appended text!!"
    );
    console.log("Append Complete!");
    await fsPromises.rename(
      path.join(__dirname, "Files", "new.txt"),
      path.join(__dirname, "Files", "newRenamed.txt")
    );
    console.log("Rename Complete!");
    await fsPromises.unlink(path.join(__dirname, "Files", "newRenamed.txt"));
    console.log("Delete Complete!");
  } catch (err) {
    console.error(err);
  }
};
fileOps();

process.on("uncaughtException", (err) => {
  console.error("There is an uncaught error : ", err);
  process.exit(1);
});
