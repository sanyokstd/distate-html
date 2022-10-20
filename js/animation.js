$(function() {

    /* первая */
    function first_anim() {
        $('.p-animmono__round-red').animate({
            left: "35%",
            top: "69.2%"
        }, 1000, function() {
            $('.p-animmono__round-red').animate({
                left: "48%",
                top: "77.5%"
            }, 1000);
        }, false);

        setTimeout(function(){
            $('.p-animmono__round-red').animate({
                left: "35%",
                top: "69.2%"
            }, 1000, function() {
                $('.p-animmono__round-red').animate({
                    left: "49%",
                    top: "59%"
                }, 1000);
            });
        }, 2000);
    }
    first_anim();
    setInterval(function() {
        first_anim();
    }, 4000);

    /* Вторая */
    function second_anim() {
        setTimeout(function(){
            $('.p-animmono__round-green').animate({
                left: "29.2%",
                top: "65%"
            }, 1000, function() {
                $('.p-animmono__round-green').animate({
                    left: "21.4%",
                    top: "60%"
                }, 1000);
            });
        }, 500);
        setTimeout(function(){
            $('.p-animmono__round-green').animate({
                left: "29.2%",
                top: "65%"
            }, 1000, function() {
                $('.p-animmono__round-green').animate({
                    left: "43%",
                    top: "55.2%"
                }, 1000);
            });
        }, 2500);
    }
    second_anim();
    setInterval(function() {
        second_anim();
    }, 4000);

    /* Третья */
    function thir_anim() {
        setTimeout(function(){
            $('.p-animmono__round-blue').animate({
                left: "24%",
                top: "73%"
            }, 1000);
        }, 1000);

        setTimeout(function(){
            $('.p-animmono__round-blue').animate({
                left: "46%",
                top: "57%"
            }, 1000);
        }, 2000);
    }
    thir_anim();
    setInterval(function() {
        thir_anim();
    }, 2000);


    /* Monitor-animate */

    var count = $('#count-col').val();

    var item1 = 2;
    setInterval(function() {
        if(item1 == 10) {
            $('.p-animmono__monitem').removeClass('first');
            $('.p-animmono__monitem').removeClass('second');
            $('.p-animmono__monitem').removeClass('thirs');
            item1 = 1;
        } else {
            $('.p-animmono__monitem-' + item1).addClass('first');
            var item2 = item1 - 1;
            var item3 = item1 - 2;
            var itemhide = item1 - 3;
            $('.p-animmono__monitem-' + item2).removeClass('first');
            $('.p-animmono__monitem-' + item2).addClass('second');
            $('.p-animmono__monitem-' + item3).removeClass('second');
            $('.p-animmono__monitem-' + item3).addClass('thirs');
            $('.p-animmono__monitem-' + itemhide).removeClass('thirs');
            item1++;
        }
    }, 2000);

});