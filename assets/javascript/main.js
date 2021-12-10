var btnMenu = document.querySelector('.mobile-menu')
var menu = document.getElementById('dashboad')

btnMenu.addEventListener('click',function () {
    menu.style.display = 'block'
})

menu.addEventListener('click',function () {
    menu.style.display = 'none'
})