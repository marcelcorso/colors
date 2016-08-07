
var divs = [];
var lang = "nl";

function main() {
    createDivs();
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
    chan.push(color);
}



main();

