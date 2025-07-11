// let count = 0;
// const btn = document.getElementById("btn");
// const res = document.getElementById("result");
// btn.addEventListener("click", () => {
//     count++;
//     res.textContent = "Số lần: " + count;
// });

// const btnS = document.getElementById("btnSave");
// btnS.addEventListener("click", () => {
//     localStorage.setItem("userName", "value");
// });
// const btnC = document.getElementById("btnClear");
// btnC.addEventListener("click", () => {
//     localStorage.removeItem("userName")
// })

// let count = 0;
// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     count++;
//     const li = document.createElement("li");
//     li.textContent = "" + count;
//     document.getElementById("number").appendChild(li);
//     const btnC = document.createElement("button");
//     btnC.textContent = "Xóa"
//     btnC.onclick = () => {
//         localStorage.removeItem("number");
//         li.remove();
//     }
//     li.appendChild(btnC)
// });

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}