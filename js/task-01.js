const listOfCategories = document.querySelectorAll(".item");
console.log(`Number of Categories: ${listOfCategories.length}`)

listOfCategories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});