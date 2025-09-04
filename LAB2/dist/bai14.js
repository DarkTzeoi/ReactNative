"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleThree = multipleThree;
async function multipleThree(numb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numb * 3);
        }, 1000);
    });
}
(async () => {
    const result = await multipleThree(23);
    console.log(result);
})();
