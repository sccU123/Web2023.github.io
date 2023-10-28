// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ nombre, precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    var carritoItems = document.getElementById('carrito-items');
    var total = 0;

    carritoItems.innerHTML = '';

    carrito.forEach(function (item) {
        var productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <h2>${item.nombre}</h2>
            <p>Precio: $${item.precio}</p>
        `;
        carritoItems.appendChild(productoDiv);
        total += item.precio;
    });

    // Muestra el total en el carrito
    var totalDiv = document.createElement('div');
    totalDiv.classList.add('producto');
    totalDiv.innerHTML = `
        <h2>Total del Carrito</h2>
        <p>Total: $${total.toFixed(2)}
    `;
    carritoItems.appendChild(totalDiv);
}

// Llama a la función para mostrar el carrito al cargar la página
mostrarCarrito();
