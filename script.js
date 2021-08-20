
//debounce
const input = document.querySelector('input');
const p = document.querySelector('p');

function debounce(fn, time) {
    let timeoutFlag;
    return function(...arg) {
        const fnCall = () => fn.apply(this, arg);
        clearTimeout(timeoutFlag);
        timeoutFlag = setTimeout(fnCall, time, ...arg);
    };
}

function onChagne(e) {
    p.textContent = e.target.value;
}

input.addEventListener('keyup', debounce(onChagne, 200));


//Throttle
const consoleCoorrinate = function(e) {
    console.log(this);
    p.textContent = e.clientX + ' ' + e.clientY;
};

const throttle = (fn, time) => {
    let isThrottled = false;
    let saveThis;
    let saveArgs;

    return function wrapper(...arg) {
        if (isThrottled) {
            saveThis = this;
            saveArgs = arg;
            return;
        }

        fn.apply(this, arg);
        isThrottled = true;
        setTimeout(() => {
            isThrottled = false;
            if (saveThis) {
                wrapper.apply(saveThis, saveArgs);
                saveArgs = saveThis = null;
            }
        }, time);
    };
};

document.addEventListener('mousemove', throttle(consoleCoorrinate, 5000));
