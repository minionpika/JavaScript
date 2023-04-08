const colors = ["red", "blue", "black", "purple"];

// variables
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// helper functions
function randomNumberGenerator() {
    return Math.floor(Math.random() * colors.length) 
}

// event listener
btn.addEventListener('click', function() {
    const rnd = randomNumberGenerator();
    console.log(rnd)
    document.body.style.backgroundColor = colors[rnd]
    color.textContent = colors[rnd]
})