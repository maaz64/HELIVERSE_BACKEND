const mongoose = require("mongoose");


const teamSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim : true
    },
    members:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
