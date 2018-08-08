function workTimer(){
    chrome.tabs.executeScript({
        code: 'var config=0;'
    }, function(){
        chrome.tabs.executeScript({
            file: 'js/Timers.js'
        })
    });
}

function sBreak(){
    chrome.tabs.executeScript({
        code: 'var config=1;'
    }, function(){
        chrome.tabs.executeScript({
            file: 'js/Timers.js'
        })
    });
}

function lBreak(){
    chrome.tabs.executeScript({
        code: 'var config=2;'
    }, function(){
        chrome.tabs.executeScript({
            file: 'js/Timers.js'
        })
    });
}

function cTimer(){
    chrome.tabs.executeScript({
        code: 'var config=3;'
    }, function(){
        chrome.tabs.executeScript({
            file: 'js/Timers.js'
        })
    });
}

document.getElementById('Pomodoro').addEventListener('click',workTimer);
document.getElementById('ShortBreak').addEventListener('click',sBreak);
document.getElementById('LongBreak').addEventListener('click',lBreak);
document.getElementById('CancelTimer').addEventListener('click',cTimer);
