//Required//
const express = require("express");
const app = express();
const rowdy = require("rowdy-logger");
const rowdyResults = rowdy.begin(app);

//Mongoose//
require("./models");

//Middleware//
app.use(express.urlencoded({ extended: false }));

//Controllers//
app.use("/characters", require("./controllers/CharacterController"));

//PORT//
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  rowdyResults.print();
  console.log(`🚢 : ${PORT}`);
});
