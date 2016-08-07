
var divs = [];
var currentLang = "nl";

var imgs = {
    "nl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/2000px-Flag_of_the_Netherlands.svg.png",
    "pt": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png"
}

function main() {
    createDivs();
}

function createDivs() {

    // lang select
    var langSelector = document.createElement("div");
    langSelector.setAttribute("class", "langSelector");
    document.body.appendChild(langSelector);
    for (var lang in text) {
        if (lang == "css") continue;
        var langDiv = document.createElement("div");
        langSelector.appendChild(langDiv);
        langDiv.setAttribute("data-lang", lang);
        langDiv.style.backgroundImage = "url('" + imgs[lang] + "')";
        //langDiv.style.background = "url('" + imgs[lang] + "') no-repeat center ";
        // langDiv.appendChild(document.createTextNode(lang));
        langDiv.addEventListener("click", function(e) {
            currentLang = e.target.getAttribute("data-lang");
        });
    };

    for(var i = 0; i < 3; i++) {
        var div = document.createElement("div");
        divs.push(div)
        // div.appendChild(document.createTextNode(text[lang][i]));
        div.setAttribute("data-color-i", i);
        div.addEventListener('click', clickDiv)

        div.style.backgroundColor = text["css"][i];
        document.body.appendChild(div);
    }
}


function clickDiv(e) {
    var colorIndex = e.target.getAttribute("data-color-i");
    console.log(text[currentLang][colorIndex]);
    chan.push({
        color: text[currentLang][colorIndex],
        css: text["css"][colorIndex]
    });
}



main();

