// setTimeout(() => {
//     console.log('Harusnya ini dulu!');
// }, 2000);
// console.log("lah kok ini dulu?"); //ASYNCHRONOUS

const data = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        console.log('harusnya ini dulu!');
        resolve();
    }, 2000);
    setTimeout(()=>{
        reject('rejected!');
    }, 3000)
});

const asyncFunc = async()=>{
    try{
        const getData = await data;
        console.log(getData);
        console.log('sesudah promise')
    } catch(error){
        console.log(error);
    }
}

