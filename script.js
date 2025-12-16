// -----------------MENU HAMBURGUER-----------------
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("iconeBarras")
let iconeX = document.getElementById("iconeX")
let sombra = document.getElementById("sombra")

function abreFechaMenu() {
    //Se o menu está fechado
    if (window.getComputedStyle(menu).right == "-210px") {
        //Abrir o menu
        menu.style.right = "0"

        //Mostrar icone X
        iconeX.style.display = "inline"

        //Esconde icone barras
        iconeBarras.style.display = "none"

        sombra.style.right = "0"

    } else {
        //Fechar o menu
        menu.style.right = "-210px"

        //Esconder icone X
        iconeX.style.display = "none"

        //Mostrar o icone barras
        iconeBarras.style.display = "inline"

        sombra.style.right = "-101vw"
    }
}

onresize = () => {
    if (window.getComputedStyle(menu).right == "-210px") {
        //Mostra icone X
        iconeX.style.display = "none"
    } else {
        //Esconde icone barras
        iconeBarras.style.display = "inline"
    }
}


// carrossel

const carrosselSlide = document.querySelector('.carousel-slide');
const carrosselImages = document.querySelectorAll('.carousel-slide img');

// Botões
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


let counter = 0;

const size = carrosselImages[0].clientWidth;


carrosselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextBtn.addEventListener('click', () => {
    if (counter >= carrosselImages.length - 1) return; // Impede de ir além do último slide
    counter++;
    carrosselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


prevBtn.addEventListener('click', () => {
    if (counter <= 0) return; 
    counter--;
    carrosselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


