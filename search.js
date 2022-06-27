let element = document.getElementById("search").value;
let button = document.getElementById("submit");
console.log('hola');
function searchForward(text){
window.find(text);
}
function searchBackward(text){
    return window.find(text,false,true,true,false);
}
