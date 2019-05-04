function greet(){
    let name = document.querySelector("#name").value;
    let body = document.querySelector("body");
    let toHide = document.querySelector("#toHide");
    toHide.style.visibility = "hidden";
    body.style.backgroundColor = "lightblue";

    let toShowasdf = document.querySelector("#toShow");
    var toShow = document.getElementById("toShow");
    toShow.innerHTML = 'Hello, ' + name;
    toShow.style.visibility = "visible";
}