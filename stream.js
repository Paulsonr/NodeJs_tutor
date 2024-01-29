const fs = require("fs");
const path = require("path");
const rs = fs.createReadStream(
  path.join(__dirname, "Files", "bigFile.txt"),
  "utf8"
);
const ws = fs.createWriteStream(
  path.join(__dirname, "Files", "StreamCopiedFile.txt")
);

// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

rs.pipe(ws);
