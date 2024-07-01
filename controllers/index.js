const mongodb = require("../db/connect");
const objectID = require("mongodb").ObjectId;

const awesomeFunction = (Req, res) => {
  res.json("Asewome Name!");
};

const tooeleTech = (Req, res) => {
  res.json("Tooele Tech is Awesome!");
};

const getAllStudents = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("studentInfo").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { awesomeFunction, tooeleTech, getAllStudents };
