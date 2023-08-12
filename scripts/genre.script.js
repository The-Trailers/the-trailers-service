import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { Genre } from '../src/models/genre.model.js';
import { exit } from 'process';
import genreJson from '../datasets/genre.dataset.json' assert { type: "json" };

dotenv.config({ path: `.env` });

export const insertGenres = async () => {
    try {
        await connect(process.env.MONGODB_CONNECTION_STRING);
    
        await Genre.deleteMany();
        await Genre.insertMany(genreJson);        
    } catch (error) {
        console.log(error);
    }
};

// insertGenres().then(() => {
//     console.log(`Insert Genres successful!`);
// }).finally(() => {
//     exit(1);
// });