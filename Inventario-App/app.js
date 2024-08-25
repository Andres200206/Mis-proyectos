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

// Función para exportar los datos a un archivo Excel
function exportToExcel() {
  if (inventory.length === 0) {
    alert("El inventario está vacío. Agrega productos antes de guardar.");
    return;
  }

  // Crear un nuevo libro de trabajo (workbook)
  let workbook = XLSX.utils.book_new();

  // Convertir los datos del inventario a un formato adecuado para Excel
  let inventoryData = inventory.map(item => [item.name, item.quantity]);
  inventoryData.unshift(["Nombre del Producto", "Cantidad"]);  // Añadir encabezados

  // Crear una hoja de trabajo (worksheet) a partir de los datos del inventario
  let worksheet = XLSX.utils.aoa_to_sheet(inventoryData);

  // Añadir la hoja de trabajo al libro de trabajo
  XLSX.utils.book_append_sheet(workbook, worksheet, "Inventario");

  // Generar el archivo Excel y desencadenar la descarga
  XLSX.writeFile(workbook, "Inventario.xlsx");
}
