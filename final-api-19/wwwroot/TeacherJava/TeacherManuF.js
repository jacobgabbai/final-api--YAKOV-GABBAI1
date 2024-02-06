
localStorage.setItem("opent", 1)

const body = document.getElementById("body")
const c = document.getElementById("center")
const hh = body.offsetHeight
let hm = hh - 200
c.style.minHeight = `${hm}px`


function myFunction() {
    const body = document.getElementById("body")
    const c = document.getElementById("center")
    const hh = body.offsetHeight
    let hm = hh - 200
    c.style.minHeight = `${hm}px`
}
window.addEventListener("load", function () { load() })
window.addEventListener("beforeunload", () => { localStorage.removeItem("opent") })
const maindiv = document.getElementById("center")
function load() { 


    for (let i = 0; i < 4; i++) {

        const div = document.createElement("div")

        div.id = `id${i}`
        if (i == 0) {
            const p=document.createElement("p")
            p.textContent = "Search For A Test"
            p.style.marginTop="35px"
            div.appendChild(p)
            div.addEventListener("click", function () {looktest() })
        }
        if (i == 1) {

            const p = document.createElement("p")
            p.textContent = "Add Test"
            p.style.marginTop = "35px"
            div.appendChild(p)
            div.addEventListener("click", function () { AddTest() })


        }

        if (i == 2) {

            const p = document.createElement("p")
            p.textContent = "UpDateTest"
            p.style.marginTop = "35px"
            div.appendChild(p)
            div.addEventListener("click", function () { mmmmm() })

        }

        if (i == 3) {

            const p = document.createElement("p")
            p.textContent = "Watch Statistic"
            p.style.marginTop = "35px"
            div.appendChild(p)
            div.style.marginBottom="10px"
            div.addEventListener("click", function () { Statistic() })

        }

        div.style.backgroundColor = "aquamarine"
        div.style.height = "100px"
        div.style.width="300px"
        div.style.marginTop = "20px"
        div.style.marginLeft = "40%"
        div.style.border = "dotted"
        div.style.fontSize = "25px"
        div.style.fontWeight = "bold"
        div.style.textAlign = "center"
        div.style.cursor = "pointer"
        
        maindiv.appendChild(div)

    }

}




function mmmmm() {



    const open = localStorage.getItem("open")
    if (open == 1) { alert("window is open please close other windows") }
    else {
        window.open("https://top-school.azurewebsites.net/TeacherHtml/updatetest.html")
    }
}
function AddTest() {

    ("https://top-school.azurewebsites.net/TeacherHtml/add-test-3.html")
    const open = localStorage.getItem("open")

    if (open == 1) { alert("window is open please close other windows") }
    else {
        window.open("https://top-school.azurewebsites.net/TeacherHtml/Add-Test.html")
    }

}



function looktest() {
    const open = localStorage.getItem("open")

    if (open == 1) { alert("window is open please close other windows") }
    else {
        window.open("https://top-school.azurewebsites.net/TeacherHtml/Test-Search.html")
    }

}
function Statistic() {

    const open = localStorage.getItem("open")

    if (open == 1) { alert("window is open please close other windows") }
    else {

        window.open("https://top-school.azurewebsites.net/TeacherHtml/TeacherStatistic.html")
    }


}