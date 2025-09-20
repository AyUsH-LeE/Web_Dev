//promises is a utility in JS that can be used to manually create asynchronous behaviour
function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let sucess = true;
            if(sucess){
                resolve("Data fetched sucessfully");
            }else{
                reject("error fetching data");
            }
        }, 3000);
    });
}

fetchData()
    .then((data)=>{                         // anything sent by resolve is sent here
        console.log(data);
        return `Raj`;
    })
    .then((value)=>{
        console.log(value);
    })
    .catch((error)=>{                       // anything sent by reject is sent here
        console.log(error)
    })