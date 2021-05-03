const mongoose = require("mongoose");
const RFID_Schema = new mongoose.Schema(
  {
    uuid: {
        type: String,
        required: true,
        unique: true,
    },
    Owner: {
      type: String,
    },
    current_balance: {
      type: Number,
      required: true
    }
  },
);
const Transaction_Schema = new mongoose.Schema(
    {
      card_id: {
          type: String,
          required: true,
          ref:"RFID",
      },
      transactions_fare: {
        type: Number,
        required: true
      },
      new_balance: {
        type: Number,
        required: true
      }
    },
    {
        timestamps: true,
    }
  );
  exports.RFID = mongoose.model("RFID", RFID_Schema);
exports.Transactions = mongoose.model("Transaction", Transaction_Schema);
