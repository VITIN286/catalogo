// Função para abrir o link do WhatsApp
function openWhatsApp() {
    var phoneNumber = '62994941754'; // Substitua pelo seu número de telefone
    var message = 'Olá, estou interessada nos produtos do catálogo!'; // Mensagem inicial (opcional)
    var image = ''; // Substitua pela URL da imagem que deseja enviar

    // Crie o link do WhatsApp com a mensagem e a imagem
    var whatsappLink = 'https://wa.me/+' + '5562994941754' + '?text=' + encodeURIComponent(message + '\n\n' + image);
    
    // Abra a janela do WhatsApp em uma nova guia
    window.open(whatsappLink, '_blank');
}

// Adicione um evento de clique aos botões do WhatsApp
var whatsappButtons = document.querySelectorAll('.whatsapp-button');
whatsappButtons.forEach(function(button) {
    button.addEventListener('click', openWhatsApp);
});


//navbar
function toggleMenu() {
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');

sidebar.classList.toggle('active');
menuToggle.classList.toggle('change');
}

function toggleMenu() {
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');

sidebar.classList.toggle('active');
menuToggle.classList.toggle('change');
}

function closeMenu() {
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');

sidebar.classList.remove('active');
menuToggle.classList.remove('change');
}

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn'); // Adicione esta linha

    sidebar.classList.toggle('active');
    menuToggle.classList.toggle('change');
    closeBtn.style.display = 'block'; // Adicione esta linha
}

function closeMenu() {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn'); // Adicione esta linha

    sidebar.classList.remove('active');
    menuToggle.classList.remove('change');
    closeBtn.style.display = 'none'; // Adicione esta linha
}