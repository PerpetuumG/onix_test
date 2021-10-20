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

// Работа с tasks. Увеличение и уменьшение значений
//получаем значения tasks
let tasks1 = document.querySelector('#task__text-1').innerHTML
let tasks2 = document.querySelector('#task__text-2').innerHTML

function myFunction() {
    let message = 'Are you sure you want to change the number of tasks?'
    if (confirm(message)) {
        if (tasks2 > 0) {
            //tasks1 = tasks1 + 1
            //tasks2 = tasks2 - 1
            tasks1 = Number(tasks1) + 1
            tasks2 = Number(tasks2) - 1
        } else {
            alert('Количество открытых задач не может становиться отрицательным числом')
        }
    } else {

        if (tasks1 > 0) {
            //tasks1 = tasks1 - 1
            //tasks2 = tasks2 + 1
            tasks1 = Number(tasks1) - 1
            tasks2 = Number(tasks2) + 1
        }
        else {
            alert('Количество выполненных задач не может становиться отрицательным числом')
        }
    }
    document.getElementById("task__text-1").innerHTML = "";
    document.getElementById("task__text-1").append(tasks1)
    document.getElementById("task__text-2").innerHTML = "";
    document.getElementById("task__text-2").append(tasks2)
}


//Работа с картинками
//Добавление картинок на страницу
let imageSources = ['/img/cap_1.png', '/img/cap_2.png', '/img/cap_3.png', '/img/cap_4.png']
imageSources.forEach(element => {
    let img = document.createElement("img")
    img.width = '100'
    img.height = '100'
    img.style.marginLeft = '7px'
    img.src = element
    document.getElementById("cartin").appendChild(img)
})






