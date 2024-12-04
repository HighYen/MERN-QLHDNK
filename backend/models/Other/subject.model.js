const mongoose = require("mongoose");
const moment = require("moment-timezone");

const Subject = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
Subject.methods.toJSON = function () {
  const obj = this.toObject();
  obj.createdAt = moment(obj.createdAt).tz("Asia/Ho_Chi_Minh").format();
  obj.updatedAt = moment(obj.updatedAt).tz("Asia/Ho_Chi_Minh").format();
  return obj;
};
module.exports = mongoose.model("Subject", Subject);
