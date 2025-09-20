function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({name:"Raj", url:"https://google.com"})
        }, 3000);
    })
}

async function getuserData(){
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData();     // await can only be used if there is an async on the function
        console.log("User data: ", userData);
        
    } catch (error) {
        console.log("Error fetching data");
        
    }
}

getuserData();