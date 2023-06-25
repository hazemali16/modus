let body = document.querySelector("body")
let span = document.createElement("span")
let spantext = document.createElement("i")
spantext.className = "fas fa-chevron-up"
span.appendChild(spantext)
span.style.cssText = "background-color: rgb(9 193 239); color: white; border: none; padding: 10px; position: fixed; bottom: 20px; right: 20px; border-radius: 4px; cursor: pointer; opacity: 0; font-weight: bold; font-family: arial; transition-duration: 0.3s;"
document.body.appendChild(span)


window.onscroll = function () {
    if (window.scrollY >= 1000) {
        span.style.opacity = "1"
    }else {
        span.style.opacity = "0" 
    }
}

span.onclick = function () {
    window.scrollTo ({
        top: 0,
        behavior:"smooth",
    })
}