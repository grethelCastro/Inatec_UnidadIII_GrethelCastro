document.addEventListener('DOMContentLoaded', () => {  
    // Mostrar los elementos en el carrito al cargar la página  
    mostrarCarrito();  

    // Evento para vaciar el carrito  
    const botonVaciar = document.getElementById('vaciar-carrito');  
    botonVaciar.addEventListener('click', vaciarCarrito);  
});  

function mostrarCarrito() {  
    const listaCarrito = document.getElementById('lista-carrito');  
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];  

    // Limpiar el lista-carrito  
    listaCarrito.innerHTML = '';  

    // Verificar si hay elementos en el carrito  
    if (carrito.length === 0) {  
        listaCarrito.innerHTML = '<p>No hay elementos en tu carrito.</p>';  
        return;  
    }  

    // Mostrar cada elemento en el carrito  
    carrito.forEach((producto, index) => {  
        const { nombre, descripcion, imagen } = producto;  
        const div = document.createElement('div');  
        div.innerHTML = `  
            <h3>${nombre}</h3>  
            <img src="${imagen}" alt="${nombre}" style="width: 100px;">  
            <p>${descripcion}</p>  
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>  
        `;  
        listaCarrito.appendChild(div);  
    });  
}  

function vaciarCarrito() {  
    localStorage.removeItem('carrito');  
    mostrarCarrito();  
}  

function eliminarDelCarrito(index) {  
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];  
    carrito.splice(index, 1); // Quitar el producto  
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar de nuevo en localStorage  
    mostrarCarrito(); // Actualizar la vista del carrito  
}