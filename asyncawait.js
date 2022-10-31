
function makeRequest(request) {
    return new Promise((resolve, reject) => {
        console.log("Making request to " + request);
        if(request === "api") {
            setTimeout(() => {
                resolve('API says hi');
            }, 3000);
        } else {
            reject ('BRO YOU SAY WHAT');
        }
    });
}

function proccessRequest(response) {
    return new Promise(resolve => {
        console.log("processing response");
        resolve(`Extra information + ${response}`);
    })
}

// makeRequest('api').then(response => {
//     console.log("Response Received")
//     return proccessRequest(response)
// }).then(processedRequest => {
//     console.log(processedRequest)
// }).catch(err => {
//     console.log(err);
// });


async function doWork() {
    try {
        const request = await makeRequest("api");
        console.log(`Response Received`);
        const process = await proccessRequest(request);
        console.log(process);
    } catch(err) {
        console.log(err);
    }
}

doWork();


// note
// when using async await you need to have it wrapped in a function, with async keyword at the beginning of the function
// also make sure to use await keyword to any different code that's going to be asynchronous otherwise it'll just return the promise and not the result of the promise
