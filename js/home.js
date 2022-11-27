$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 1 && scroll_pos < 150) {
            $("#home-bg").css('background-color', '#F4B8A1');
        }
        else if (scroll_pos > 150) {
            $("#home-bg").css('background-color', '#ECA296');
        }
        else {
            $("#home-bg").css('background-color', '#f7c79e');
        }
    });
});

let mtn1 = document.getElementById('mtn1');
let mtn2 = document.getElementById('mtn2');
let mtn3 = document.getElementById('mtn3');
let sand = document.getElementById('sand');
let waves = document.getElementById('waves');
let ocean = document.getElementById('ocean');
let sun = document.getElementById('sun');

window.addEventListener('scroll', function (e) {
    let value = window.scrollY;
    mtn1.style.top = (value * .01 + 17) + "em";
    mtn2.style.top = (value * .02 + 3) + "em";
    mtn3.style.top = (value * .03 + 8) + "em";
    sand.style.top = (value * .03 + 15.1) + "em";
    waves.style.top = (value * .03 + 15.1) + "em";
    ocean.style.top = (value * .03 + 15.1) + "em";
    sun.style.top = (value * .05 + 7.5) + "em";
})