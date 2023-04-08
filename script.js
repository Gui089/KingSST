function menuShow() {
    let menuMobile = document.querySelector('.menu');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "menu_white_36dp.svg";
    }else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg";
    }
}

let missao = document.querySelector('.missao')
let showMissao = document.querySelector('.showmissao')

missao.addEventListener('click', function(){
    if(showMissao.style.display === 'block'){
        showMissao.style.display = 'none'
    }else {
        showMissao.style.display = 'block'
    }
})


let visao = document.querySelector('.visao')
let showVisao = document.querySelector('.showvisao')

visao.addEventListener('click', function(){
    if(showVisao.style.display === 'block'){
        showVisao.style.display = 'none'
    }else {
        showVisao.style.display = 'block'
    }
})

let valores = document.querySelector('.valores')
let showValores = document.querySelector('.showvalores')

valores.addEventListener('click', function(){
    if(showValores.style.display === 'block'){
        showValores.style.display = 'none'
    }else {
        showValores.style.display = 'block'
    }
})


