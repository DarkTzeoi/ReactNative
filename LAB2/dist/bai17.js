"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai14_1 = require("./bai14");
(async () => {
    console.log("Bài 17: Using for await...of");
    const tasks = [(0, bai14_1.multipleThree)(5), (0, bai14_1.multipleThree)(6), (0, bai14_1.multipleThree)(7)];
    for await (const result of tasks) {
        console.log("Bài 17 Result:", result);
    }
})();
