import mongoose from "mongoose";

const GenreSchema = new mongoose.Schema({
    _id: String,
    name: String
}, { timestamps: true });

export const Genre = mongoose.model("Genre", GenreSchema);