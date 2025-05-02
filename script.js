const hourHand = document.querySelector(".hand.hour");
const minHand = document.querySelector(".hand.minute");
const secHand = document.querySelector(".hand.second");
const secHandTail = document.querySelector(".hand.second.tail");

const updateClock = () => {
    const now = new Date();
    const hour = now.getHours() % 12;
    const min = now.getMinutes();
    const sec = now.getSeconds();

    updateClockHand(calcDegree(hour, min, sec));
};

const calcDegree = (hour, min, sec) => {
    const hourAngle = (360 / 12) * hour + (360 / 12 / 60) * min;
    const minAngle = (360 / 60) * min + (360 / 60 / 60) * sec;
    const secAngle = (360 / 60) * sec;

    return {hourAngle, minAngle, secAngle};
};

const updateClockHand = ({hourAngle, minAngle, secAngle}) => {
    hourHand.style.setProperty('--rotation-hour', `${hourAngle}deg`);
    minHand.style.setProperty('--rotation-min', `${minAngle}deg`);
    secHand.style.setProperty('--rotation-sec', `${secAngle}deg`);
    secHandTail.style.setProperty('--rotation-sec', `${secAngle}deg`);
};

updateClock();
setInterval(updateClock, 1000);
