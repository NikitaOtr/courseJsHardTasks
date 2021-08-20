
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

input.addEventListener('keyup', debounce(onChagne, 250));


//Throttle
const consoleCoorrinate = function(e) {
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

        // ?? apply this ??
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
