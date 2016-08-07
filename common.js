// Initialize Firebase
var config = {
    apiKey: "AIzaSyBcSfN4tQu5VYScDT06_e-meC3paOYESUI",
    authDomain: "colors-6e268.firebaseapp.com",
    databaseURL: "https://colors-6e268.firebaseio.com",
    storageBucket: "",
};
firebase.initializeApp(config);
var chan = firebase.database().ref('chan');

var text = {
    "css": ["blue", "green", "purple"],
    "nl": ["blau", "groen", "paars"],
    "pt": ["azul", "verde", "roxo"]
};


