
var audioContext = new AudioContext();
var audioBuffers = {};

function main() {
    loadAudioBuffers();
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

var firstDropped = false;
chan.limitToLast(1).on('child_added', function(childSnapshot, prevChildKey) {
    if (!firstDropped) {
        firstDropped = true;
        return;
    }
    var obj = childSnapshot.val();
    var source = audioContext.createBufferSource();
    source.buffer = audioBuffers[obj.color];
    source.connect(audioContext.destination);
    source.addEventListener("ended", function() {
        source.disconnect();
    });

    document.querySelector("div").style.backgroundColor = obj.css;

    source.start(0);
});



main();



