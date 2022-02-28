var Index = 1;

showSlides(Index);

function plusSlides(n) { showSlides((Index += n)); }
function currentSlide(n) { showSlides((Index = n)); }

function showSlides(n) {
    var image = $(".head__baner__slider").children().toArray();
    // var info = $(".Slider__Info").children().toArray();
    var dots = $(".head__baner__Condition").children().toArray();
    // alert(dots)


    if (n > image.length) { Index = 1; }
    if (n < 1) { Index = image.length; }

    image.forEach(item => {
        $(item).removeClass("head__baner__slider__active");
    });

    // info.forEach(item => {
    //     $(item).removeClass("Slider__Active");
    // });

    dots.forEach(item => {
        $(item).removeClass("active");
    });



    $(image[Index - 1]).addClass("head__baner__slider__active");
    // $(info[Index - 1]).addClass("Slider__Active");
    $(dots[Index - 1]).addClass("active");
}

// Object.keys(a).forEach(function (key) {
//     console.log(a[key]);
// });