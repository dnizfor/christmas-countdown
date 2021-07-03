

 start = new Date(),
 fin  = new Date("2021-12-25"),
 fark  = new Date(fin - start),
 day  = Math.floor(fark/1000/60/60/24);
 
setInterval(()=>{   
document.getElementById("day").innerHTML = ``+ (day -1 );
document.getElementById("hours").innerHTML = ``+ ( 24 - new Date().getHours());
document.getElementById("minut").innerHTML = ``+ ( 60 - new Date().getMinutes());
document.getElementById("second").innerHTML = ``+ ( 60 - new Date().getSeconds());},60)
