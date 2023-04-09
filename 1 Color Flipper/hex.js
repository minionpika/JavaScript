// variables
const colors = [0, 1, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// helper functions
function randomNumberGenerator() {
    return Math.floor(Math.random() * colors.length) 
}

// event listener
btn.addEventListener('click', function() {
    let hexColor = '#'
    for (i=0; i<6; i++) {
        hexColor += colors[randomNumberGenerator()];
    }
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
})