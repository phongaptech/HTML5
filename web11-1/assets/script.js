// const table = document.getElementById("userTable").querySelector("tbody");
// const form = document.getElementById("userForm");
// let count = 0;

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.getElementById("name").value.trim();
//     const age = document.getElementById("age").value.trim();
//     const genderInput = document.querySelector('input[name="gender"]:checked');
//     const gender = genderInput ? genderInput.value : "";

//     if (!name || !age || !gender) {
//         alert("Vui lòng nhập đầy đủ thông tin.");
//         return;
//     }

//     count++;
//     const row = document.createElement("tr");
//     row.innerHTML = `
//         <td>${count}</td>
//         <td>${name}</td>
//         <td>${age}</td>
//         <td>${gender}</td>
//         <td><button class="deletebtn">Xóa</button></td>
//     `;

//     table.appendChild(row);

//     row.querySelector(".deletebtn").addEventListener("click", function () {
//         table.removeChild(row);
//         updateSTT();
//     });

//     form.reset();
// });

// function updateSTT() {
//     const rows = table.querySelectorAll("tr");
//     count = 0;
//     rows.forEach((row) => {
//         count++;
//         row.children[0].textContent = count;
//     });
// }

let nums = [5, 3, 9, 1];
console.log(nums);
nums.unshift(7);
console.log(nums);
nums.pop();
console.log(nums);
nums.splice(1, 1);
console.log(nums);