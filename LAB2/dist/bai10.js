"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai5_1 = require("./bai5");
const allPromise = [
    (0, bai5_1.simulateTask)(500),
    (0, bai5_1.simulateTask)(1000),
    (0, bai5_1.simulateTask)(1800),
    (0, bai5_1.simulateTask)(2500),
];
Promise.all(allPromise)
    .then((result) => console.log("Success!"))
    .catch((err) => console.log("Failed!"))
    .finally(() => console.log("Done!"));
