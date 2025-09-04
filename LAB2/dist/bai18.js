"use strict";
async function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched user ${id}`);
            resolve({ id, name: `User ${id}` });
        }, 1000);
    });
}
(async () => {
    const user = await fetchUser(1);
    console.log("Bài 18 Result:", user);
})();
