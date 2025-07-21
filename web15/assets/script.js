fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector("#userTable tbody");

        data.forEach(user => {
            const row = document.createElement("tr");

            row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td><button onclick="getUserDetail(${user.id})">Xem chi tiết</button></td>
      `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.log("Lỗi:", error));
function getUserDetail() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => {
            const detailDiv = document.getElementById("userDetail");
            detailDiv.innerHTML = `
        <p><strong>Tên:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Điện thoại:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
        <p><strong>Địa chỉ:</strong> ${user.address.street}, ${user.address.city}</p>
        <p><strong>Công ty:</strong> ${user.company.name}</p>
      `;
        })
        .catch(error => console.log("Lỗi:", error));
}
