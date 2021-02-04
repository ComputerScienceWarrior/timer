class Timer {
    constructor(startBtn, stopBtn, duration, callbacks) {
        this.startBtn = startBtn;
        this.stopBtn = stopBtn;
        this.duration = duration;

        //if callbacks are passed in do the following
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        //watch for click events on the stop and start button.
        this.startBtn.addEventListener('click', this.start);
        this.stopBtn.addEventListener('click', this.pause);
    }
    start = () => {
        //if onStart is valid, call this.onStart() callback function
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick(); //immediately run 1 tick upon starting.
        this.interval = setInterval(this.tick, 50); //declaring as 'this.interval' allows us to share the data among methods
    }
    pause = () => {
        clearInterval(this.interval)
    }
    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - .05 //.05 matches with interval time inside of start method
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }

        //below has been encapsulated into getters and setters
        // const timeRemaining = parseFloat(this.duration.value); //set the the default value set in index.html
        // this.duration.value = timeRemaining - 1
    }

    get timeRemaining() {
        return parseFloat(this.duration.value);
    }
    set timeRemaining(time) {
        this.duration.value = time.toFixed(2); //round time to 2 decimal places with 'toFixed' method
    }
}

export default Timer;