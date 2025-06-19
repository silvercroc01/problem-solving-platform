const mongoose = require("mongoose");
const { DEV_DB_URL, NODE_ENV } = require("./server.config");

async function connectToDB() {
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(DEV_DB_URL);
    }
  } catch (err) {
    console.log("unable to connect to db");
    console.log(err);
  }
}

module.exports = connectToDB;
