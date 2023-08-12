import dotenv from 'dotenv';
import { connect } from 'mongoose';
import { Section } from '../src/models/section.model.js';
import { exit } from 'process';
import sectionJson from '../datasets/section.dataset.json' assert { type: "json" };

dotenv.config({ path: `.env` });

export const insertSections = async () => {
    try {
        await connect(process.env.MONGODB_CONNECTION_STRING);
    
        await Section.deleteMany();
        await Section.insertMany(sectionJson);        
    } catch (error) {
        console.log(error);
    }
};