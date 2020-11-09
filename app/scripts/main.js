const navToggle = document.querySelectorAll('.nav__toggle, .nav__background');
navToggle.forEach(function(toggle) {
    toggle.onclick = function(e) {
        e.preventDefault();
        let bodyClassList = document.body.classList;
        if (bodyClassList.contains('nav-open')) {
            bodyClassList.remove('nav-open')
        } else {
            bodyClassList.add('nav-open');
        }
    };
});