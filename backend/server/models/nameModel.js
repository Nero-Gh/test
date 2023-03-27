const mongoose = require("mongoose");

const NameModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const NameModel = mongoose.model("NameModel", NameModelSchema);

module.exports = NameModel;
