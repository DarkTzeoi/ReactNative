"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai14_1 = require("./bai14");
(async () => {
    const result1 = await (0, bai14_1.multipleThree)(2);
    console.log("result1: ", result1);
    const result2 = await (0, bai14_1.multipleThree)(5);
    console.log("result 2: ", result2);
    const result3 = await (0, bai14_1.multipleThree)(14);
    console.log("result 3: ", result3);
})();
