let startBtn = document.getElementById('start');
    let stopBtn = document.getElementById('stop');
    let resetBtn = document.getElementById('reset');
    let timer;
    let hour = 0;
    let minute = 0;
    let second = 0;
    let millisecond = 0;

    startBtn.addEventListener('click', function () {
        if (!timer) {
            timer = setInterval(updateTime, 10); // Update every 10 milliseconds for milliseconds
        }
    });

    stopBtn.addEventListener('click', function () {
        clearInterval(timer);
        timer = undefined;
    });

    resetBtn.addEventListener('click', function () {
        clearInterval(timer);
        timer = undefined;
        hour = 0;
        minute = 0;
        second = 0;
        millisecond = 0;
        updateDisplay();
    });

    function updateTime() {
        millisecond += 10; // Increment by 10 milliseconds
        if (millisecond === 1000) {
            millisecond = 0;
            second++;
            if (second === 60) {
                second = 0;
                minute++;
                if (minute === 60) {
                    minute = 0;
                    hour++;
                }
            }
        }
        updateDisplay();
    }

    function updateDisplay() {
        document.getElementById('hr').textContent = hour.toString().padStart(2, '0');
        document.getElementById('min').textContent = minute.toString().padStart(2, '0');
        document.getElementById('sec').textContent = second.toString().padStart(2, '0');
        document.getElementById('ms').textContent = millisecond.toString().padStart(3, '0');
    }