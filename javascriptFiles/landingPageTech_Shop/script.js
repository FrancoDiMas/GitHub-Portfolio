// Menu Design
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const menuIcon2 = document.querySelector('#menu-icon-close');
const sliderPause = document.querySelector('.slider-child');
const menuLinks = document.querySelectorAll('.navbar a');

// Adding Class
menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  sliderPause.classList.toggle('pause');
};

// Removing Class
menuIcon2.onclick = () => {
  navbar.classList.remove('active');
  sliderPause.classList.remove('pause');
}

// Closing Menu (when links are clicked)
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Close
    navbar.classList.remove('active');
    sliderPause.classList.remove('pause');
  });
});

// Opening Details Site
const buttons = document.querySelectorAll('.button-item');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const action = event.target.dataset.action;

    switch (action) {
      case 'button-a':
        // Intructions to open a model
        window.location.href = 'details.html';
        break;

    }
  });
});
