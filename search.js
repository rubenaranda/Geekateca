let element = document.getElementById("search").value;
let nextButton = document.getElementById("next");
let backButton = document.getElementById("back");
console.log('hola');
function searchForward(text){
window.find(text);
}
function searchBackward(text){
    return window.find(text,false,true,true,false);
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }
