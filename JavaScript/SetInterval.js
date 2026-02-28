let timer =setInterval(() => {
    console.log("Timer After Every 4 seconds")
}, 4000);
setTimeout(function(){
    clearInterval(timer);

},20000);