let fulfilled = false;

// const promise1 = new Promise((resolve, reject) => {
//     if(fulfilled) {
//         resolve("Promise has been fulfilled!");
//     } else {
//         reject("Promise hasn't fulfilled");
//     }
// });

// promise1
//     .then(resolve => console.log("Correct! " + resolve))
//     .catch(resolve => console.log("Incorrect! " + resolve));


// // Promise Timeout
// const promise2 = new Promise((resolve, reject) => {
//     if(fulfilled) {
//         setTimeout(() => {
//             resolve("Promise has been fulfilledd!");
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject("Promise hasn't fulfilled");
//         }, 2000);
//     }
// });

// // Async
// console.log("start");
// // console.log(promise2.then(() => console.log(promise2)));
// console.log(promise2
//     .finally(() => console.log('Finish!'))
//     .then(resolve => console.log('OK! ' + resolve))
//     .catch(resolve => console.log('NOT OK! ' + resolve)));
// console.log("finish");

const dog = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            nama: "Menir",
            umur: 10
        }])
    }, 1000);
})

const laptop = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            merk: "asus",
            harga: 10000000
        }])
    }, 2000);
})

Promise.all([dog, laptop])
    .then(resolve => {
        const [dog, laptop] = resolve;
        console.log(dog);
        console.log(laptop);
    })