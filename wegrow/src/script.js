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

    for (var x = 0; x < disappears.length; x++) {
        var disappearTop = disappears[x].getBoundingClientRect().top;
        var disappearBottom = disappears[x].getBoundingClientRect().bottom;

        if (disappearTop > windowHeight || disappearBottom < 0) {
            disappears[x].classList.add('gone');
        } else {
            disappears[x].classList.remove('gone');
        }
    }
}



