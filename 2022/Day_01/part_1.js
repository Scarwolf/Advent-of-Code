"use strict";

const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const caloriesArray = String(fs.readFileSync(path.join(__dirname, "input.txt")))
    .split("\n\n")
    .map(l => l.split("\n"));

const pStart = performance.now();


const result = Math.max(...caloriesArray.map(caloriesOfElve => {
    return caloriesOfElve.reduce((partialSum, a) => partialSum + Number(a), 0);
}));

const pEnd = performance.now();

console.log("Highest Calorie amount: " + result);
console.log(pEnd - pStart);
