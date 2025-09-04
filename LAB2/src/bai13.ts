const rejectHandle = async () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Something went wrong!!");
    }, 1000);
  });
};

(async () => {
  try {
    await rejectHandle();
  } catch (error) {
    console.error(error);
  }
})();
