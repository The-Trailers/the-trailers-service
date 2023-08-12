import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
    title: String,
    iconURL: String,
    trailers: [{
        type: String,
        ref: "Trailer"
    }],
    isFeatured: Boolean
}, { timestamps: true });

export const Section = mongoose.model("Section", SectionSchema);