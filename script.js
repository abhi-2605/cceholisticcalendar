$(document).ready(function() {
    $("button").click(function() {

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