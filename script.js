function getData() {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        resolve(455);
     }, 3500);
    })
}
    console.log("Loading modules...");

    console.log("Do something with the data here.");

    console.log("Load data...");
    let data = getData();


    

//     data.then((v) => { 
    //     console.log(" Process the data...");


//     console.log("task-2 loading....")

})// 