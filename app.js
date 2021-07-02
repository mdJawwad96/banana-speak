var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandling(error) {
    console.log("oops, error occuered", error)
}

btnTranslate.addEventListener("click", function clickEventHandler() {
    //Input
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandling)
})
