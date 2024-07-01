const express = require("express");
const cors = require("cors");
const mongodb = require("./db/connect");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()).use("/", require("./routes"));

mongodb.initDB((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(
      "\x1b[34m%s\x1b[0m", // <=this controls the color of the console.log
      `Connected to DB and listening on ${PORT}`
    );
  }
});
