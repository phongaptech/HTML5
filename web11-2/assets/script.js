let students = [];
students.push("An");
students.push("Bình");
students.push("Chi");
let index = students.indexOf("Bình");
if (index !== -1) {
    students.splice(index, 1);
}
students.unshift("Dũng");
const list = document.getElementById("studentList");
students.forEach(function (name) {
    let li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
});