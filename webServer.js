const http = require("http");
const fs = require("fs");
const PORT = 3000;

const webServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Something went wrong! ", err);
    } else {
      res.write(data);
    }
    res.end();
  });
});

webServer.listen(PORT, (err) => {
  if (err) console.error("Something went wrong! ", err);
  else console.log("Listening on PORT: " + PORT);
});

// for more information : https://github.com/gitdagray/nodejs_web_server
