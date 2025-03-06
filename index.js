let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
    if (menuIcon.classList.contains('bx-x')){
        menuIcon.style.color = 'black';
    }else{
        menuIcon.style.backgroundcolor = 'orange';
    }
    
}