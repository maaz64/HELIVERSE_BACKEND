const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim : true
    },
    last_name: {
      type: String,
      required: true,
      trim : true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase : true,
      index : true
    },
    gender: {
      type: String,
      required:true,
    },
    domain: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    avatar:{
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
