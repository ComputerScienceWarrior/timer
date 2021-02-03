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

const timer = new Timer(start, stop, duration, {
    onStart() {
        console.log("Started Timer.")
    },
    onTick() {
        circle.setAttribute('stroke-dashoffset', currentOffset)
        currentOffset -= 50
    },
    onComplete() {
        console.log("Timer finished.")
    }
})