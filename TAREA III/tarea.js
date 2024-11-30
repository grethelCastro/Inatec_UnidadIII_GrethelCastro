document.addEventListener('DOMContentLoaded', () => {  
    const mobileMenu = document.getElementById('mobile-menu');  
    const navList = document.getElementById('nav-list');  

    mobileMenu.addEventListener('click', () => {  
        navList.classList.toggle('active');  
    });  

    // Agregar funcionalidad para añadir productos al carrito  
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');  
    botonesAgregarCarrito.forEach(boton => {  
        boton.addEventListener('click', agregarAlCarrito);  
    });  
});  

function agregarAlCarrito(event) {  
    const producto = {  
        nombre: event.currentTarget.dataset.nombre,  
        descripcion: event.currentTarget.dataset.descripcion,  
        imagen: event.currentTarget.dataset.imagen  
    };    
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];  
    carrito.push(producto);  
    localStorage.setItem('carrito', JSON.stringify(carrito));  

    alert(`${producto.nombre} ha sido agregado al carrito.`);  
}