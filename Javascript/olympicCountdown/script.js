const result = document.querySelector(".result");

const olympicDate = new Date(2028,6,14).getTime();


setInterval(()=>{
    const currentDate = Date.now();
    let timer = olympicDate - currentDate;


    const days = Math.floor(timer/(1000*60*60*24));
    timer%=1000*60*60*24;

    const hours = Math.floor(timer/(1000*60*60));
    timer%=1000*60*60;

    const minutes = Math.floor(timer/(1000*60));
    timer%=1000*60;

    const seconds = Math.floor(timer/(1000));
    timer%=1000;


    result.textContent = `${days}:Days ${hours}:Hours ${minutes}:Minutes ${seconds}:Seconds`;

},1000)
