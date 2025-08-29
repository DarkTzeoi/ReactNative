export const randomNumber = new Promise((resolve, reject) => {
    const num = Math.random()
    if(num > 0.5)
        return resolve(num);
    else
        return reject("Failed!!!")
})

randomNumber.then(num => console.log(num))
.catch(error => console.log(error))