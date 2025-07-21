$(document).ready(function () {
    $('#list li').on('click', function () {
        $(this).toggleClass('done');
    });
});
$(document).ready(function () {
    const table = $('#userTable tbody');
    const form = $('userForm');
    let count = 0;
    form.on("submit", function (e) {
        e.preventDefault();
        const name = $('#name').val.trim();
        const age = $('age').val.trim();
        const genderInput = $('input[name="gender"]:checked');
        if (!name || !age || !gender) {
            alert("Vui lòng nhập đầy đủ thông tin.");
            return;
        }
        count++;
        const row = $(`
            <tr>
                <td>${count}</td>
                <td>${name}</td>
                <td>${age}</td>
                <td>${gender}</td>
                <td><button class="deleteBtn"></button></td>
            </tr>
        `);
        table.append(row);
    });
});