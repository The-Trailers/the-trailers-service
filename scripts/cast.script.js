import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { Cast } from '../src/models/cast.model.js';
import { exit } from 'process';
import castJson from '../datasets/cast.dataset.json' assert { type: "json" };

dotenv.config({ path: `.env` });

export const insertCasts = async () => {
    try {
        await connect(process.env.MONGODB_CONNECTION_STRING);

        await Cast.deleteMany();
        await Cast.insertMany(castJson);
    } catch (error) {
        console.log(error);
    }
};

export const run = () => {
    insertCasts().then(() => {
        console.log(`Insert Casts successful!`);
    }).finally(() => {
        exit(1);
    });
}