let trabajos = document.querySelectorAll('.trabajo')


const scroll = () => {
    let scrollTop = document.documentElement.scrollTop

    for (i = 0; i <= trabajos.length; i++) {
        let alturaTrabajos = trabajos[i].offsetTop //Detecto la altura desde el inicio hasta el final
        if (alturaTrabajos - 500 <= scrollTop) {
            trabajos[i].style.opacity = 1;
        }
    }
}



window.addEventListener('scroll', scroll);





$('.contacto').click(function () {

    $('html,body').animate({
        scrollTop: $('.content-image').offset().top
    }, 2000);
});



   
$('.trabajos').click(function() {

    $('html,body').animate({
        scrollTop: $('.container-trabajos').offset().top
    }, 2000)
})

