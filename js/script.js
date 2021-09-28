/*
let ul = document.querySelector('ul')
let li = document.querySelectorAll('li')

li.forEach(el => {
    el.addEventListener('click', () => {
        ul.querySelector('.active').classList.remove('active')

        el.classList.add('active')
    })
})*/



let navbar = document.querySelector(".navbar").querySelectorAll("a")
console.log(navbar)

navbar.forEach(element => {
    element.addEventListener('click', function() {
        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active")
    })
})

