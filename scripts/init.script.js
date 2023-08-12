import { insertCasts } from "./cast.script.js";
import { insertGenres } from "./genre.script.js";
import { insertHypes } from "./hype.script.js";
import { insertMovieSources } from "./movie-source.script.js";
import { insertSections } from "./section.script.js";
import { insertTrailers } from "./trailer.script.js";
import { exit } from "process";

console.log("Database Initializing...");

await Promise.allSettled([
    insertHypes(),
    insertGenres(),
    insertMovieSources(),
    insertCasts(),
    insertTrailers(),
    insertSections()
]).catch((error) => {
    console.log(error);
}).then(() => {
    console.log("Database Initialized.");
}).finally(() => {
    exit(1);
});

