let categories = JSON.parse(localStorage.getItem('categories')) || [];
let products = JSON.parse(localStorage.getItem('products')) || [];
function saveData() {
    localStorage.setItem('categories', JSON.stringify(categories));
    localStorage.setItem('products', JSON.stringify(products));
}
function renderCategories() {
    const table = document.getElementById('categoryTable')?.querySelector('tbody');
    if (table) {
        table.innerHTML = '';
        categories.forEach((cat, i) => {
            table.innerHTML += `
        <tr>
          <td>${cat.name}</td>
          <td>${cat.quantity}</td>
          <td>
            <button onclick="deleteCategory(${i})">Xoá</button>
          </td>
        </tr>`;
        });
    }
}
function renderCategoryOptions() {
    const select = document.getElementById('pcategory');
    if (select) {
        select.innerHTML = '<option value="">Chọn danh mục</option>';
        categories.forEach(cat => {
            select.innerHTML += `<option value="${cat.name}">${cat.name}</option>`;
        });
    }
}
function renderProducts() {
    const table = document.getElementById('productTable')?.querySelector('tbody');
    if (table) {
        table.innerHTML = '';
        products.forEach((p, i) => {
            table.innerHTML += `
        <tr>
          <td>${p.name}</td>
          <td>${p.price}</td>
          <td>${p.category}</td>
          <td>${p.description}</td>
          <td>
            <button onclick="deleteProduct(${i})">Xoá</button>
          </td>
        </tr>`;
        });
    }
}
function deleteCategory(index) {
    categories.splice(index, 1);
    saveData();
    renderCategories();
}
function deleteProduct(index) {
    products.splice(index, 1);
    saveData();
    renderProducts();
}
document.addEventListener('DOMContentLoaded', () => {
    const categoryForm = document.getElementById('categoryForm');
    if (categoryForm) {
        categoryForm.onsubmit = e => {
            e.preventDefault();
            const name = document.getElementById('cname').value.trim();
            const quantity = parseInt(document.getElementById('cqty').value);
            if (name && quantity >= 0) {
                categories.push({ name, quantity });
                saveData();
                categoryForm.reset();
                renderCategories();
            }
        };
        renderCategories();
    }
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.onsubmit = e => {
            e.preventDefault();
            const name = document.getElementById('pname').value.trim();
            const price = parseFloat(document.getElementById('pprice').value);
            const category = document.getElementById('pcategory').value;
            const description = document.getElementById('pdesc').value.trim();
            if (name && price > 0 && category) {
                products.push({ name, price, category, description });
                saveData();
                productForm.reset();
                renderProducts();
            }
        };
        renderCategoryOptions();
        renderProducts();
    }
});