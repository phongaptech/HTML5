// app.js

document.addEventListener('DOMContentLoaded', () => {
    // Determine the current page
    const path = window.location.pathname;

    if (path.includes('product.html')) {
        initProductPage();
    } else if (path.includes('category.html')) {
        initCategoryPage();
    }
});

// --- Common Utility Functions (for both pages) ---

function getLocalStorageData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

function setLocalStorageData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// --- Product Management Logic ---

function initProductPage() {
    const productForm = document.getElementById('productForm');
    const productNameInput = document.getElementById('productName');
    const productPriceInput = document.getElementById('productPrice');
    const productCategorySelect = document.getElementById('productCategory');
    const productDescriptionTextarea = document.getElementById('productDescription');
    const submitProductBtn = document.getElementById('submitProductBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const productListTableBody = document.querySelector('#productListTable tbody');

    let products = getLocalStorageData('products');
    let editingProductId = null;

    // Load categories for the product form select dropdown
    function loadCategoriesForProductForm() {
        const categories = getLocalStorageData('categories');
        productCategorySelect.innerHTML = '<option value="">-- Chọn danh mục --</option>'; // Reset options
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.name; // Use category name as value for simplicity
            option.textContent = category.name;
            productCategorySelect.appendChild(option);
        });
    }

    function renderProducts() {
        productListTableBody.innerHTML = '';
        products.forEach(product => {
            const row = productListTableBody.insertRow();
            row.dataset.id = product.id;

            row.insertCell().textContent = product.name;
            row.insertCell().textContent = product.price;
            row.insertCell().textContent = product.category;
            row.insertCell().textContent = product.description;

            const actionsCell = row.insertCell();
            const editButton = document.createElement('button');
            editButton.textContent = 'Sửa';
            editButton.addEventListener('click', () => editProduct(product.id));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Xóa';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => deleteProduct(product.id));

            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
        });
    }

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = productNameInput.value.trim();
        const price = parseFloat(productPriceInput.value);
        const category = productCategorySelect.value;
        const description = productDescriptionTextarea.value.trim();

        if (name && !isNaN(price) && category) {
            if (editingProductId) {
                const productIndex = products.findIndex(p => p.id === editingProductId);
                if (productIndex !== -1) {
                    products[productIndex] = {
                        id: editingProductId,
                        name,
                        price,
                        category,
                        description
                    };
                }
                editingProductId = null;
                submitProductBtn.textContent = 'Thêm Sản phẩm';
                cancelEditBtn.style.display = 'none';
            } else {
                const newProduct = {
                    id: Date.now(),
                    name,
                    price,
                    category,
                    description
                };
                products.push(newProduct);
            }
            setLocalStorageData('products', products);
            renderProducts();
            productForm.reset();
        } else {
            alert('Vui lòng điền đầy đủ các trường bắt buộc (Tên, Giá, Danh mục).');
        }
    });

    function editProduct(id) {
        const productToEdit = products.find(product => product.id === id);
        if (productToEdit) {
            productNameInput.value = productToEdit.name;
            productPriceInput.value = productToEdit.price;
            productCategorySelect.value = productToEdit.category;
            productDescriptionTextarea.value = productToEdit.description;

            editingProductId = id;
            submitProductBtn.textContent = 'Cập nhật Sản phẩm';
            cancelEditBtn.style.display = 'inline-block';
        }
    }

    cancelEditBtn.addEventListener('click', () => {
        editingProductId = null;
        productForm.reset();
        submitProductBtn.textContent = 'Thêm Sản phẩm';
        cancelEditBtn.style.display = 'none';
    });

    function deleteProduct(id) {
        if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
            products = products.filter(product => product.id !== id);
            setLocalStorageData('products', products);
            renderProducts();
            if (editingProductId === id) {
                editingProductId = null;
                productForm.reset();
                submitProductBtn.textContent = 'Thêm Sản phẩm';
                cancelEditBtn.style.display = 'none';
            }
        }
    }

    // Initial load for product page
    loadCategoriesForProductForm(); // Load categories when product page loads
    renderProducts();
}

