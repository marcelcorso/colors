
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


chan.on('child_added', function(childSnapshot, prevChildKey) {
    var color = childSnapshot.val();
    var source = audioContext.createBufferSource();
    source.buffer = audioBuffers[color];
    source.connect(audioContext.destination);
    source.addEventListener("ended", function() {
        source.disconnect();
    });

    source.start(0);
});



main();



