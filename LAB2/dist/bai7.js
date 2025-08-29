"use strict";
const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1 done!");
    }, 2000);
});
const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 2 done!");
    }, 6000);
});
const prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 3 done!");
    }, 1000);
});
Promise.race([prom1, prom2, prom3])
    .then(result => console.log(result));
