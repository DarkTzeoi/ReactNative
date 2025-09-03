import { simulateTask } from "./bai5";

const allPromise = [
  simulateTask(500),
  simulateTask(1000),
  simulateTask(1800),
  simulateTask(2500),
];

Promise.all(allPromise)
  .then((result) => console.log("Success!"))
  .catch((err) => console.log("Failed!"))
  .finally(() => console.log("Done!"));
