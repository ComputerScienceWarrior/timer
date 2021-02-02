import Timer from './timer.js'

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const duration = document.querySelector("#duration").value;

const timer = new Timer(start, stop, duration);

