let now = new Date();

const getNewYearsEve = (currentDate) => {
    return new Date(`1 January ${currentDate.getFullYear() + 1}`);
}

let target = getNewYearsEve(now);

// Get the elements
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// conversion factors
const secondsToMs = 1000;
const msToSeconds = 1 / secondsToMs;

const minutesToMs = secondsToMs * 60;
const msToMinutes = 1 / minutesToMs;

const hoursToMs = minutesToMs * 60;
const msToHours = 1 / hoursToMs;

const daysToMs = hoursToMs * 24;
const msToDays = 1 / daysToMs;

const update = () => {
    now = new Date();
    
    let diff = target - now;

    if (diff < 0) {
        target = getNewYearsEve(now);
        console.log('Happy New Year!')
        diff = target - now;
    }
    
    const timeSpan = (diff) => {
        const days = Math.floor(diff * msToDays);
        diff -= days * daysToMs;
    
        const hours = Math.floor(diff * msToHours);
        diff -= hours * hoursToMs;
    
        const minutes = Math.floor(diff * msToMinutes);
        diff -= minutes * minutesToMs;
    
        const seconds = Math.floor(diff * msToSeconds);
    
        return {
            days,
            hours,
            minutes,
            seconds
        }
    }
    
    const until = timeSpan(diff);
    
    days.innerText = `${until.days}`;
    hours.innerText = `${until.hours}`;
    minutes.innerText = `${until.minutes}`;
    seconds.innerText = `${until.seconds}`;
}

update();
let intervalId = setInterval(update, 1000);