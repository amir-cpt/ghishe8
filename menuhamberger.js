$(document).ready(function () {

    $(".head__right__RS > div a").click(function (e) {

        var viwe = $(".head__right__RS > div > ul").css("display");

        if (viwe == "none") {

            $(".head__right__RS > div > ul").css("display", "block");

        }
        else {
            $(".head__right__RS > div > ul").css("display", "none");

        }

    });





});