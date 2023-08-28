function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;


  const box = document.querySelector('#boxes');
  const input = document.querySelector('input[type="number"]');
  const createBtn = document.querySelector('button[data-create]');
  const destroyBtn = document.querySelector('button[data-destroy]');

  const amount = input.value;
  console.log(amount);
}
