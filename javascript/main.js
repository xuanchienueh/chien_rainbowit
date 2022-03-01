var menu_btn_mobile_table = document.querySelector('.menu')
var close_menu_mobile_table = document.querySelector('.close_menu')
var list_menu_mobile_table = document.querySelector('.nav_mobile')
var main_menu = document.querySelectorAll('.nav-item .main_menu .nav-link')
console.log(main_menu)
var main_menu_arrow = document.querySelectorAll('.nav-item .main_menu')
var submenu = document.querySelectorAll('.submenu')

menu_btn_mobile_table.onclick = function () {
    list_menu_mobile_table.style.left = '0px'
    list_menu_mobile_table.style.opacity = '1'
}
close_menu_mobile_table.onclick = function () {
    list_menu_mobile_table.style.opacity = '0'
    list_menu_mobile_table.style.left = '-100%'
}
main_menu.forEach((item) => {
    item.onclick = () => {
        item.style.color = '#fd4766'
        console.log(item)
    }
})
main_menu_arrow.forEach((item) => {
    item.onclick = () => {
        item.style.color = '#fd4766'
        submenu.forEach((submenu_item) => {
            submenu_item.style.opacity == 0 ? submenu_item.style.opacity = '1' : submenu_item.style.opacity = 0
            submenu_item.style.opacity == 0 ? submenu_item.style.height = '0' : submenu_item.style.height = '100%'
            submenu_item.style.opacity == 1 ? submenu_item.style.height = '100%' : submenu_item.style.height = '0px'

        })
    }
})