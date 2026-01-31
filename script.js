document.addEventListener('DOMContentLoaded', function() {
    const whatsAppNumber = '593995220227';

    // --- Lógica del Menú Móvil (Hamburguesa) ---
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Cierra el menú móvil al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });


    // --- Lógica para los botones de producto ---
    const productButtons = document.querySelectorAll('.product-btn');

    productButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            const message = encodeURIComponent(`Hola, me interesa el producto "${productName}". ¿Podrían darme más información?`);
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsAppNumber}&text=${message}`;
            
            window.open(whatsappUrl, '_blank');
        });
    });

});
