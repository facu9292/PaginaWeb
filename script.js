let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    // Limpiar el contenido actual del carrito
    document.getElementById('carrito').innerHTML = '';

    // Calcular el total
    let total = 0;
    for (let item of carrito) {
        total += item.precio;
    }

    // Actualizar el contenido del carrito
    for (let item of carrito) {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.nombre} - $${item.precio}`;
        document.getElementById('carrito').appendChild(listItem);
    }

    // Actualizar el total en el carrito
    document.getElementById('total').textContent = `Total: $${total}`;
}
