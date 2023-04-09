// variables
let counter = 0
const btns = document.querySelectorAll('.btn')
const value = document.getElementById('value')

// event listener
btns.forEach(function(btnsCallbck) {
    btnsCallbck.addEventListener('click', function(e) {
        const currentButton = e.currentTarget.classList
        if (currentButton.contains('decrease')) {
            counter--
            value.style.color = 'red'
        }
        else if (currentButton.contains('increase')) {
            counter++
            value.style.color = 'green'
        }
        else {
            counter = 0
            value.style.color = 'black'
        }
        value.textContent = counter
    })
})