import { multipleThree } from "./bai14";

(async () => {
  console.log("Bài 16: Running in parallel...");

  const tasks = [multipleThree(2), multipleThree(3), multipleThree(4)];
  const results = await Promise.all(tasks);

  console.log("Bài 16 Result:", results);
})();
