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
// console.log(navbar)

navbar.forEach(element => {
    element.addEventListener('click', function () {
        navbar.forEach(nav => nav.classList.remove("active"))

        this.classList.add("active")
    })
})
//
// function myFunction() {
//     let x = document.getElementById('myNavbar');
//     if (x.className === 'navbar') {
//         x.className += ' responsive';
//     } else {
//         x.className = 'navbar';
//     }
// }


let imageSources = ['/img/cap_1.png', '/img/cap_2.png', '/img/cap_3.png', '/img/cap_4.png']
imageSources.forEach(element => {
    let img = document.createElement("img")
    img.width = '100'
    img.height = '100'
    img.style.marginLeft = '7px'
    img.src = element
    document.getElementById("cartin").appendChild(img)
})




