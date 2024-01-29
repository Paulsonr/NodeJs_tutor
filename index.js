const { format } = require("date-fns");
const { v4: uuidv4 } = require("uuid");

console.log(
  "DATE >> " + format(new Date(), "yyyy-MM-dd") + "\nUUID >> " + uuidv4()
);
