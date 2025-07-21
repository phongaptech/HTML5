let editIndex = -1;
$('#student-form').on('submit', function (e) {
    e.preventDefault();
    const name = $('#name').val();
    const age = $('#age').val();
    const className = $('#class').val();
    if (!name || !age || !className) return alert("Điền đầy đủ thông tin");
    const row = `<tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${className}</td>
        <td>
          <button class="edit">Sửa</button>
          <button class="delete">Xoá</button>
        </td>
      </tr>`;
    if (editIndex >= 0) {
        $('#student-list tr').eq(editIndex).replaceWith(row);
        editIndex = -1;
    } else {
        $('#student-list').append(row);
    }
    $('#name, #age, #class').val('');
});
$('#student-list').on('click', '.edit', function () {
    const row = $(this).closest('tr');
    const cells = row.find('td');
    $('#name').val(cells.eq(0).text());
    $('#age').val(cells.eq(1).text());
    $('#class').val(cells.eq(2).text());
    editIndex = row.index();
});
$('#student-list').on('click', '.delete', function () {
    $(this).closest('tr').remove();
});