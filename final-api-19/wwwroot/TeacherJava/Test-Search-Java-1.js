const rr = ""
localStorage.setItem("open", 1)
window.addEventListener("beforeunload", function () { unload() })
const change = document.getElementById("cars")
const ifEmpty = 0
const body = document.getElementById("body")
const c = document.getElementById("center")
const h = body.offsetHeight
let hm = h - 200
c.style.minHeight = `${hm}px`


function myFunction() {
    const body = document.getElementById("body")
    const c = document.getElementById("center")
    const h = body.offsetHeight
    let hm = h - 200
    c.style.minHeight = `${hm}px`
}
// this func change the input types 
function readvalue(a) {
    const in12 = document.getElementById("idt")
    if (a == "name") {
        in12.type = "text"
    }
    if (a == "date") {
        in12.type = "date"
    }
}
function unload() {
    const tn = localStorage.getItem("TeacherName")
    const ti = localStorage.getItem("TeacherIdRef")

    localStorage.clear()


    localStorage.setItem("TeacherName", tn)
    localStorage.setItem("TeacherIdRef", ti)

}
let qj = []
let aj = []
let count = 0
const div1 = document.getElementById("div1")
const div11 = document.getElementById("div2")
const div111 = document.getElementById("div3")
let ygyg = 0




//this func gets the input and sand it to the surver
async function findtest() {

    qj = []
    aj = []
    const ajson = []
    const teacher = localStorage.getItem("TeacherIdRef")
    const testname = document.getElementById("idt").value
    const type = document.getElementById("cars").value
    const y1 = `../api/Test/${testname},${teacher},${type}`
    const y2 = ` https://localhost:7056/${y1}`
    if (testname != "") {
        lab = document.getElementById("lab")
        lab.innerHTML = ""
        const res = await fetch(y1)

        if (res.status == 204) {
            div1.replaceChildren()
            div11.replaceChildren()
            div111.replaceChildren()
            hEmpty = document.createElement("h1")
            hEmpty.textContent = "No Test Have Been Found"
            hEmpty.style.fontSize="50px"
            hEmpty.style.marginLeft = "-20%"
            div1.style.width="130%"
            div1.appendChild(hEmpty)
            return
        }
        if (res.status != 200) {
            div1.replaceChildren()
            div11.replaceChildren()
            div111.replaceChildren()
            hEmpty = document.createElement("h1")
            hEmpty.textContent = `Error ${res.status}`
            div1.appendChild(hEmpty)
            return


        }

        const rr = await res.json()
        const r1 = rr.id
        if (res.status == 200 && r1.testName == "empty") {
            alert("no test has been founde")
            return
        }

        if (res.status == 200) {
            const resq = await fetch(`../api/Question/${r1}`)
            if (resq.status != 200) {
                div1.replaceChildren()
                hEmpty = document.createElement("h1")
                hEmpty.textContent = `Error ${resq.status}`
                div1.appendChild(hEmpty)
                return




            }
            if (resq.status == 200) {
                const qid = []
                const qjson = await resq.json()

                for (let i = 0; i < qjson.length; i++) {
                    qid.push(qjson[i].id)
                    qj.push(qjson[i])


                }

                for (let ii = 0; ii < qid.length; ii++) {

                    const resa = await fetch(`../api/Answer/${qid[ii]}`)
                    if (resa.status != 200) {
                        div1.replaceChildren()
                        hEmpty = document.createElement("h1")
                        hEmpty.textContent = `Error ${resa.status}`
                        div1.appendChild(hEmpty)
                        return

                    }
                    const yy = await resa.json()
                    const aj1 = []
                    for (let z = 0; z < yy.length; z++) {
                        ajson.push(yy[z])
                        aj1.push(yy[z])
                    }
                    aj.push(aj1)
                }
            }


            showdata(rr, qj, aj)
        }

    }




    else {

        lab = document.getElementById("lab")
        lab.innerHTML = "* Must Fild"

    }









}

//this func uploads the data from the surver to the screen 

