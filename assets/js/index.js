import Timer from './timer.js'

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const duration = document.querySelector("#duration");

const timer = new Timer(start, stop, duration, {
    onStart() {
        console.log("Started Timer.")
    },
    onTick() {
        console.log("Ticking")
    },
    onComplete() {
        console.log("Timer finished.")
    }
})