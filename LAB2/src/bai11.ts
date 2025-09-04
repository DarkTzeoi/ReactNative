//Bai 1
const helloAsync = async () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello Async");
      resolve();
    }, 1000);
  });
};

(async () => {
  await helloAsync();
})();

// Bai 2
const resolveNumber = async () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log(10);
      resolve();
    }, 1000);
  });
};

(async () => {
  await resolveNumber();
})();

//Bai 3
const rejectProm = async () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Something went wrong!!");
    }, 1000);
  });
};

(async () => {
  try {
    await rejectProm();
  } catch (error) {
    console.error(error);
  }
})();

//Bai4
const getRandomNumber = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.floor(Math.random() * 100)), 1000);
  });
};

(async () => {
  try {
    const randNum = await getRandomNumber();
    console.log(randNum);
  } catch (error) {
    console.error(error);
  }
})();

// Bài 5
function simulateTask(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task ${time}ms done!!`);
      resolve(`Done ${time}ms`);
    }, time);
  });
}

// Bài 5
(async () => {
  await simulateTask(2000);
})();

// Bài 6: Promise.all
(async () => {
  const task = [simulateTask(4000), simulateTask(5000), simulateTask(3000)];
  const result = await Promise.all(task);
  console.log("Bài 6:", result);
})();

// Bài 7: Promise.race
(async () => {
  const task = [simulateTask(500), simulateTask(150), simulateTask(200)];
  const result = await Promise.race(task);
  console.log("Bài 7:", result);
})();

//Bai 8: Promise chain
const calcNumber = async (num: number): Promise<number> => {
  const squared = num * num;
  const doubled = squared * 2;
  return doubled + 5;
};

(async () => {
  console.log("Bai 8: ", await calcNumber(5));
})();

//Bai9
const filterEvenNumbers = async (arr: number[]): Promise<number[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(arr.filter((n) => n % 2 === 0)), 1000);
  });
};

(async () => {
  console.log(await filterEvenNumbers([1, 2, 3, 4, 5, 6]));
})();

//Bai 10
(async () => {
  try {
    const result = await simulateTask(1000);
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    console.log("Done!");
  }
})();
