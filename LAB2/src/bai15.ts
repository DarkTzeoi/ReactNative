import { multipleThree } from "./bai14";

(async () => {
  const result1 = await multipleThree(2);
  console.log("result1: ", result1);

  const result2 = await multipleThree(5);
  console.log("result 2: ", result2);

  const result3 = await multipleThree(14);
  console.log("result 3: ", result3);
})();
