import mongoose from "mongoose";

const HypeSchema = new mongoose.Schema({
    _id: String,
    name: String,
    iconURL: String,
    scoreType: { 
        type: String,
        enum: ["PERCENTAGE", "RATING", "SCORE"]
    }
}, { timestamps: true });

export const Hype = mongoose.model("Hype", HypeSchema);