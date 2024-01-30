const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const { format } = require("date-fns");
const { v4: uuidv4 } = require("uuid");

const logEvents = async (message) => {
  const dateTime = format(new Date(), "dd-MM-yyyy\tHH:MM:SS");
  const eventLog = `${dateTime} ${uuidv4()} ${message}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "logEvents"),
      eventLog
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = logEvents;
