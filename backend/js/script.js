$(document).ready(function() {
    var $element = $('#bubble');
    var phrases = [
        'Добро пожаловать!',
        'Мы всегда рады вам :)',
        'Надеюсь вам у нас понравится!',
        'Бла бла БЛА ...',
    ];
    var index = -1;
    (function loopAnimation() {
        index = (index + 1) % phrases.length;
        bubbleText({
            element: $element,
            newText: phrases[index],
            letterSpeed: 70,
            callback: function() {
                setTimeout(loopAnimation, 1000);
            },
        });
    })();
});