function showdata(m, qjson, aj) {

    div1.replaceChildren()
    div11.replaceChildren()
    div111.replaceChildren()
  div111.style.marginBottom="10px"
    const u = document.createElement("ul")
    const h1 = document.createElement("h1")
    const br = document.createElement("br")
    h1.innerHTML = "Test Information"
    const h2 = document.createElement("li")
    h2.textContent = `Test Name: ${m.testName}`
    const h3 = document.createElement("li")
    h3.textContent = `Test Date: ${m.testDate}`
    const h4 = document.createElement("li")
    h4.textContent = `Test Start Time: ${m.startTime}`
    const h5 = document.createElement("li")
    let mm =[]
     mm=  m.totalTime.split(":")
    let yname = ""
    let hours=""
    if (mm[0] != "0" && mm[1] != "0") {
        if (mm[0] != " 1") {
            yname = `${mm[0]} hours and ${mm[1]} minutes`
        }
        else {
            yname = `${mm[0]} hour and ${mm[1]} minutes`
        }
    }
    else if (mm[0] != "0" && mm[1] == "0")
    {
        if (mm[0] != "1") {
            yname = `${mm[0]} hours `
        }
        else {
            yname = `${mm[0]} hour `
}
    }
    else if (mm[0]  = "0" && mm[1] != "0")
    {
        yname = ` ${mm[1]} minutes`
    }
    if (mm[1] != "0") {
        hours=`and ${mm[1]} minutes `
    }
    h5.textContent = `Test Total Time: ${yname}  `
    const h6 = document.createElement("li")
    if (m.random == 1) {
        h6.textContent = `Test Questions Are Random`
    }
    else (h6.textContent = "Test Questions Are not random")
    u.appendChild(h1)
    u.appendChild(h2)
    u.appendChild(h3)
    u.appendChild(h4)
    u.appendChild(h5)
    u.appendChild(h6)
    div1.appendChild(h1)
    div1.appendChild(u)
    let y = 0
    const u1 = document.createElement("ul")
    const localdiv = document.createElement("div")
    localdiv.id = `id${y}`
    let l = 0
    const h11 = document.createElement("p")
    const h12 = document.createElement("p")
    let n = y + 1
    h11.textContent = ` Question-${n}: `
    u1.appendChild(h11)
    const h13 = document.createElement("p")
    h13.textContent = `${qjson[y].questions}`
    if (qjson[y].picture != "") {
        const divpic = document.createElement("div")
        divpic.style.display = "flex"
        divpic.style.height = "100px"
        divpic.id = `pic${y}`
        let gg = qjson[y].picture
        divpic.innerHTML = `<img src="${gg}"/>`
        const out = document.createElement("output")
        out.appendChild(divpic)
        u1.appendChild(out)
    }

    u1.appendChild(h13)
    for (let r = 0; r < aj[y].length; r++) {
        const li1 = document.createElement("li")
        let r1 = r + 1
        li1.textContent = `${r1}) ${aj[y][r].answer1}`
        if (aj[y][r].rightWorng == 1) { l = r1 }
        u1.appendChild(li1)
    }
    h12.textContent = `the right answer is ${l}`
    u1.appendChild(h12)
    div11.appendChild(u1)
    const btnn = document.createElement("button")
    btnn.id = "btnn"
    btnn.style.borderRadius = "10px"
    btnn.style.backgroundColor = "green"
    btnn.style.color = "white"
    btnn.innerHTML = "previos quetion"
    btnn.style.marginLeft = "0px"
    btnn.style.cursor="pointer"
    btnn.addEventListener("click", function () { back(count, aj, qjson) })
    const btnb = document.createElement("button")
    btnb.id = "btnb"
    btnb.style.borderRadius="10px"
    btnb.style.backgroundColor = "green"
    btnb.style.color = "white"
    btnb.style.cursor = "pointer"
    btnb.innerHTML = "next quetion"
    btnb.style.marginLeft = "100px"
    btnb.addEventListener("click", function () { next(count, aj, qjson) })
    div111.appendChild(btnn)
    div111.appendChild(btnb)
}

//this func is moving to the next question
function next(y, aj, qjson) {
    y = y + 1
    if (qjson.length > y) {
        div11.replaceChildren()
        const u1 = document.createElement("ul")
        const localdiv = document.createElement("div")
        localdiv.id = `id${y}`
        let l = 0
        const h11 = document.createElement("p")
        const h12 = document.createElement("p")
        let n = y + 1
        h11.textContent = ` Question-${n}: `
        u1.appendChild(h11)
        const h13 = document.createElement("p")
        h13.textContent = `${qjson[y].questions}`
        u1.appendChild(h13)
        if (qjson[y].picture != "") {
            const divpic = document.createElement("div")
            divpic.style.display = "flex"
            divpic.style.height = "100px"
            divpic.id = `pic${y}`
            let gg = qjson[y].picture
            divpic.innerHTML = `<img src="${gg}"/>`
            const out = document.createElement("output")
            out.appendChild(divpic)
            u1.appendChild(out)
        }
        for (let r = 0; r < aj[y].length; r++) {
            const li1 = document.createElement("li")
            let r1 = r + 1
            li1.textContent = `${r1}) ${aj[y][r].answer1}`

            if (aj[y][r].rightWorng == 1) { l = r1 }
            u1.appendChild(li1)
        }
        h12.textContent = `the right answer is ${l}`
        u1.appendChild(h12)
        div11.appendChild(u1)
        count = count + 1
    }
}


//the func is calling for the previos question
function back(y, aj, qjson) {


    if (0 < y) {
        div11.replaceChildren()
        y = y - 1
        const u1 = document.createElement("ul")
        const localdiv = document.createElement("div")
        localdiv.id = `id${y}`
        let l = 0
        const h11 = document.createElement("p")
        const h12 = document.createElement("p")
        let n = y + 1
        h11.textContent = ` Question-${n}: `
        u1.appendChild(h11)
        const h13 = document.createElement("p")
        h13.textContent = `${qjson[y].questions}`
        if (qjson[y].picture != "") {
            const divpic = document.createElement("div")
            divpic.style.display = "flex"
            divpic.style.height = "100px"
            divpic.id = `pic${y}`
            let gg = qjson[y].picture
            divpic.innerHTML = `<img src="${gg}"/>`
            const out = document.createElement("output")
            out.appendChild(divpic)
            u1.appendChild(out)
        }
        u1.appendChild(h13)
        for (let r = 0; r < aj[y].length; r++) {
            const li1 = document.createElement("li")
            let r1 = r + 1
            li1.textContent = `${r1}) ${aj[y][r].answer1}`
            if (aj[y][r].rightWorng == 1) { l = r1 }
            u1.appendChild(li1)
        }
        h12.textContent = `the right answer is ${l}`
        u1.appendChild(h12)
        div11.appendChild(u1)
        count = count - 1
    }
}



