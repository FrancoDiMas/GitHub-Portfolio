const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const menuIcon2 = document.querySelector('#menu-icon-close');
const menuLinks = document.querySelectorAll('.navbar a');

// Adding Class
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// Removing Class
menuIcon2.onclick = () => {
    navbar.classList.remove('active');
}

// Closing Menu (when links are clicked)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Close
      navbar.classList.remove('active');
      sliderPause.classList.remove('pause');
    });
});

