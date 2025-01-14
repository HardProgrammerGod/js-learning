// day 543689348 of learning, i forgot about the promises

/* console.log("Request data...")

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Preparing data...");

        const backEndData = {
        server:"goi",
        port:2000,
        statuss:"working"
     }
     resolve(backEndData)
    }, 2000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modif = true;
            resolve(data)
        }, 2000)
    })
}).then(clientData => {
    console.log("Data received", clientData);
}) */
