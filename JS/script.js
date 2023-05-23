window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

$('ul.subheader__tabs').on('click', 'li:not(.subheader__tab_active)', function() {
    $(this)
        .addClass('subheader__tab_active').siblings().removeClass('subheader__tab_active')
        .closest('div.container').find('div.subheader__content').removeClass('subheader__content_active').eq($(this).index()).addClass('subheader__content_active');
});

$('.subheader-item__link').each(function(i) {
    $(this).on('click', function(e) {
        e.preventDefault();
        $('.subheader-item__content').eq(i).toggleClass('subheader-item__content_active');
        $('.subheader-item__second').eq(i).toggleClass('subheader-item__second_active');
    })
})
$('.subheader-item__back').each(function(i) {
    $(this).on('click', function(e) {
        e.preventDefault();
        $('.subheader-item__content').eq(i).toggleClass('subheader-item__content_active');
        $('.subheader-item__second').eq(i).toggleClass('subheader-item__second_active');
    })
})


//modal

$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
})
$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.subheader-item__name, .action__item-name').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
})