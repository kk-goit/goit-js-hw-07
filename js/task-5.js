function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const span = document.querySelector('span.color');
const body = document.querySelector('body');

document.querySelector('.change-color').addEventListener('click', (event) => {
  event.preventDefault();
  const color = getRandomHexColor();
  span.textContent = color;
  body.style.backgroundColor = color;
});

