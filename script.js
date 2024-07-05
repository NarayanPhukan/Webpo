document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('.toggle');
    var nav = document.querySelector('header nav');

    toggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
