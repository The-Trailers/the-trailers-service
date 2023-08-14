import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { Trailer } from '../src/models/trailer.model.js';
import { exit } from 'process';
import trailerJson from '../datasets/trailer.dataset.json' assert { type: "json" };

dotenv.config({ path: `.env` });

export const insertTrailers = async () => {
    try {
        await connect(process.env.MONGODB_CONNECTION_STRING);

        await Trailer.deleteMany();
        await Trailer.insertMany(trailerJson);
    } catch (error) {
        console.log(error);
    }
};

export const run = () => {
    insertTrailers().then(() => {
        console.log(`Insert Trailers successful!`);
    }).finally(() => {
        exit(1);
    });
}