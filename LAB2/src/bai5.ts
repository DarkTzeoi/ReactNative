export function simulateTask(time: number){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Task done!");
        }, time)
    })
}

simulateTask(5000).then(result => console.log(result))
