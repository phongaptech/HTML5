$('#add').click(function () {
    const text = $('#task').val().trim();
    if (!text) return;

    const item = `<li>
        <span class="text">${text}</span>
        <button class="done">✔</button>
        <button class="edit">✏</button>
        <button class="delete">🗑</button>
      </li>`;

    $('#todo-list').append(item);
    $('#task').val('');
});

$('#todo-list').on('click', '.done', function () {
    $(this).closest('li').toggleClass('done');
});

$('#todo-list').on('click', '.edit', function () {
    const li = $(this).closest('li');
    const text = li.find('.text').text();
    const newText = prompt("Sửa nội dung:", text);
    if (newText !== null) {
        li.find('.text').text(newText);
    }
});

$('#todo-list').on('click', '.delete', function () {
    $(this).closest('li').remove();
});