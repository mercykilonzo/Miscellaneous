const passExam = true;

const goToNairobi = new Promise (function(resolve,reject){
    if(passExam){
        resolve('You will go to Nairobi');
    }
    else{
        reject('You will go to Tuition')
    }
})
.then((response)=>{
   return response;
    
})
.catch((error)=>{
    return error;
        
})
.finally(()=>{
    return 'Do not lose hope';
    
})
// console.log({goToNairobi});

async function goToNairobiAsync() {
    const result = await goToNairobi;
    console.log({result});
        
}
goToNairobiAsync()


const getJob = false;
const getJobPromise = new Promise ((resolve,reject)=>{
    if (getJob){
        setTimeout(()=>{
            resolve('You got a job');
        },2000);
    }else{
        setTimeout(()=>{
            reject('You can continue applying for jobs');
        },2000);
    }
});

const getJobAsync = async ()=>{
   try{
     const jobResult = await getJobPromise;
    console.log({jobResult});
   }catch(error){
    console.log({error});
   }    
};

getJobAsync();

