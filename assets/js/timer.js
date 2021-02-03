class Timer {
    constructor(startBtn, stopBtn, duration) {
        this.startBtn = startBtn;
        this.stopBtn = stopBtn;
        this.duration = duration;

        //watch for click events on the stop and start button.
        this.startBtn.addEventListener('click', this.start);
        this.stopBtn.addEventListener('click', this.pause);
    }
    start = () => {
        this.tick(); //immediately run 1 tick upon starting.
        this.interval = setInterval(this.tick, 1000); //declaring as 'this.interval' allows us to share the data among methods
    }
    pause = () => {
        clearInterval(this.interval)
    }
    tick = () => {
        this.timeRemaining = this.timeRemaining - 1
        //below has been encapsulated into getters and setters
        // const timeRemaining = parseFloat(this.duration.value); //set the the default value set in index.html
        // this.duration.value = timeRemaining - 1
    }

    get timeRemaining() {
        return parseFloat(this.duration.value);
    }
    set timeRemaining(time) {
        this.duration.value = time;
    }
}

export default Timer;