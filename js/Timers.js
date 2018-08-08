var timers;

if (config == 0) {
    timers = setTimeout(work, 2000);
}

if (config == 1){
    timers = setTimeout(shortB, 2000);
}

if (config == 2){
    timers = setTimeout(longB, 2000);
}

if (config == 3){
    clearTimeout(timers);
    alert("All timers canceled");
}

function work(){
    alert('Work timer done! Take a break.');
}
function shortB(){
    alert("Short Break done! Back to work.");
}
function longB(){
    alert("Long Break done! Back to work.");
}