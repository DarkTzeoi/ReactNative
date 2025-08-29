import { simulateTask } from "./bai5"

const allPromise = [
    simulateTask(2000),
    simulateTask(1000),
    simulateTask(3000)
]
Promise.all(allPromise)
    .then(result => {
        console.log("All tasks complete!", result);
    })
    .catch(err => console.log("One task failed: ", err))