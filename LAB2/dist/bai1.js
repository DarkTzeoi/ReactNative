"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloAsync = void 0;
exports.helloAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
exports.helloAsync.then(message => console.log(message));
