function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
function createBoxes(amount) { 
  boxes.innerHTML = '';
  const cntr = document.createElement('div');
  const colors = [];
  let color = getRandomHexColor();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('color-box');

    while (colors.indexOf(color) >= 0) {
      color = getRandomHexColor();
    }
    colors.push(color);
    box.style.backgroundColor = color;

    const size = `${30 + 10 * i}px`;
    box.style.width = size;
    box.style.height = size;

    cntr.append(box);
  }
  boxes.innerHTML = cntr.innerHTML;
}

const num = document.querySelector('input');
const evntFn = (event) => {
  if ('create' in event.currentTarget.dataset) {
    const val = Number(num.value.trim());
    if (val >= 1 && val <= 100) {
      createBoxes(val);
      num.value = '';
    }
  } else if ('destroy' in event.currentTarget.dataset) {
    boxes.innerHTML = '';
  }
 };

for (const btn of document.querySelectorAll('button')) {
  btn.addEventListener('click', evntFn);
}

