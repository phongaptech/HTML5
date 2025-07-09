// const el = document.getElementById("demo");
// const btn = document.getElementById("myBtn");
// btn.addEventListener("click", () => {
//     el.textContent = "Hello";
// });

const listItems = document.querySelectorAll("ul li");
const items = document.getElementsByClassName("item");
const titles = document.getElementsByTagName("h2");
const firstMsg = document.querySelector(".msg");
const btn = document.getElementById("myBtn");
btn.addEventListener('click', () => {
    listItems.forEach(item => {
        item.style.color = "green"
    });
    for (let i = 0; i < items.length; i++) {
        items[i].style.color = "blue";
    }
    for (let title of titles) {
        title.style.color = "red"
    }
    firstMsg.style.color = "orange";
})