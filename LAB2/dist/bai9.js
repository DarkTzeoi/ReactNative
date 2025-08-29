"use strict";
const arr = [2, 4, 6, 9, 21, 41, 5];
const evenNum = new Promise((resolve, reject) => {
    setTimeout(() => {
        const even = arr.filter(num => num % 2 != 0);
        resolve(even);
    }, 1000);
});
evenNum.then(result => console.log(result));
