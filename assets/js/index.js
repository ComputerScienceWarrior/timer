import Timer from './timer.js'

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const duration = document.querySelector("#duration");
const circle = document.querySelector('circle')

let currentOffset = 0;


//here is where we calculate our 'stoke-dasharray' property..which is our perimeter
//perimeter = 2 * PI * r
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let theDuration;
const timer = new Timer(start, stop, duration, {
    onStart(totalDuration) {
        theDuration = totalDuration
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / theDuration - perimeter)

    },
    onComplete() {
        console.log("Timer finished.")
    }
})