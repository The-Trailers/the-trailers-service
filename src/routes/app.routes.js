import { Router } from "express";
import * as appController from "../controllers/app.controller.js";

const router = Router();

router.get("/featured-section", appController.getFeaturedSection);

router.get("/sections", appController.getSections);

router.get("/trailer/:trailerId", appController.getTrailerDetails);

router.get("/other-upcoming-trailers", appController.getOtherUpcomingTrailers)

router.get("/search", appController.searchTrailers);

export default router;