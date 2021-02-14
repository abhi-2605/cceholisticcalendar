

















var firebaseConfig = {
    apiKey: "AIzaSyDtvOxHa-zm9eq9FkEGsXx_OvqlBSFv-OI",
    authDomain: "ccecalender-5c3fd.firebaseapp.com",
    databaseURL: "https://ccecalender-5c3fd-default-rtdb.firebaseio.com",
    projectId: "ccecalender-5c3fd",
    storageBucket: "ccecalender-5c3fd.appspot.com",
    messagingSenderId: "137096986906",
    appId: "1:137096986906:web:aeb53534b60e36d1dd6ca3",
    measurementId: "G-10MPJ15GBR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// const button = document.querySelector('.submit-button'),
// stateMsg = document.querySelector('.pre-state-msg');

var db = firebase.firestore();





// cce20182020@123
$(document).ready(function() {
    $("#button").click(function() {

        var key = $("#key").val();
        var kk = document.getElementById("key");
        var pass = "cce2018@cce.edu.in";



        // var key = document.getElementById("key").value;
        firebase.auth().signInWithEmailAndPassword(pass, key)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
          window.location.href = "home.html"
          return false;
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });

        




        // if (key == pass) {
        //     window.location.href = "home.html"
        //     return false;
        // } else {
        //     document.getElementById('key').value = ''
        //     alert("key incorrect");

        // }
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




















const updateButtonMsg = function() {
   

}

