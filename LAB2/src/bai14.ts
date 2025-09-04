export async function multipleThree(numb: number): Promise<number> {
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
