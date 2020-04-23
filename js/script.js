// Animations Navbar
function menuBurger(){

    var line1 = document.querySelector('.line-1');
    var line2 = document.querySelector('.line-2');
    var line3 = document.querySelector('.line-3');
    var burger = document.querySelector('.burger-menu');
    var menu = document.querySelector('.menu');
    var listmenu = document.querySelector('.list-menu');
    
    burger.addEventListener("click", function(){    
        line2.classList.toggle("line-2-active");
        line1.classList.toggle("line-1-active");
        line3.classList.toggle("line-3-active");
        menu.classList.toggle("menu-active");
        burger.classList.toggle("burger-menu-active");
        listmenu.classList.toggle("list-menu-active");
    })
}

menuBurger();


