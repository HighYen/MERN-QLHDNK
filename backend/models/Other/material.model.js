const mongoose = require("mongoose");
const moment = require("moment-timezone");

const Material = new mongoose.Schema(
  {
    faculty: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
Material.methods.toJSON = function () {
  const obj = this.toObject();
  obj.createdAt = moment(obj.createdAt).tz("Asia/Ho_Chi_Minh").format();
  obj.updatedAt = moment(obj.updatedAt).tz("Asia/Ho_Chi_Minh").format();
  return obj;
};
module.exports = mongoose.model("Material", Material);
