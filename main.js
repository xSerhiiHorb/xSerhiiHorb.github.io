//Btn Burger

const iconMenu = document.querySelector(".burger");
const burger = document.querySelector('.burger');
const menuBody = document.querySelector(".menu_body");
const nav = document.querySelector('.menu_body')
const navBar = document.querySelectorAll('.menu_body li')

if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        nav.classList.toggle('nav-active');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        burger.classList.toggle('toggle')
        
        navBar.forEach(function (link, index) {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navBarFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        }
        );
    });
}

//openFormReserve ------------------------------------>

const openReserve = document.querySelector(".button-reserve")
const openRst = document.querySelector(".wrap_reserve")
const closeReserve = document.querySelector(".wrap_reserve")
const lockPadd = document.querySelector(".lock_padding")

openReserve.addEventListener('click', function (e){
    document.body.classList.toggle('_lock');
    document.body.classList.toggle('addPad');
    openRst.classList.toggle('open');
})

closeReserve.addEventListener('click', function (e) {
    // if(openRst.classList.contains('open')) {
    //     openRst.classList.remove('open')
        // document.body.classList.remove('_lock');
    // } 
    if(!e.target.closest('.reserve-form')){ 
        openRst.classList.remove('open')
        setTimeout(() => {                 
            document.body.classList.remove('_lock') 
            document.body.classList.remove('addPad')
        }, 300)
        }      
})

//gotoPromotions -------------------------->

const gotoPromotions = document.querySelector('.goto')

gotoPromotions.addEventListener('click', function (e) {
    if (iconMenu.classList.contains('_active')){
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        burger.classList.remove('toggle')
    }
    navBar.forEach(function (link) {
        if(link.style.animation){
        link.style.animation = '';
    }
    }
    );
})
//  toTop Btn --------------------------->

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 150) {
        toTop.classList.add('active');
    }else {
        toTop.classList.remove('active');
    }
})

