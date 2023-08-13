import { MovieSource } from "../models/movie-source.model.js";
import { Section } from "../models/section.model.js";
import { Trailer } from "../models/trailer.model.js";

export const getFeaturedSection = async () => {
    try {
        const results = await Section.findOne({ isFeatured: true })
            .populate({
                path: "trailers",
                select: {
                    title: true,
                    authors: true,
                    trailerURL: true,
                    thumbnailURL: true,
                    movieSource: true
                },
                populate: {
                    path: "movieSource.source",
                    select: {
                        name: true
                    }
                }
            });

        return results;
    } catch (error) {
        throw error;
    }
}

export const getSections = async () => {
    try {
        const results = await Section.find({
            isFeatured: { $ne: true }
        }).populate({
            path: "trailers",
            select: {
                title: true,
                posterURL: true,
                releaseDatetime: true,
                movieSource: true
            },
            populate: {
                path: "movieSource.source",
                select: {
                    name: true
                }
            }
        });

        return results;
    } catch (error) {
        throw error;
    }
}

export const getTrailerDetails = async (_id) => {
    try {
        const result = await Trailer.findById({
            _id
        }).populate({
            path: "casts",
            select: {
                name: true,
                avatarURL: true
            }
        }).populate({
            path: "genres",
            select: {
                name: true
            }
        }).populate({
            path: "hypes.hype",
            select: {
                name: true,
                iconURL: true,
                scoreType: true
            }
        }).populate({
            path: "movieSource.source",
            select: {
                name: true
            }
        });

        return result;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const getOtherUpcomingTrailers = async (count) => {
    try {
        const randomIds = await Trailer.aggregate().project({ _id: true }).sample(parseInt(count));

        const results = await Trailer.find({
            _id: { $in: randomIds.map(r => r._id) }
        }).select({
            title: true,
            posterURL: true,
            releaseDatetime: true,
            movieSource: true
        }).populate({
            path: "movieSource.source",
            select: {
                _id: true,
                name: true
            }
        });

        console.log(results)

        return results;
    } catch (error) {
        console.log(error)
        throw error;
    }
}