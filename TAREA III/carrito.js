function mostrarCarrito() {  
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];  
    const listaCarrito = document.getElementById('lista-carrito');  
    listaCarrito.innerHTML = '';  

    if (carrito.length === 0) {  
        listaCarrito.innerHTML = '<p>No hay elementos en tu carrito.</p>';  
        return;  
    }  

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
    carrito.splice(index, 1);  
    localStorage.setItem('carrito', JSON.stringify(carrito));  
    mostrarCarrito();  
}  

document.addEventListener('DOMContentLoaded', mostrarCarrito);