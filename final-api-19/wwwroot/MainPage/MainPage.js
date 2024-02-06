const body = document.getElementById("body")
const divm = document.getElementById("divm")
const h = body.offsetHeight
let hm = h - 200
divm.style.minHeight = `${hm}px`


function myFunction() {
    const body = document.getElementById("body")
    const divm = document.getElementById("divm")
    const h = body.offsetHeight
    let hm = h - 200
    divm.style.minHeight = `${hm}px`
}



function move() {
    window.open("https://top-school.azurewebsites.net/website1/website.html")
    /*window.open("https://localhost:7101/website1/website.html")*/
}