var SpeechRecognititon = window.webkitSpeechRecognition;

var recognititon = new SpeechRecognititon();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognititon.start()
}

recognititon.onresult = function run(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content)

    document.getElementById("textbox").innerHTML = Content;
}