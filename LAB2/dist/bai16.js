"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai14_1 = require("./bai14");
(async () => {
    console.log("Bài 16: Running in parallel...");
    const tasks = [(0, bai14_1.multipleThree)(2), (0, bai14_1.multipleThree)(3), (0, bai14_1.multipleThree)(4)];
    const results = await Promise.all(tasks);
    console.log("Bài 16 Result:", results);
})();
