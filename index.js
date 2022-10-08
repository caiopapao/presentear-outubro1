const botaoMenu = document.querySelector('.cabecalho__menu--mobile')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () =>{
    menu.classList.toggle('menu-lateral--ativo')
})

alert("cotem virus");