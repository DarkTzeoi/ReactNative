const promChain = (num: number) =>
  Promise.resolve(num * num)
    .then((result) => result * 2)
    .then((result) => result + 5)
    .then((result) => console.log(result));

promChain(4);
