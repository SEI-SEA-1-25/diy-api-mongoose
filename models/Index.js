//Requirements//
const mongoose = require("mongoose");

//Mongoose DB//
const URL = process.env.MONGODB_URI || "mongodb://localhost/buffydb";
mongoose.connect(URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//Mongoose Connection to Object//
const db = mongoose.connection;
db.once("open", () => {
  console.log(`🎧  MongoDB @ ${db.host}:${db.port}`);
});

db.on("error", (err) => {
  console.log("😠", err);
});
