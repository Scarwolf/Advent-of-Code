"use strict";

const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

const caloriesArray = String(fs.readFileSync(path.join(__dirname, "input.txt")))
    .split("\n\n")
    .map(l => l.split("\n"));

const pStart = performance.now();

const result = caloriesArray.map(caloriesOfElve => {
    return caloriesOfElve.reduce((s, a) => s + Number(a), 0);
})
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((s, a) => s + a, 0);

const pEnd = performance.now();

console.log("Calories of top three elves carrying the most: " + result);
console.log(pEnd - pStart);
