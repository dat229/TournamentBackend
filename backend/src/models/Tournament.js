const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentSchema = new mongoose.Schema(
  {
    tournamentID: {
        type: String,
        require: true,
    },
    startTime: {
        type: Date,
        default: Date.now
    },
    endTime: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        trim: true,
        // unique:true
    },
    fee: {
        type: Number,
        required: true,
        default: 0
    },
    start: {
        type: Boolean,
        default: false
    },
    completed: {
        type: Boolean,
        default: false
    },
    playerWin: {
        type: String,
    },
  },
  { timestamps: true }
);
tournamentSchema.index({ geolocation: "2dsphere" });

module.exports = mongoose.model("tournament", tournamentSchema);
