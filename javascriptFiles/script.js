//  toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Dos clases añadidas.
    navbar.classList.toggle('active');
};

//  scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    })
    //  sticky navbar 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //  remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//  scroll reveal 
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// btn send email
const $form = document.querySelector('#form');
const $buttomMailTo = document.querySelector('#trick');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttomMailTo.setAttribute('href', `mailto:francodimascio@hotmail.com?subject=Nombre: ${form.get('name')}. Correo: ${form.get('email')}&body=${form.get('message')}`)
    $buttomMailTo.click()
}

// about more info
function moreInfoAbout(){

    const moreInfoAbout = document.getElementById("about-more-info");
    const btnMoreInfoAbout = document.getElementById("moreInfoAbout-id");
    const aboutOut = document.getElementById("about-out");
    const textContainer = document.getElementById("moreInfoAbout-id").innerHTML;

    if (moreInfoAbout.style.display == "none") {
        aboutOut.style.display = "none";
        moreInfoAbout.style.display = "block";
        if (textContainer == "Read More") {
            btnMoreInfoAbout.innerHTML = "Read Less";
        }
        else if (textContainer == "Leer Más") {
            btnMoreInfoAbout.innerHTML = "Mostrar Menos";
        }
        // I know that i can use else here, but I´m just testing...
    } else {
    moreInfoAbout.style.display = "block";
    aboutOut.style.display = "block";
    moreInfoAbout.style.display = "none";
    if (textContainer == "Read Less") {
        btnMoreInfoAbout.innerHTML = "Read More"
    }
    else if (textContainer == "Mostrar Menos") {
        btnMoreInfoAbout.innerHTML = "Leer Más"
    }
    }
}

