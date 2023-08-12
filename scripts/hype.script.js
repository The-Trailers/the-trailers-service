import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { Hype } from '../src/models/hype.model.js';
import { exit } from 'process';
import hypeJson from '../datasets/hype.dataset.json' assert { type: "json" };

dotenv.config({ path: `.env` });

export const insertHypes = async () => {
    try {
        await connect(process.env.MONGODB_CONNECTION_STRING);
    
        await Hype.deleteMany();
        await Hype.insertMany(hypeJson);        
    } catch (error) {
        console.log(error);
    }
};

// insertHypes().then(() => {
//     console.log(`Insert Hypes successful!`);
// }).finally(() => {
//     exit(1);
// })