$('.owl-carousel').owlCarousel({
    loop:true, // true faz o carousel ficar rodando quando acaba as opções
    margin:10,
    nav:false, // quer mostrar o controle de de navegação?
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})