import mongoose from "mongoose";

const CastSchema = new mongoose.Schema({
    _id: String,
    name: String,
    avatarURL: String
}, { timestamps: true });

export const Cast = mongoose.model("Cast", CastSchema);