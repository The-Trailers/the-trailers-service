import mongoose from "mongoose";

const TrailerSchema = new mongoose.Schema({
    _id: String,
    title: String,
    authors: [String],
    description: String,
    casts: [{
        type: String,
        ref: "Cast"
    }],
    genres: [{
        type: String,
        ref: "Genre"
    }],
    trailerURL: String,
    thumbnailURL: String,
    posterURL: String,
    releaseDatetime: Date,
    budget: Number,
    duration: Number,
    pgRating: {
        type: String,
        enum: ["G", "PG", "PG-13", "R", "X"]
    },
    hypes: [{
        hype: {
            type: String,
            ref: "Hype"
        },
        score: Number
    }],
    movieSource: {
        source: {
            type: String,
            ref: "MovieSource"
        },
        sourceURL: String
    }
}, { timestamps: true });

export const Trailer = mongoose.model("Trailer", TrailerSchema);