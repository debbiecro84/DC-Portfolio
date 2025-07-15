document.addEventListener('DOMContentLoaded', function() {
    var logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        logoImg.addEventListener('click', function(e) {
            e.stopPropagation();
            logoImg.classList.add('rotate-right');
        });
        logoImg.addEventListener('mouseleave', function() {
            logoImg.classList.remove('rotate-right');
        });
        document.addEventListener('click', function(e) {
            if (!logoImg.contains(e.target)) {
                logoImg.classList.remove('rotate-right');
            }
        });
    }
}); 