// --- Category Management Logic ---

function initCategoryPage() {
    const categoryForm = document.getElementById('categoryForm');
    const categoryNameInput = document.getElementById('categoryName');
    const categoryQuantityInput = document.getElementById('categoryQuantity');
    const submitCategoryBtn = document.getElementById('submitCategoryBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const categoryListTableBody = document.querySelector('#categoryListTable tbody');

    let categories = getLocalStorageData('categories');
    let editingCategoryId = null;

    function renderCategories() {
        categoryListTableBody.innerHTML = '';
        categories.forEach(category => {
            const row = categoryListTableBody.insertRow();
            row.dataset.id = category.id;

            row.insertCell().textContent = category.name;
            row.insertCell().textContent = category.quantity;

            const actionsCell = row.insertCell();
            const editButton = document.createElement('button');
            editButton.textContent = 'Sửa';
            editButton.addEventListener('click', () => editCategory(category.id));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Xóa';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => deleteCategory(category.id));

            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
        });
    }

    categoryForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = categoryNameInput.value.trim();
        const quantity = parseInt(categoryQuantityInput.value, 10);

        // Basic validation for name uniqueness
        if (categories.some(cat => cat.name === name && cat.id !== editingCategoryId)) {
            alert('Tên danh mục đã tồn tại. Vui lòng chọn tên khác.');
            return;
        }

        if (name && !isNaN(quantity)) {
            if (editingCategoryId) {
                const categoryIndex = categories.findIndex(c => c.id === editingCategoryId);
                if (categoryIndex !== -1) {
                    categories[categoryIndex] = {
                        id: editingCategoryId,
                        name,
                        quantity
                    };
                }
                editingCategoryId = null;
                submitCategoryBtn.textContent = 'Thêm Danh mục';
                cancelEditBtn.style.display = 'none';
            } else {
                const newCategory = {
                    id: Date.now(),
                    name,
                    quantity
                };
                categories.push(newCategory);
            }
            setLocalStorageData('categories', categories);
            renderCategories();
            categoryForm.reset();
        } else {
            alert('Vui lòng điền đầy đủ các trường bắt buộc (Tên, Số lượng).');
        }
    });

    function editCategory(id) {
        const categoryToEdit = categories.find(category => category.id === id);
        if (categoryToEdit) {
            categoryNameInput.value = categoryToEdit.name;
            categoryQuantityInput.value = categoryToEdit.quantity;

            editingCategoryId = id;
            submitCategoryBtn.textContent = 'Cập nhật Danh mục';
            cancelEditBtn.style.display = 'inline-block';
        }
    }

    cancelEditBtn.addEventListener('click', () => {
        editingCategoryId = null;
        categoryForm.reset();
        submitCategoryBtn.textContent = 'Thêm Danh mục';
        cancelEditBtn.style.display = 'none';
    });

    function deleteCategory(id) {
        // Check if any products are using this category before deleting
        const products = getLocalStorageData('products');
        const categoryToDelete = categories.find(cat => cat.id === id);

        if (categoryToDelete && products.some(p => p.category === categoryToDelete.name)) {
            alert(`Không thể xóa danh mục "${categoryToDelete.name}" vì có sản phẩm đang sử dụng danh mục này.`);
            return;
        }

        if (confirm('Bạn có chắc chắn muốn xóa danh mục này?')) {
            categories = categories.filter(category => category.id !== id);
            setLocalStorageData('categories', categories);
            renderCategories();
            if (editingCategoryId === id) {
                editingCategoryId = null;
                categoryForm.reset();
                submitCategoryBtn.textContent = 'Thêm Danh mục';
                cancelEditBtn.style.display = 'none';
            }
        }
    }

    // Initial load for category page
    renderCategories();
}