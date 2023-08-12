import * as appService from "../services/app.service.js";

export const getFeaturedSection = async (req, res, async) => {
    try {
        const results = await appService.getFeaturedSection();

        return res.status(200).json(results);
    } catch (error) {
        return res.status(400).json({ error });
    }
}

export const getSections = async (req, res, async) => {
    try {
        const results = await appService.getSections();

        return res.status(200).json(results);
    } catch (error) {
        return res.status(400).json({ error });
    }
}

export const getTrailerDetails = async (req, res, async) => {
    try {
        const { trailerId } = req.params;
        const result = await appService.getTrailerDetails(trailerId);

        return res.status(200).json(result);
    } catch (error) {        
        return res.status(400).json({ error });
    }
}

export const getOtherUpcomingTrailers = async (req, res, async) => {
    try {
        const { count } = req.query;
        const results = await appService.getOtherUpcomingTrailers(count);

        return res.status(200).json(results);
    } catch (error) {        
        return res.status(400).json({ error });
    }
}