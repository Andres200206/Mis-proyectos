// Array para almacenar los productos
let inventory = [];

// Función para agregar un producto al inventario
function addProduct() {
  const name = document.getElementById('product-name').value;
  const quantity = parseInt(document.getElementById('product-quantity').value);

  if (name && quantity) {
    inventory.push({ name, quantity });
    renderInventory();
    clearForm();
  } else {
    alert("Por favor, complete todos los campos.");
  }
}

// Función para limpiar el formulario
function clearForm() {
  document.getElementById('product-name').value = '';
  document.getElementById('product-quantity').value = '';
}

// Función para renderizar la lista de inventario en el DOM
function renderInventory() {
  const inventoryList = document.getElementById('inventory-list');
  inventoryList.innerHTML = '';

  inventory.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.quantity}`;
    inventoryList.appendChild(li);
  });
}