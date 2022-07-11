$(document).ready(function() {
    $('.filter-items').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            // $('.post-box').show('1000');
            $('.post-box').show('500');
        } else {
            // $('.post-box').not('.' + value).hide('1000');
            $('.post-box').not('.' + value).hide('500');
            // $('.post-box').filter('.' + value).show('1000');
            $('.post-box').filter('.' + value).show('500');
        }

    });

    $('.fliter-items').click(function() {
        $(this).addClass("active-filter").sibling().removeClass('active-filter');
    });
});

//header background change on scroll
let header = document.querySelector('header')
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});