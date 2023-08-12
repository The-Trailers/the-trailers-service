import { connect } from "mongoose";
import { mongoDBConnectionString } from "../config/app.config.js";
import "../models/cast.model.js";
import "../models/genre.model.js";
import "../models/hype.model.js";
import "../models/movie-source.model.js";
import "../models/section.model.js";
import "../models/trailer.model.js";

export const connectMongoDB = () => connect(mongoDBConnectionString);