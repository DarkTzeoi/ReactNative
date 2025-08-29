"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai5_1 = require("./bai5");
const allPromise = [
    (0, bai5_1.simulateTask)(2000),
    (0, bai5_1.simulateTask)(1000),
    (0, bai5_1.simulateTask)(3000)
];
Promise.all(allPromise)
    .then(result => {
    console.log("All tasks complete!", result);
})
    .catch(err => console.log("One task failed: ", err));
