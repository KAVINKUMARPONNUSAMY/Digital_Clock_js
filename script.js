const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year")
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


function updateClock(){ 
    let d = new Date().getDate()
    let mon = new Date().getMonth()
    let y = new Date().getFullYear()
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm="AM"

    if(h>=12){
        ampm="PM"
    }
    if(h>12){
        h=h-12;
    }

    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    d=d<10?"0"+d:d;
    mon=mon<10?"0"+mon:mon;
    
    dayEl.innerText = d;
    monthEl.innerText = mon;
    yearEl.innerText = y;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm; 

    setTimeout(()=>{
        updateClock()
    },1000)

}

updateClock()