import { multipleThree } from "./bai14";

(async () => {
  console.log("Bài 17: Using for await...of");

  const tasks = [multipleThree(5), multipleThree(6), multipleThree(7)];

  for await (const result of tasks) {
    console.log("Bài 17 Result:", result);
  }
})();
