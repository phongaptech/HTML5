const title = document.getElementById("main-title");
title.innerText = "Chào mừng bạn đến với khóa học JavaScript!";

const desc = document.querySelector(".description");
desc.innerHTML = "Bạn sẽ học về <strong>DOM, Events</strong>";

function sayHello() {
    const nameInput = document.getElementById("student-name");
    const greeting = document.getElementById("greeting");
    const name = nameInput.value;
    greeting.innerText = "Xin chào, " + name + "!";
}