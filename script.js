const div = document.querySelector('div');
const button = document.querySelector('button');

let move = false;
let count = 0;
let left;


function moveDiv() {
    console.log(count);
    div.style.left = count + 'px';
    count++;
    left = requestAnimationFrame(moveDiv);
}

button.addEventListener('click', () => {
    if (!move) {
        left = requestAnimationFrame(moveDiv);
        move = true;
    } else {
        move = false;
        cancelAnimationFrame(left);
    }
});
