"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectPromise = rejectPromise;
function rejectPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Some thing went wrong");
        }, 1000);
    });
}
rejectPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));
