window.addEventListener('scroll', revealAndDisappear);

function revealAndDisappear(){
    var reveals = document.querySelectorAll('.reveal');
    var disappears = document.querySelectorAll('.disappear');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 80;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }

    for (var i = 0; i < disappears.length; i++) {
        var disappearTop = disappears[i].getBoundingClientRect().top;
        var disappearBottom = disappears[i].getBoundingClientRect().bottom;

        if (disappearTop > windowHeight || disappearBottom < 0) {
            disappears[i].classList.add('gone');
        } else {
            disappears[i].classList.remove('gone');
        }
    }
}
