$(document).ready(function() {
    $("#button").click(function() {

        var key = $("#key").val();
        var kk = document.getElementById("key");
        var pass = "cce2018";

        if (key == pass) {
            window.location.href = "home.html"
            return false;
        } else {
            document.getElementById('key').value = ''
            alert("key incorrect");

        }
    });
});

function preventBack() {
    window.history.forward();

}
setTimeout("preventBack()", 0);
window.onunload = function() {
        null;
    }
    // Wrap every letter in a span


var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml7 .letter',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 6600,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i
    }).add({
        targets: '.ml7',
        opacity: 1,
        duration: 20000,
        easing: "easeOutExpo",
        delay: 100000
    });