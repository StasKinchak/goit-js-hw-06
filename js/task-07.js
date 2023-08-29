const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = rangeInput.value + 'px';
rangeInput.addEventListener("input", onRangeChange);

function onRangeChange(event) {
    const fontSize = event.target.value + 'px';
    text.style.fontSize = fontSize;
}