import mongoose from "mongoose";

const MovieSourceSchema = new mongoose.Schema({
    _id: String,
    name: String
}, { timestamps: true });

export const MovieSource = mongoose.model("MovieSource", MovieSourceSchema);