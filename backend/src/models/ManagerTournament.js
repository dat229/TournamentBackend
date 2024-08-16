const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManagerTournamentSchema = new mongoose.Schema(
  {
    player1: {
        type: String,
        require: true,
    },
    player2: {
        type: Number,
        default: 0
    },
    game: {
        type: gameSchema,
    },
    checkComplated: {
        type: Boolean,
        default: false
    },
    playerWin: {
        type: Number,
    },
  },
  { timestamps: true }
);
tournamentSchema.index({ geolocation: "2dsphere" });

// module.exports = mongoose.model("address", addressSchema);
