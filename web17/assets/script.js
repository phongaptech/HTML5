let dsNhanVien = [];
let idTuTang = 1;
function renderTable() {
    const tbody = document.querySelector('#tableNV tbody');
    tbody.innerHTML = "";
    dsNhanVien.forEach((nv, i) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${i + 1}</td>
          <td>${nv.id}</td>
          <td>${nv.name}</td>
          <td>${nv.age}</td>
          <td>${nv.gender}</td>
          <td>${nv.position}</td>
          <td>${nv.note}</td>
          <td>
            <!-- <button class="btn btn-edit" onclick="editNV(${nv.id})">Sửa</button> -->
            <button class="btn btn-del" onclick="xoaNV(${nv.id})">Xóa</button>
          </td>
        `;
        tbody.appendChild(tr);
    });
}
document.getElementById('formNV').onsubmit = function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const age = +document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const position = document.getElementById('position').value;
    const note = document.getElementById('note').value.trim();
    if (!name || age < 18 || age > 65) {
        alert('Vui lòng nhập đúng thông tin!');
        return;
    }
    dsNhanVien.push({
        id: idTuTang++,
        name, age, gender, position, note
    });
    renderTable();
    this.reset();
};
function xoaNV(id) {
    if (confirm('Bạn chắc chắn muốn xóa nhân viên này?')) {
        dsNhanVien = dsNhanVien.filter(nv => nv.id !== id);
        renderTable();
    }
}