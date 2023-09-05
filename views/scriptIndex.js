//Obtenemos el modal y el boton para cerrarlo
const modal = document.getElementById('confirmationModal');
const closeModal = document.getElementById('closeModal');
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    showConfirmationModal();
});

//Mostramos el modal al agregar contacto
function showConfirmationModal() {
    modal.style.display = 'block';
};

//Cerramos el modal al presionar el boton
closeModal.onclick = function () {
    modal.style.display = 'none';
};

//Cerramos el modal si se hace click fuera de el
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
