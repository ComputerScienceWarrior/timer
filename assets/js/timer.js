class Timer {
    constructor(startBtn, stopBtn, duration) {
        this.startBtn = startBtn;
        this.stopBtn = stopBtn;
        this.duration = duration;

        this.startBtn.addEventListener('click', this.start);
    }
    start = () => {
        console.log("Lets get started!")
    }
    stop = () => {
        console.log(`Stop ${this} madness!`)
    }
}

export default Timer;