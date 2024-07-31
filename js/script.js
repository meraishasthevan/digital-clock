let alarmHour = null;
let alarmMinute = null;
let alarmPeriod = null;

function addZero(num) {
    return num <= 9 ? "0" + num : num;
}

function getTime() {
    const hourEle = document.getElementById('hour');
    const minEle = document.getElementById('minute');
    const secEle = document.getElementById('sec');

    const dateEle = document.getElementById('date');
    const monthEle = document.getElementById('month');
    const yearEle = document.getElementById('year');

    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    const day = date.getDay();

    let d = date.getDate();
    let month = date.getMonth();
    const year = date.getFullYear();

    const period = hour < 12 ? "AM" : "PM";
    if (hour > 12) {
        hour -= 12;
    }
    hour = addZero(hour);
    min = addZero(min);
    sec = addZero(sec);
    d = addZero(d);
    month = addZero(month + 1);

    hourEle.innerHTML = hour;
    minEle.innerHTML = min;
    secEle.innerHTML = sec;
    dateEle.innerHTML = d;
    monthEle.innerHTML = month;
    yearEle.innerHTML = year;

    if (period === "AM") {
        const a1 = document.getElementsByName("time");
        a1[0].style.accentColor = "red";
        a1[0].setAttribute("checked", true);
    } else {
        const a1 = document.getElementsByName("time");
        a1[1].style.accentColor = "red";
        a1[1].setAttribute("checked", true);
    }

    const radioEle = document.getElementsByName('day');
    for (let i = 0; i < radioEle.length; i++) {
        if (radioEle[i].value == day) {
            radioEle[i].style.accentColor = 'red';
            radioEle[i].setAttribute('checked', true);
        }
    }

    checkAlarm(hour, min, period);
}

function setAlarm() {
    alarmHour = document.getElementById('alarmHour').value;
    alarmMinute = document.getElementById('alarmMinute').value;
    const alarmTime = document.getElementsByName('alarmTime');
    for (let i = 0; i < alarmTime.length; i++) {
        if (alarmTime[i].checked) {
            alarmPeriod = alarmTime[i].value;
        }
    }

    if (alarmHour && alarmMinute && alarmPeriod) {
        alarmHour = addZero(alarmHour);
        alarmMinute = addZero(alarmMinute);
        document.getElementById('alarmMessage').innerText = `Alarm set for ${alarmHour}:${alarmMinute} ${alarmPeriod}`;
    } else {
        alert("Please set a valid alarm time.");
    }
}

function checkAlarm(currentHour, currentMinute, currentPeriod) {
    if (alarmHour && alarmMinute && alarmPeriod) {
        if (currentHour == alarmHour && currentMinute == alarmMinute && currentPeriod == alarmPeriod) {
            alert("Alarm ringing!");
            alarmHour = null;
            alarmMinute = null;
            alarmPeriod = null;
            document.getElementById('alarmMessage').innerText = "";
        }
    }
}

setInterval(getTime, 1000);
