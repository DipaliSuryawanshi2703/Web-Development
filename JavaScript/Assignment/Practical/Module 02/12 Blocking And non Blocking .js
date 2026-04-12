function BlockingExample(){
    console.log("Start");
    //Blocking task
    const start = Date.now();
    while(Date.now()-start < 3000){
        //busy wait for 3 seconds
    }
    console.log("end");
}
console.log("Blocking Example ===========");///wait for line by line execution
BlockingExample();
console.log("After Function");
console.log("Non Blocking Example ===========");
//does not wait
function NonBlockingExample(){
    console.log("Start");
    setTimeout(()=> {
        console.log("Inside timeout");
    },3000)
    console.log("End")
}
NonBlockingExample();
console.log("After Non Blocking function");