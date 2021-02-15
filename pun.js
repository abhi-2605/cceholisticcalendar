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

const button = document.querySelector('.submit-button'),
stateMsg = document.querySelector('.pre-state-msg');

var db = firebase.firestore();

const updateButtonMsg = function() {
    var date = document.getElementById("date").value;
  var title = document.getElementById("event").value;
  var details = document.getElementById("descr").value;
  var da_te =new Date(date);
  // console.log(da_te)

// console.log(typeof da_te);
console.log("guis")
    db.collection("events").doc((date+title+details).split(" ").join("")).set({
        event_date: da_te,
        title: title,
        description: details
    })
    .then(function() {
        console.log("Doc successful");
        // document.getElementById("date").reset()
        // date
        // document.getElementById("event").reset();
        // document.getElementById("descr").reset();
        var da = document.getElementById("date");
        var ti = document.getElementById("event");
        var de = document.getElementById("descr");
        da.value="";
        ti.value="";
        de.value="";
        alert("updated new event")

    })
    .catch(function(error) {
       console.error("Error writing doc", error);
    });


    button.classList.add('state-1', 'animated');

    // setTimeout(finalButtonMsg, 2000);

setTimeout(finalButtonMsg, 2000);
};

const finalButtonMsg = function() {
button.classList.add('state-2');

setTimeout(setInitialButtonState, 2000);
};

const setInitialButtonState = function() {
button.classList.remove('state-1', 'state-2', 'animated');
};

button.addEventListener('click', updateButtonMsg);
// button.addEventListener('click', updateButtonMsg);