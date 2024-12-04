const mongoose = require("mongoose");
const moment = require("moment-timezone");

const Notice = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);
Notice.methods.toJSON = function () {
  const obj = this.toObject();
  obj.createdAt = moment(obj.createdAt).tz("Asia/Ho_Chi_Minh").format();
  obj.updatedAt = moment(obj.updatedAt).tz("Asia/Ho_Chi_Minh").format();
  return obj;
};
module.exports = mongoose.model("Notice", Notice);
