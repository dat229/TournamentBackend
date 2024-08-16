const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playersSchema = new mongoose.Schema(
  {
    userID: {
        type: String,
        trim: true,
        unique: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        // unique:true
    },
    chainlinkRequestId: {
        type: String,
    },
    wallet: {
        type: String,
        trim: true,
        unique: true
    },

  },
  { timestamps: true }
);
playersSchema.index({ geolocation: "2dsphere" });

module.exports = mongoose.model("player", playersSchema);
