const digitalClock = document.querySelector('#digital-clock')
setInterval(displayTime, 1000);

function displayTime() {
  const date = new Date();
  let hour = date.getHours();
  let mins = date.getMinutes();;
  let secs = date.getSeconds();
  let session = 'AM';
  
if (hour > 12) {
        hour -= 12;
        session = "PM";
    }
    if (hour === 0) {
        hr = 12;
    }

hour = (hour < 10) ? '0' + hour : hour
mins = (mins < 10) ? '0' + mins : mins
secs = (secs < 10) ? '0' + secs : secs
  
let currentTime = `${hour} : ${mins} : ${secs} ${session}`

digitalClock.innerHTML = currentTime;
}
