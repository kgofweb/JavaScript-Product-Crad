const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.shoeBackground');

let prevColor = "blue";
let animationEnd = true;

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(color => color.addEventListener('click', changeColor));

// create function changeSize
function changeSize() {
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

// create function changColor
function changeColor() {
    if(!animationEnd) return;

    // initalise let
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if(color == prevColor) return;

    colors.forEach(color => color.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    
    // Add class show to shoe
    shoes.forEach(shoe => shoe.classList.remove('show'));
    shoe.classList.add('show');


    gradients.forEach(gradient => gradient.classList.remove('first', 'second'));
    // Add class first and Second
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    // Add animation
    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    });
}

// Resize
let x = window.matchMedia("(max-width: 1000px)");

window.addEventListener('resize', changeHeight);

// Function changeHeight
function changeHeight() {
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();


