
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBcSfN4tQu5VYScDT06_e-meC3paOYESUI",
    authDomain: "colors-6e268.firebaseapp.com",
    databaseURL: "https://colors-6e268.firebaseio.com",
    storageBucket: "",
};
firebase.initializeApp(config);

var divs = []; 

var text = {
    "css": ["blue", "green", "purple"],
    "nl": ["blau", "groen", "paars"],
    "pt": ["azul", "verde", "roxo"]
};

var lang = "nl";

window.audioContext = new AudioContext();
window.audioBuffers = {};

function main() {
    loadAudioBuffers();
    createDivs();
}



function loadAudioBuffers() {

    for (var lang in text) {
        if (lang == "css") continue;
        var colors = text[lang];
        colors.forEach(function(color) {
            loadAudio("/" + color + ".mp3", function(buffer) {
                audioBuffers[color] = buffer;
            });
        });
    };
}


function loadAudio(url, callback) {
    console.log("load " + url);
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function() {
        audioContext.decodeAudioData(request.response, callback, onLoadAudioError);
    }
    request.send();
}

function onLoadAudioError(e) {
    console.error(e);
}

function createDivs() {
    for(var i = 0; i < 3; i++) {
        var div = document.createElement("div");
        divs.push(div)
        // div.appendChild(document.createTextNode(text[lang][i]));
        div.setAttribute("data-color", text[lang][i]);
        div.addEventListener('click', clickDiv)

        div.style.backgroundColor = text["css"][i];
        document.body.appendChild(div);
    }
}

function clickDiv(e) {
    var color = e.target.getAttribute("data-color");
    console.log(color);
    var source = audioContext.createBufferSource();
    source.buffer = audioBuffers[color];
    source.connect(audioContext.destination);
    source.addEventListener("ended", function() {
        source.disconnect();
    });

    source.start(0);     

}



main();



