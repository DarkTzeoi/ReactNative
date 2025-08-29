export function resolveAfterOneSecond(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 1000)
    })
}
resolveAfterOneSecond().then(number => console.log(number))
