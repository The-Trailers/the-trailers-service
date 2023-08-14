import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { MovieSource } from '../src/models/movie-source.model.js';
import { exit } from 'process';
import movieSourceJson from '../datasets/movie-source.dataset.json' assert { type: "json" };

dotenv.config({ path: `.env` });

export const insertMovieSources = async () => {
    try {
        await connect(process.env.MONGODB_CONNECTION_STRING);

        await MovieSource.deleteMany();
        await MovieSource.insertMany(movieSourceJson);
    } catch (error) {
        console.log(error);
    }
};

export const run = () => {
    insertMovieSources().then(() => {
        console.log(`Insert Movie Sources successful!`);
    }).finally(() => {
        exit(1);
    });
}