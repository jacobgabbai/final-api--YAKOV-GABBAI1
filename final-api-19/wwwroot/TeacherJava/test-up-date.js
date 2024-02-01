

/// this func is is storing data after test data change and reload the page with the new data
window.addEventListener("load", function () {

    const aa = localStorage.getItem("jjj")
    localStorage.removeItem("jjj")
    if (aa != null) {
        findtest2(aa)

    }

})


localStorage.setItem("open", 1)
let ee = 0
window.addEventListener("beforeunload", function () { unload(ee) })
function unload() {
    const tn = localStorage.getItem("TeacherName")
    const ti = localStorage.getItem("TeacherIdRef")
    const aa = localStorage.getItem("jjj")
    localStorage.clear()
    if (ee == 1) {

        localStorage.setItem("jjj", aa)
        ee = 0

    }
    localStorage.setItem("TeacherName", tn)
    localStorage.setItem("TeacherIdRef", ti)

}
let qj = []
let rr = ""
let aj = []
let count = 0
const div1 = document.getElementById("div1")
const div11 = document.getElementById("div2")
const div12 = document.getElementById("div21")
const div13 = document.getElementById("div22")
const div111 = document.getElementById("div4")
const pdiv = document.getElementById("div5")


// this func change the search type by date or by name
function readvalue(a) {
    const in12 = document.getElementById("idt")
    if (a == "name") {
        in12.type = "text"
    }
    if (a == "date") {
        in12.type = "date"
    }
}
const div6 = document.createElement("div")
const div61=document.createElement("div")
const h9 = document.createElement("h1")
const div7 = document.createElement("div")
const div8 = document.createElement("div")
const div9 = document.createElement("div")
const div10 = document.createElement("div")
const div1T = document.createElement("div")
const divS = document.getElementById("div1")
const btnq = document.createElement("button")
btnq.style.backgroundColor = "green"
btnq.innerHTML = "update question"
let g = 0
btnq.style.cursor = "pointer"
btnq.style.height = "40px"
btnq.style.color = "white"
btnq.style.margin = "2px"
btnq.id="btnq"



function divBuilder() {

    divS.style.marginBottom = "0px"
    divS.style.marginLeft = "2%"
    divS.style.width = "30%"
    divS.style.minHeight = "250px"
    divS.style.float = "left"
    divS.style.backgroundColor = "azure"

   
    div6.style.marginLeft = "0%"
    div6.style.marginTop = "20px"
    div6.style.height = "250px"
    div6.style.width = "100%"
    div6.style.backgroundColor = "azure"

    div1T.style.marginLeft = "0%"
    div1T.style.marginTop = ""
    div1T.style.height = "250px"
    div1T.style.width = "90%"
    div1T.style.backgroundColor = "azure"
   
    div7.style.marginTop = "20px"
    div7.style.backgroundColor = "azure"
    div7.style.float = "left"
    div7.style.height = "220px"
    div7.style.width = "60%"
   
    div8.style.marginTop = "20px"
    div8.style.backgroundColor = "azure"
    div8.style.float = "left"
    div8.style.height = "220px"
    div8.style.width = "40%"
    
    div9.style.float = "left"
    div9.style.marginLeft = "130%"
    div9.style.width = "60%"
    div9.style.height = "500px"
    div9.style.marginTop = "-610px"
    div9.style.backgroundColor = "azure"
    div9.style.border=""
   
    div10.style.marginLeft = "-25%"
    div10.style.width = "150%"
    div10.style.height = "70px"
    div10.style.marginTop = "35px"
    div10.style.backgroundColor = "azure"
    div10.style.marginBottom = "30px"
    

    divS.appendChild(div1T)
    divS.appendChild(div6)
    div6.appendChild(h9)
    div6.appendChild(div7)
    div6.appendChild(div8)
    divS.appendChild(div10)
   
    divS.appendChild(div9)
  
  


}
function divBuilder2() {
    divS.replaceChildren()
    divS.style.marginBottom = "0px"
    divS.style.marginLeft = "2%"
    divS.style.width = "40%"
    divS.style.minHeight = "250px"
    divS.style.float = "left"
    divS.style.backgroundColor = "azure"
    div61.replaceChildren()

    div61.style.marginLeft = "30%"
    div61.style.marginTop = "20px"
    div61.style.height = "250px"
    div61.style.width = "100%"
    div61.style.backgroundColor = "azure"
    divS.appendChild(div61)

}
function divEmpty() {
    divS.replaceChildren()
    div6.replaceChildren()
    div61.replaceChildren()
     h9.replaceChildren()
     div7.replaceChildren()
     div8.replaceChildren()
     div9.replaceChildren()
     div10.replaceChildren()
     div1T.replaceChildren()
     
}

//this func search for the test and question and answers

async function findtest() {
    const inputM = document.getElementById("inputM")
    inputM.style.color = "red"
    inputM.innerHTML = ""
    qj = []
    aj = []
    const ajson = []
    const teacher = localStorage.getItem("TeacherIdRef")
    const testname = document.getElementById("idt").value
    const type = document.getElementById("cars").value
    const y1 = `../api/Test/${testname},${teacher},${type}`
    if (testname != "") {
        const res = await fetch(y1)
        if (res.status != 200 && res.status != 204) {

            divBuilder2()
            const hError = document.createElement("h1")
            hError.innerHTML = `Error ${res.status} `
            hError.style.marginTop = "0%"
            hError.style.fontSize = "50px"
            div61.style.textAlign="center"
            div61.appendChild(hError)
            return
           

        }

        if (res.status == 204) {
 
            divBuilder2()
            const hError = document.createElement("h1")
            hError.innerHTML = `No Test Has Been Found`
            hError.style.marginTop = "0%"
            hError.style.fontSize = "50px"
          
            div61.appendChild(hError)
            return
        }
        rr = await res.json()
        const r1 = rr.id
        if (res.status == 200) {
            const resq = await fetch(`../api/Question/${r1}`)
            if (resq.status != 200) {
                divBuilder2()
                const hError = document.createElement("h1")
                hError.innerHTML = `Error ${resq.status}`
                hError.style.marginTop = "0%"
                hError.style.fontSize = "50px"
                div61.style.textAlign = "center"
                div61.appendChild(hError)
                return
            }
            if (resq.status == 200) {
                const qid = []
                let qjson = null
                qjson = await resq.json()
                for (let i = 0; i < qjson.length; i++) {
                    qid.push(qjson[i].id)
                    qj.push(qjson[i])
                }

                for (let ii = 0; ii < qid.length; ii++) {
                    const resa = await fetch(`../api/Answer/${qid[ii]}`)
                    if (resa.status != 200) {
                        divBuilder2()
                        const hError = document.createElement("h1")
                        hError.innerHTML = `Error ${resa.status}`
                        hError.style.marginTop = "0%"
                        hError.style.fontSize = "50px"
                        div61.style.textAlign = "center"
                        div61.appendChild(hError)
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
        const inputM = document.getElementById("inputM")
        inputM.style.color = "red"
        inputM.innerHTML = "* Must Fild"
        return
    }
}

// this func is calling for the test we just updated with new data
async function findtest2(xx) {
    aj = []
    const ajson = []
    const teacher = localStorage.getItem("TeacherIdRef")
    const testname = xx
    const type = document.getElementById("cars").value
    const y1 = `../api/Test/${testname},${teacher},${type}`
    if (testname != "") {
        const res = await fetch(y1)
        if (res.status != 200 && res.status != 204) {
            divBuilder2()
            const hError = document.createElement("h1")
            hError.innerHTML = `Error ${res.status}`
            hError.style.marginTop = "0%"
            hError.style.fontSize = "50px"
            div61.style.textAlign = "center"
            div61.appendChild(hError)
            return
        }
        const rr = await res.json()
        const r1 = rr.id
        if (res.status == 200 && rr.testName == "empty") {
            if (res.status == 204) {
                divBuilder2()
                const hError = document.createElement("h1")
                hError.innerHTML = `No Test Has Been Found`
                hError.style.marginTop = "0%"
                hError.style.fontSize = "50px"
                div61.style.textAlign = "center"
                div61.appendChild(hError)
                return
            }
        }
        if (res.status == 200) {
            const resq = await fetch(`../api/Question/${r1}`)
            if (resq.status != 200) {
                divBuilder2()
                const hError = document.createElement("h1")
                hError.innerHTML = `Error ${resq.status}`
                hError.style.marginTop = "0%"
                hError.style.fontSize = "50px"
                div61.style.textAlign = "center"
                div61.appendChild(hError)
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
                        divBuilder2()
                        const hError = document.createElement("h1")
                        hError.innerHTML = `Error ${resa.status}`
                        hError.style.marginTop = "0%"
                        div61.style.textAlign = "center"
                        hError.style.fontSize = "50px"
                        div61.appendChild(hError)
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

}


function showdata(m, qjson, aj) {
    divEmpty()
    divBuilder()
    const u = document.createElement("ul")
    const h1 = document.createElement("h1")
    const br = document.createElement("br")
    h1.innerHTML = "Test Informetion"
    const h2 = document.createElement("li")
    h2.textContent = `Test Name: ${m.testName}`
    const h3 = document.createElement("li")
    h3.textContent = `Test Date: ${m.testDate}`
    const h4 = document.createElement("li")
    h4.textContent = `Test Start Time: ${m.startTime}`
    const h5 = document.createElement("li")
    let mm = []
    mm = m.totalTime.split(":")
    let yname = ""
    let hours = ""
    if (mm[0] != "0" && mm[1] != "0") {
        if (mm[0] != " 1") {
            yname = `${mm[0]} hours and ${mm[1]} minutes`
        }
        else {
            yname = `${mm[0]} hour and ${mm[1]} minutes`
        }
    }
    else if (mm[0] != "0" && mm[1] == "0") {
        if (mm[0] != "1") {
            yname = `${mm[0]} hours `
        }
        else {
            yname = `${mm[0]} hour `
        }
    }
    else if (mm[0] = "0" && mm[1] != "0") {
        yname = ` ${mm[1]} minutes`
    }
    if (mm[1] != "0") {
        hours = `and ${mm[1]} minutes `
    }
    h5.textContent = `Test Total Time: ${yname}  `
    const h6 = document.createElement("li")
    if (m.random == 1) {
        h6.textContent = `Test Question is Random`
    }
    else (h6.textContent = "Test Question is not random")
    const btntest = document.createElement("button")
    btntest.id = "btntest"
    btntest.innerHTML = "test update"
    btntest.style.marginLeft = "20%"
    btntest.style.marginTop = "-100px"
    btntest.style.backgroundColor = "green"
    btntest.style.color="white"
    btntest.addEventListener("click", function () { place(m) })
    const btntestd = document.createElement("button")
    btntestd.id = "btntestd"
    btntestd.innerHTML = "delete test"
    btntestd.style.marginLeft = "5%"
    btntestd.style.marginTop = "-100px"
    btntestd.style.backgroundColor = "green"
    btntestd.style.color = "white"
    btntestd.addEventListener("click", function () { delete1(m) })
    const br11 = document.createElement("p")
    u.appendChild(h1)
    u.appendChild(h2)
    u.appendChild(h3)
    u.appendChild(h4)
    u.appendChild(h5)
    u.appendChild(h6)
    div1T.appendChild(h1)
    div1T.appendChild(u)
    div1T.appendChild(btntest)
    div1T.appendChild(btntestd)
    div1T.appendChild(br11)
    let y = 0
    const u1 = document.createElement("ul")
    const u2 = document.createElement("ul")
    const localdiv = document.createElement("div")
    localdiv.id = `id${y}`
    let l = 0
    const h11 = document.createElement("p")
    const h12 = document.createElement("p")
    let n = y + 1
    const btnd = document.createElement("button")
    btnd.style.backgroundColor = "green"
    btnd.innerHTML = "delete question"
    btnd.style.cursor = "pointer"
    btnd.style.height = "40px"
    btnd.style.color = "white"
    btnd.style.margin = "2px"
    btnd.addEventListener("click", function () { deletequestion(count, qjson, aj, m) })
    const btnaa = document.createElement("button")
    btnaa.style.backgroundColor = "green"
    btnaa.innerHTML = "add text question"
    btnaa.style.cursor = "pointer"
    btnaa.style.height = "40px"
    btnaa.style.color = "white"
    btnaa.style.margin = "2px"
    btnaa.addEventListener("click", function () { addtext(g, qjson, aj, m) })
    const btnaq = document.createElement("button")
    btnaq.style.backgroundColor = "green"
    btnaq.innerHTML = "add pic question"
    btnaq.style.cursor = "pointer"
    btnaq.style.height = "40px"
    btnaq.style.color = "white"
    btnaq.style.margin = "2px"
    btnaq.addEventListener("click", function () { addpic(g, qjson, aj, m) })
    btnq.addEventListener("click", function () { question(g, qjson, aj, m) })
    const btnn = document.createElement("button")
    btnn.id = "btnn"
    btnn.innerHTML = "previes question"
    btnn.style.marginLeft = "-100px"
    btnn.style.backgroundColor = "green"
    btnn.style.color = "white"
    btnn.style.cursor = "pointer"
    btnn.style.height = "40px"
    btnn.style.color = "white"
    btnn.style.margin = "2px"
    btnn.addEventListener("click", function () { back(count, aj, qjson, m) })
    const btnb = document.createElement("button")
    btnb.id = "btnb"
    btnb.innerHTML = "next question"
    btnb.style.marginLeft = "0px"
    btnb.style.color = "white"
    btnb.style.margin = "2px"
    btnb.style.backgroundColor = "green"
    
    btnb.style.cursor = "pointer"
    btnb.style.height = "40px"
    btnb.addEventListener("click", function () { next(count, aj, qjson, m) })
    let ty = 0
    if (qjson.length > 0) {
        const h13 = document.createElement("p")
        h13.textContent = `${qjson[y].questions}`

        if (qjson[y].picture != "") {
            ty = 1
            const divpic = document.createElement("div")
            divpic.style.display = "flex"
            divpic.style.height = "200px"
            divpic.id = `pic${y}`
            let gg = qjson[y].picture
            divpic.innerHTML = `<img src="${gg}"/>`
            const out = document.createElement("output")
            out.appendChild(divpic)
            u1.appendChild(out)
            u1.style.marginLeft ="-40px"
        }
        h9.textContent = ` Question-${n}: `
        h9.style.fontSize="20px"
        u2.appendChild(h11)
        u1.appendChild(h13)
        for (let r = 0; r < aj[y].length; r++) {
            const li1 = document.createElement("li")
            let r1 = r + 1
            li1.textContent = `${r1}) ${aj[y][r].answer1}`
            if (aj[y][r].rightWorng == 1) { l = r1 }
            u2.appendChild(li1)
        }
        h12.textContent = `the right answer is ${l}`
        u2.appendChild(h12)
    }

    else {
        h11.textContent = `No Questions In The Test `
        h11.style.fontSize = "25px"
        h11.style.fontWeight = "bold"
        u2.appendChild(h11)
    }
    if (ty == 1) {

    }
    else { }

    div7.appendChild(u1)
    div8.appendChild(u2)

    const br1 = document.createElement("p")
    div10.appendChild(br1)
    div10.appendChild(btnn)
    div10.appendChild(btnb)
    div10.appendChild(btnq)
    div10.appendChild(btnd)
    div10.appendChild(btnaa)
    div10.appendChild(btnaq)
}

//this fun is calling for the next question
function next(y, aj, qjson, m) {

    y = y + 1

    if (qjson.length > y) {

        div7.replaceChildren()
        div8.replaceChildren()
        const u1 = document.createElement("ul")
        const localdiv = document.createElement("div")
        localdiv.id = `id${y}`
        let l = 0
        const h11 = document.createElement("p")
        const h12 = document.createElement("p")
        let n = y + 1
        h9.textContent = ` Question-${n}: `

        const btnq = document.getElementById("btnq")
        btnq.replaceChildren()
        btnq.style.backgroundColor = "green"
        btnq.innerHTML = "update question"
        let g = 0
        btnq.style.cursor = "pointer"
        btnq.style.height = "40px"
        btnq.style.color = "white"
        btnq.style.margin = "2px"
        btnq.id = "btnq"
        count = count + 1
        btnq.addEventListener("click", function () { question(y, qjson, aj, m) })
        const btnd = document.createElement("button")
        btnd.style.backgroundColor = "azure"
        btnd.innerHTML = "delete question"
        btnd.style.cursor = "pointer"
        btnd.style.height = "40px"
        btnd.addEventListener("click", function () { deletequestion(count, qjson, aj, m) })
        const btnaa = document.createElement("button")
        btnaa.style.backgroundColor = "azure"
        btnaa.innerHTML = "add text question"
        btnaa.style.cursor = "pointer"
        btnaa.style.height = "40px"
        btnaa.addEventListener("click", function () { addtext(y, qjson, aj, m) })
        const btnaq = document.createElement("button")
        btnaq.style.backgroundColor = "azure"
        btnaq.innerHTML = "add pic question"
        btnaq.style.cursor = "pointer"
        btnaq.style.height = "40px"
        btnaq.addEventListener("click", function () { addpic(y, qjson, aj, m) })
        u1.appendChild(h11)
        const btnn = document.createElement("button")
        btnn.id = "btnn"
        btnn.innerHTML = "previes question"
        btnn.style.marginLeft = "-100px"
        btnn.style.backgroundColor = "azure"
        btnn.style.cursor = "pointer"
        btnn.style.height = "40px"
       
        btnn.addEventListener("click", function () { back(count, aj, qjson, m) })
        const btnb = document.createElement("button")
        btnb.id = "btnb"
        btnb.innerHTML = "next question"
        btnb.style.marginLeft = "0px"
        btnb.style.backgroundColor = "azure"
        btnb.style.cursor = "pointer"
        btnb.style.height = "40px"
        btnb.addEventListener("click", function () { next(count, aj, qjson, m) })
        const h13 = document.createElement("p")
        h13.textContent = `${qjson[y].questions}`
        let ty = 0
        const u2=document.createElement("ul")
        if (qjson[y].picture != "") {
            ty = 1
            const divpic = document.createElement("div")
            divpic.style.display = "flex"
            divpic.style.height = "200px"
            divpic.id = `pic${y}`
            let gg = qjson[y].picture
            divpic.innerHTML = `<img src="${gg}"/>`
            const out = document.createElement("output")
            u1.style.marginLeft="-40px"
            out.appendChild(divpic)
            u1.appendChild(out)
        }
        u1.appendChild(h13)
        for (let r = 0; r < aj[y].length; r++) {
            const li1 = document.createElement("li")
            let r1 = r + 1
            li1.textContent = `${r1}) ${aj[y][r].answer1}`
            if (aj[y][r].rightWorng == 1) { l = r1 }
            u2.appendChild(li1)
        }
        h12.textContent = `the right answer is ${l}`
        u2.appendChild(h12)
        if (ty == 1) {
        }
        else {  }
        div7.appendChild(u1)
        div8.appendChild(u2)
       
    }
}

//this func is calling for the previos question in the test and upload it 

function back(y, aj, qjson, m) {


    if (0 < y) {
        count = count - 1
        div7.replaceChildren()
        div8.replaceChildren()
        const u1 = document.createElement("ul")
        const u2 = document.createElement("ul")
        const localdiv = document.createElement("div")
        localdiv.id = `id${y}`
        let l = 0
        const h11 = document.createElement("p")
        const h12 = document.createElement("p")
        let n = y
        h9.textContent = ` Question-${n}: `
        let yy = y - 1
        const btnq = document.getElementById("btnq")
        btnq.replaceChildren()
        btnq.style.backgroundColor = "green"
        btnq.innerHTML = "update question"
        let g = 0
        btnq.style.cursor = "pointer"
        btnq.style.height = "40px"
        btnq.style.color = "white"
        btnq.style.margin = "2px"
        btnq.id = "btnq"
        btnq.addEventListener("click", function () { question(yy, qjson, aj, m) })
        const btnd = document.createElement("button")
        btnd.style.backgroundColor = "azure"
        btnd.innerHTML = "delete question"
        btnd.style.cursor = "pointer"
        btnd.style.height = "40px"
        btnd.addEventListener("click", function () { deletequestion(yy, qjson, aj, m) })
        const btnaa = document.createElement("button")
        btnaa.style.backgroundColor = "azure"
        btnaa.innerHTML = "add text question"
        btnaa.style.cursor = "pointer"
        btnaa.style.height = "40px"
        btnaa.addEventListener("click", function () { addtext(yy, qjson, aj, m) })
        const btnaq = document.createElement("button")
        btnaq.style.backgroundColor = "azure"
        btnaq.innerHTML = "add pic question"
        btnaq.style.cursor = "pointer"
        btnaq.style.height = "40px"
        btnaq.addEventListener("click", function () { addpic(yy, qjson, aj, m) })
        u1.appendChild(h11)
        const btnn = document.createElement("button")
        btnn.id = "btnn"
        btnn.innerHTML = "previes question"
        btnn.style.marginLeft = "-100px"
        btnn.style.cursor = "pointer"
        btnn.style.height = "40px"
        btnn.style.backgroundColor = "azure"
        btnn.addEventListener("click", function () { back(count, aj, qjson, m) })
        const btnb = document.createElement("button")
        btnb.id = "btnb"
        btnb.innerHTML = "next question"
        btnb.style.marginLeft = "0px"
        btnb.style.cursor = "pointer"
        btnb.style.height = "40px"
        btnb.style.backgroundColor = "azure"
        btnb.addEventListener("click", function () { next(count, aj, qjson, m) })
        const h13 = document.createElement("p")
        h13.textContent = `${qjson[y - 1].questions}`
        let ty = 0
        if (qjson[y - 1].picture != "") {
            ty = 1
            const divpic = document.createElement("div")
            divpic.style.display = "flex"
            divpic.style.height = "200px"
            divpic.id = `pic${y}`
            let gg = qjson[y - 1].picture
            divpic.innerHTML = `<img src="${gg}"/>`
            const out = document.createElement("output")
            out.appendChild(divpic)
            u1.style.marginLeft="-40px"
            u1.appendChild(out)
        }

        u1.appendChild(h13)


        for (let r = 0; r < aj[y - 1].length; r++) {
            const li1 = document.createElement("li")
            let r1 = r + 1
            li1.textContent = `${r1}) ${aj[y - 1][r].answer1}`

            if (aj[y - 1][r].rightWorng == 1) { l = r1 }
            u2.appendChild(li1)
        }
        h12.textContent = `the right answer is ${l}`
        u2.appendChild(h12)

        if (ty == 1) {

        }
        else { }
  
        div7.appendChild(u1)
        div8.appendChild(u2)

       
    }
}


//this func creat the platform for the the update test div
function place(rr) {
    let i = 1

    div9.replaceChildren()
    div9.style.float = "left"
    div9.style.marginLeft = "130%"
    div9.style.width = "60%"
    div9.style.height = "500px"
    div9.style.marginTop = "-650px"
    div9.style.backgroundColor = "aquamarine"
    div9.style.border = "dotted"
    const l = document.createElement("h1")
    l.innerHTML = `test`
    const m = document.createElement("ul")
    m.id = `m0${i}`
    const m1 = document.createElement("ul")
    m1.id = `m1${i}`
    const m2 = document.createElement("ul")
    m2.id = `m2${i}`
    const m3 = document.createElement("ul")
    m3.id = `m3${i}`
    const m4 = document.createElement("ul")
    m4.id = `m4${i}`
    const m5 = document.createElement("ul")
    m5.id = `m5${i}`
    const m6 = document.createElement("ul")
    m6.id = `m6${i}`
    updatetest(rr)
}

//this func is uploading the the data for update test div
function updatetest(rr) {
    let a = 1
    const n1 = document.createElement("label")
    n1.id = "n1"
    n1.style.marginLeft = "30px"
    const n2 = document.createElement("label")
    n2.id = "n2"
    n2.style.marginLeft = "30px"
    const n3 = document.createElement("label")
    n3.id = "n3"
    n3.style.marginLeft = "30px"
    const n4 = document.createElement("label")
    n4.id = "n4"
    n4.style.marginLeft = "30px"
    const n5 = document.createElement("label")
    n5.id = "n5"
    n5.style.marginLeft = "30px"
    n1.innerHTML = `test name : ${rr.testName}`
    n2.innerHTML = `test date :${rr.testDate}`
    let mm = []
    mm = rr.totalTime.split(":")
    let yname = ""
    let hours = ""
    if (mm[0] != "0" && mm[1] != "0") {
        if (mm[0] != " 1") {
            yname = `${mm[0]} hours and ${mm[1]} minutes`
        }
        else {
            yname = `${mm[0]} hour and ${mm[1]} minutes`
        }
    }
    else if (mm[0] != "0" && mm[1] == "0") {
        if (mm[0] != "1") {
            yname = `${mm[0]} hours `
        }
        else {
            yname = `${mm[0]} hour `
        }
    }
    else if (mm[0] = "0" && mm[1] != "0") {
        yname = ` ${mm[1]} minutes`
    }
    if (mm[1] != "0") {
        hours = `and ${mm[1]} minutes `
    }
    n3.innerHTML = `Total Time: ${yname}  `
    n4.innerHTML = `start time :${rr.startTime}`
    n5.innerHTML = `is question random ?`
    const z1 = document.getElementById(`m1${a}`)
    const z2 = document.getElementById(`m2${a}`)
    const z3 = document.getElementById(`m3${a}`)
    const z4 = document.getElementById(`m4${a}`)
    const z5 = document.getElementById(`m5${a}`)
    const z6 = document.getElementById(`m6${a}`)
    const n11 = document.getElementById("n1")
    const n22 = document.getElementById("n2")
    const n33 = document.getElementById("n3")
    const n44 = document.getElementById("n4")
    const n55 = document.getElementById("n5")
    const x1 = document.createElement("input")
    x1.style.marginLeft = "30px"
    const x2 = document.createElement("input")
    x2.style.marginLeft = "30px"
    const x3 = document.createElement("input")
    x3.style.marginLeft = "30px"
    const x33 = document.createElement("input")
    x33.style.marginLeft = "30px"
    const x4 = document.createElement("input")
    x4.style.marginLeft = "30px"
    const x5 = document.createElement("select")
    x5.style.marginLeft = "30px"
    const x55 = document.createElement("Option")
    const x56 = document.createElement("Option")
    x55.innerHTML = "yes"
    x55.value = "yes"
    x56.innerHTML = "no"
    x56.value = "no"
    x5.appendChild(x55)
    x5.appendChild(x56)
    const x6 = document.createElement("button")
    x2.type = "date"
    x3.type = "number"
    x3.min = "0"
    x3.max = "5"
    x3.step = "1"
    x33.type = "number"
    x33.min = "0"
    x33.max = "59"
    x33.step = "1"
    x4.type = "time"
    x1.id = "nl1"
    x2.id = "nl2"
    x3.id = "nl3"
    x33.id="nl33"
    x4.id = "nl4"
    x5.id = "nl5"
    x6.id = `n6${a}`
    x1.placeholder = "enter test name"
    x2.placeholder = "enter test date"
    x3.placeholder = "hours"
    x33.placeholder = "minutes"
    x4.placeholder = "enter test start time"
    x6.innerHTML = "save data"
    x6.style.cursor="pointer"
    x6.style.backgroundColor = "black"
    x6.style.color = "white"
    x6.style.borderRadius = "10px"
    x6.style.marginLeft = "80px"
    brT = document.createElement("br")
    div9.appendChild(brT.cloneNode())
    div9.appendChild(brT.cloneNode())
    div9.appendChild(n1)
    div9.appendChild(brT.cloneNode())
    div9.appendChild(x1)
    div9.appendChild(brT.cloneNode())
    div9.appendChild(brT.cloneNode())
    div9.appendChild(n2)
    div9.appendChild(brT.cloneNode())
    div9.appendChild(x2)
    div9.appendChild(brT.cloneNode())
    div9.appendChild(brT.cloneNode())
    div9.appendChild(n3)
    div9.appendChild(brT.cloneNode())
    div9.appendChild(x3)
    div9.appendChild(x33)
    div9.appendChild(brT.cloneNode())
    div9.appendChild(brT.cloneNode())
    div9.appendChild(n4)
    div9.appendChild(brT.cloneNode())
    div9.appendChild(x4)
    div9.appendChild(brT.cloneNode())
    div9.appendChild(brT.cloneNode())
    div9.appendChild(n5)
    div9.appendChild(brT.cloneNode())
    div9.appendChild(x5)
    div9.appendChild(brT.cloneNode())
    div9.appendChild(brT.cloneNode())
    div9.appendChild(x6)
    x6.addEventListener("click", function () { put1(rr) })
}


//this func gets the data of the test proces it and sand it to the surver
async function put1(d) {
    let t1 = document.getElementById(`nl1`).value
    let t2 = document.getElementById("nl2").value
    let t3 = document.getElementById("nl3").value
    let t33 = document.getElementById("nl33").value
    if (t3 != " " && t33 != "") {
        t3 = ` ${t3}:${t33}`
    }
    let t4 = document.getElementById("nl4").value
    let t51 = document.getElementById('nl5').value
    let t5 = 0
    if (t51 == "yes") { t5 = 1 }
    const rrrer = rr
    if (t1 == "") {
    }
    if (t2 == "") {
    }
    if (t3 == "") {
    }
    if (t4 == "") {
    }
    let z1 = t1
    let z2 = t2
    let z3 = t4
    let z4 = t3
    let z5 = t5
    let z7 = localStorage.getItem("TeacherIdRef")
    let z6 = `${d.id}`
    const new1 = { Id: z6, testName: `${z1}`, testDate: `${z2}`, startTime: `${z3}`, totalTime: z4, random: z5, teacherIdRef: `${z7}` }
    const y1 = "https://top-school.azurewebsites.net/../api/Test"
    const response = await fetch(y1, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(new1) })
    if (response.status != 200) {
        divBuilder2()
        const hError = document.createElement("h1")
        hError.innerHTML = `Error ${response.status}`
        hError.style.marginTop = "0%"
        hError.style.fontSize = "50px"
        div61.appendChild(hError)
        return
    }

    if (response.status == 200) {
        const resjj = await response.json()
        if (resjj.testName == "empty") {
            const labAlert = document.getElementById("n1")
            labAlert.style.color = "red"
            labAlert.innerHTML = " Name Exist Choose A Different Name"
            return
        }

        if (resjj.testDate == "empty") {
            const labAlert2 = document.getElementById("n2")
            labAlert2.style.color = "red"
            labAlert2.innerHTML = "Date Exist Choose A Different Date"
            return
        
        }

        localStorage.setItem("jjj", `${resjj.testName}`)
        ee = 1
        location.reload()
    }
    else {
        const div55 = document.getElementById("div5")
        div55.replaceChildren()
        hdiv5 = document.createElement("h1")
        hdiv5.style.fontSize = "60px"
        hdiv5.innerHTML = `Error ${response.status}`
        div55.appendChild(hdiv5)
    }
}



// this func upload the picture or text questions to the screan for update question 

function question(y, qjson, aj, m) {

    if (qjson[y].picture == "") {
        div9.replaceChildren()
        div9.style.float = "left"
        div9.style.marginLeft = "130%"
        div9.style.width = "60%"
        div9.style.height = "500px"
        div9.style.marginTop = "-650px"
        div9.style.backgroundColor = "aquamarine"

        const h1 = document.createElement("h3")
        h1.style.marginLeft = "50px"
        h1.textContent = ` question${y + 1}`
        div9.appendChild(h1)
        const in1 = document.createElement("input")
        in1.style.marginLeft = "40px"
        in1.type = "text"
        in1.id = "in1"
        in1.value = ""
        in1.textContent = "enter question"
        const p1 = document.createElement("label")
        p1.textContent = "please enter a quetion"
        p1.style.marginLeft = "40px"
        p1.id = "p11"
        const brQ = document.createElement("br")
        div9.appendChild(p1)
        div9.appendChild(brQ.cloneNode())
        div9.appendChild(in1)
        div9.appendChild(brQ.cloneNode())
        div9.appendChild(brQ.cloneNode())
        for (let i = 0; i < 4; i++) {
            const p2 = document.createElement("label")
            p2.textContent = "please enter an answer"
            p2.style.marginLeft = "40px"
            p2.id = `lab${i}`
            const in3 = document.createElement("input")
            in3.style.marginLeft = "40px"
            in3.type = "text area"
            in3.value = ""
            in3.id = `ina${i}`
            in3.textContent = "enter a question"
            div9.appendChild(p2)
            div9.appendChild(brQ.cloneNode())
            div9.appendChild(in3)
            div9.appendChild(brQ.cloneNode())
            div9.appendChild(brQ.cloneNode())
        }
        const p3 = document.createElement("label")
        p3.textContent = "choose the right answer"
        p3.style.marginLeft = "50px"
        p3.id = "p30"
        const in4 = document.createElement("input")
        in4.style.marginLeft = "50px"
        in4.type = "number"
        in4.max = "4"
        in4.min = "1"
        in4.id = "index"
        in4.value = ""
        in4.textContent = "choose the right answer"
        div9.appendChild(p3)
        div9.appendChild(brQ.cloneNode())
        div9.appendChild(in4)
        const btns = document.createElement("button")
        btns.id = "btns"
        btns.innerHTML = "save question"
        btns.style.backgroundColor = "black"
        btns.style.color = "white"
        btns.style.borderRadius = "10px"
        btns.style.marginLeft = "100px"
        btns.style.cursor = "pointer"
        let b = 0
        let f = ""
        btns.addEventListener("click", function () { questionupdate(y, qjson, aj, b, m, f) })
        let rr = 0
        div9.appendChild(brQ.cloneNode())
        div9.appendChild(brQ.cloneNode())
        div9.appendChild(btns)
    }
    else {
        let f = ""
        div9.replaceChildren()
        div9.style.float = "left"
        div9.style.marginLeft = "130%"
        div9.style.width = "60%"
        div9.style.height = "500px"
        div9.style.marginTop = "-650px"
        div9.style.backgroundColor = "aquamarine"
        const brQ = document.createElement("br")
        div9.style.border = "dotted"
        const h1 = document.createElement("h3")
        h1.style.marginLeft = "30px"
        h1.textContent = ` question${y + 1}`
        div9.appendChild(h1)
        const pic = document.createElement("input")
        pic.type = "file"
        pic.value = ""
        pic.style.marginLeft = "30px"
        pic.id = "files"
        pic.accept = "img/jpg, img/jpeg"
        const leb = document.createElement("label")
        leb.id = "lebPic"
        leb.style.marginLeft = "50px"
        leb.setAttribute("for", "files")
        leb.style.backgroundColor = "aquamarine"
        div9.appendChild(leb)
        div9.appendChild(brQ.cloneNode())
        div9.appendChild(pic)
        pic.addEventListener("change", (e) => {
            const files = e.target.files
            var filename = files[0].name;
            var extension = filename.substr(filename.lastIndexOf("."))
            var allowedExtensionsRegx = /(\.jpg|\.jpeg)$/i;
            var isAllowed = allowedExtensionsRegx.test(extension);
            if (!isAllowed) {
                const lebPic = document.getElementById("lebPic")
                lebPic.innerHTML = "please enter .jpg /.jpeg files"
                lebPic.style.color = "red"
                pic.value = ""
                return
            }
            else { lebPic.innerHTML = "" }
            if (window.File && window.FileReader && window.Blob) {
                const pic1 = new FileReader()
                pic1.readAsDataURL(files[0])
                pic1.addEventListener("load", function (event) {
                    const ff = event.target
                    f = ff.result
                }
                )
            }
        })
        for (let i = 0; i < 4; i++) {
            const p2 = document.createElement("label")
            p2.style.marginLeft = "30px"
            p2.textContent = "please enter an answer"
            p2.id = `labP${i}`
            const in3 = document.createElement("input")
            in3.style.marginLeft = "30px"
            in3.type = "text"
            in3.id = `ina${i}`
            in3.textContent = "enter a question"
            div9.appendChild(brQ.cloneNode())
            div9.appendChild(brQ.cloneNode())
            div9.appendChild(p2)
            div9.appendChild(brQ.cloneNode())
            div9.appendChild(in3)
        }
        const p3 = document.createElement("p")
        p3.style.marginLeft = "30px"
        p3.textContent = "choose the right answer"
        p3.id = "p30"
        const in4 = document.createElement("input")
        in4.type = "number"
        in4.style.marginLeft = "30px"
        in4.max = "4"
        in4.min = "1"
        in4.id = "index"
        in4.textContent = "choose the right answer"
        div9.appendChild(p3)
        div9.appendChild(in4)
        const btns = document.createElement("button")
        btns.id = "btns"
        btns.innerHTML = "save question"
        btns.style.backgroundColor = "black"
        btns.style.color = "white"
        btns.style.borderRadius = "10px"
        btns.style.marginLeft = "150px"
        btns.style.cursor = "pointer"
        div9.appendChild(brQ.cloneNode())
        div9.appendChild(btns)
        let r = 1
        let b = 1
        btns.addEventListener("click", function () { questionupdate(y, qjson, aj, b, m, f) })
        const br = document.createElement("br")
        const uld = document.createElement("ul")
    }

}

// this func download the data from the local storage and sand to the surver for update question
async function questionupdate(y, qjson, aj, b, m, f) {

    let qu = ""
    let pic = ""
    if (b == 0) {
        qu = document.getElementById("in1").value
        if (qu == "") {
            const InputText = document.getElementById("p11")
            InputText.style.color = "red"
            InputText.innerHTML = "* Must Fild"
            return
        }
        else {
            const InputText = document.getElementById("p11")
            InputText.style.color = "black"
            InputText.innerHTML = "please enter a quetion"
        }
        pic = ""
    }
    else if (b == 1) {
        pic = f
        if (pic == "") {
            const InputText = document.getElementById("lebPic")
            InputText.style.color = "red"
            InputText.innerHTML = "* Must Fild"
            return
        }
        else {
            const InputText = document.getElementById("lebPic")
            InputText.style.color = "black"
            InputText.innerHTML = ""
        }
        qu = ""
    }
    const an1 = document.getElementById("ina0").value
    const an2 = document.getElementById("ina1").value
    if (an2 == "" || an1 == "") {
        if (b == 0) {
            const lab1T = document.getElementById("lab0")
            lab1T.style.color = "red"
            lab1T.innerHTML = "* Must Fild"
            const lab2T = document.getElementById("lab1")
            lab2T.style.color = "red"
            lab2T.innerHTML = "* Must Fild"
            return
        }
        if (b == 1) {
            const lab1T = document.getElementById("labP0")
            lab1T.style.color = "red"
            lab1T.innerHTML = "* Must Fild"
            const lab2T = document.getElementById("labP1")
            lab2T.style.color = "red"
            lab2T.innerHTML = "* Must Fild"
            return
        }
    }
    else if (b == 0) {
        const lab1T = document.getElementById("lab0")
        lab1T.style.color = "black"
        lab1T.innerHTML = "please enter an answer"
        const lab2T = document.getElementById("lab1")
        lab2T.style.color = "black"
        lab2T.innerHTML = "please enter an answer"
    }
    else if (b == 1) {
        const lab1T = document.getElementById("labP0")
        lab1T.style.color = "black"
        lab1T.innerHTML = "please enter an answer"
        const lab2T = document.getElementById("labP1")
        lab2T.style.color = "black"
        lab2T.innerHTML = "please enter an answer"
    }
    const an3 = document.getElementById("ina2").value
    const an4 = document.getElementById("ina3").value
    const an5 = document.getElementById("index").value
    if (an5 == "") {
        const LabP30 = document.getElementById("p30")
        LabP30.style.color = "red"
        LabP30.innerHTML = "* Must Fild"
        return
    }
    const a = qjson[y].id
    const a1 = m.id
    const n11 = { id: a, testIdRef: a1, questions: `${qu}`, picture: `${pic}` }
    const y112 = 'https://top-school.azurewebsites.net/../api/Question'
    const response = await fetch(y112, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n11) })
    const response1 = response.json()
    if (response.status != 200) {
        divBuilder2()
        const hError = document.createElement("h1")
        hError.innerHTML = `Error ${response.status}`
        hError.style.marginTop = "0%"
        hError.style.fontSize = "50px"
        div61.appendChild(hError)
        return
    }
    else {
        let b3 = 0
        let countc = 0
        for (let h = 0; h < 4; h++) {
            const b1 = document.getElementById(`ina${h}`).value
            if (b1 != "") {
                const comper = parseInt(an5) - 1
                if (h == comper) {
                    b3 = 1
                }
                else { b3 = 0 }
                const b2 = qjson[y].id
                const n11 = { id: b3, answer1: `${b1}`, questionIdRef: `${b2}`, rightWorng: `${b3} `}
                const y11 = 'https://top-school.azurewebsites.net/../api/Answer'
                const response11 = await fetch(y11, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n11) })
                if (response11.status != 200) {
                    const pdiv = document.getElementById("div5")
                    divBuilder2()
                    const hError = document.createElement("h1")
                    hError.innerHTML = `Error ${response11.status}`
                    hError.style.marginTop = "0%"
                    hError.style.fontSize = "50px"
                    div61.appendChild(hError)
                    return
                }
            }
        }
        if (countc == 0) {
            localStorage.setItem("jjj", `${m.testName}`)
            ee = 1
            location.reload()
        }
    }
}

//this func upload the delete test to the screan
function delete1(m) {

    div9.replaceChildren()
    div9.style.float = "left"
    div9.style.marginLeft = "130%"
    div9.style.width = "60%"
    div9.style.height = "500px"
    div9.style.marginTop = "-650px"
    div9.style.backgroundColor = "aquamarine"
    div9.style.border = "dotted"
    const h1 = document.createElement("h3")
    h1.style.marginLeft = "50px"
    h1.style.fontSize = "25px"
    h1.textContent = ` Delete Test ${m.testName} ?`
    div9.appendChild(h1)
    const btnd = document.createElement("button")
    btnd.innerHTML = "Delete"
    btnd.style.padding = "15px 32px"
    btnd.style.fontSize = "16px"
    btnd.style.marginLeft = "32%"
    btnd.style.cursor = "pointer"
    btnd.addEventListener("click", function () { deletetest(m) })
    btnd.style.backgroundColor = "azure"
    div9.appendChild(btnd)


}

// this func sand the data from delete test to the surver

async function deletetest(m) {

    const y1 = `../api/Test/${m.id}`
    const response11 = await fetch(y1, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify() })
    if (response11.status != 200) {
        divBuilder2()
        const hError = document.createElement("h1")
        hError.innerHTML = `Error ${response11.status}`
        hError.style.marginTop = "0%"
        hError.style.fontSize = "50px"
        div61.appendChild(hError)
        return
    }
    const resjson = await response11.json()
    if (response11.status == 200 && resjson == 1) {
        divBuilder2()
        const hError = document.createElement("h1")
        hError.innerHTML = `Test Delete Succrfully `
        hError.style.marginTop = "0%"
        hError.style.fontSize = "50px"
        div61.appendChild(hError)
       
        setTimeout(function () { window.close("https://top-school.azurewebsites.net/TeacherHtml/updatetest.html") }, 3000)
    }
}

// this func upload the delete question to the screan
async function deletequestion(g, qjson, aj, m) {

    if (qjson.length > 0) {

        div9.replaceChildren()
        div9.style.float = "left"
        div9.style.marginLeft = "130%"
        div9.style.width = "60%"
        div9.style.height = "500px"
        div9.style.marginTop = "-650px"
        div9.style.border = "dotted"
        div9.style.backgroundColor = "aquamarine"
        const h1 = document.createElement("h3")
        h1.style.marginLeft = "15%"
        h1.style.fontSize = "25px"
        h1.textContent = ` Delete Question ${g + 1} ?`
        div9.appendChild(h1)
        const btnd = document.createElement("button")
        btnd.innerHTML = "Delete"
        btnd.style.padding = "15px 32px"
        btnd.style.fontSize = "16px"
        btnd.style.marginLeft = "25%"
        btnd.style.cursor = "pointer"
        btnd.addEventListener("click", function () { deleteQ(g, qjson, m) })
        btnd.style.backgroundColor = "azure"
        div9.appendChild(btnd)

    }

}

// this func sand delete question to the surver
async function deleteQ(g, qjson, m) {

    const y1 = `../api/Question/${qjson[g].id}`
    const response11 = await fetch(y1, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify() })
    if (response11.status != 200) {
        divBuilder2()
        const hError = document.createElement("h1")
        hError.innerHTML = `Error ${response11.status}`
        hError.style.marginTop = "0%"
        hError.style.fontSize = "50px"
        div61.appendChild(hError)
        return
    }
    const resjson = await response11.json()
    if (response11.status == 200 && resjson == 1) {
        localStorage.setItem("jjj", `${m.testName}`)
        ee = 1
        location.reload()
    }
}

// this func upload the the picture question to add question
function addpic(y, qjson, aj, m) {

    div9.replaceChildren()
    div9.style.float = "left"
    div9.style.marginLeft = "130%"
    div9.style.width = "60%"
    div9.style.height = "500px"
    div9.style.marginTop = "-650px"
    div9.style.backgroundColor = "aquamarine"
    const brP = document.createElement("br")
    div9.style.border = "dotted"
    const h1 = document.createElement("h3")
    h1.style.marginLeft = "50px"
    h1.textContent = ` Add Questions`
    div9.appendChild(h1)
    const pic = document.createElement("input")
    pic.type = "file"
    pic.value = ""
    pic.style.marginLeft = "50px"
    pic.id = "files"
    pic.accept = "img/jpg, img/jpeg"
    const leb = document.createElement("label")
    leb.id = "labPic"
    leb.style.marginLeft = "50px"
    leb.setAttribute("for", "files")
    leb.style.backgroundColor = "aquamarine"
    div9.appendChild(leb)
    div9.appendChild(brP.cloneNode())
    div9.appendChild(pic)
    let f = ""
    pic.addEventListener("change", (e) => {
        const files = e.target.files
        var filename = files[0].name;
        var extension = filename.substr(filename.lastIndexOf("."))
        var allowedExtensionsRegx = /(\.jpg|\.jpeg)$/i;
        var isAllowed = allowedExtensionsRegx.test(extension);
        if (!isAllowed) {
            leb.style.color = "red"
            leb.innerHTML = ("please enter .jpg /.jpeg files")
            pic.value = ""
            return
        }
        else {
            leb.innerHTML = ""
        }
        if (window.File && window.FileReader && window.Blob) {
            const pic1 = new FileReader()
            pic1.readAsDataURL(files[0])
            pic1.addEventListener("load", function (event) {
                const ff = event.target
                f = ff.result
            }
            )
        }
    })
    for (let i = 0; i < 4; i++) {
        const p2 = document.createElement("label")
        p2.style.marginLeft = "50px"
        p2.id = `labP${i}`
        p2.textContent = "please enter an answer"
        const in3 = document.createElement("input")
        in3.style.marginLeft = "50px"
        in3.type = "text"
        in3.id = `ina${i}`
        in3.textContent = "enter a question"
        div9.appendChild(brP.cloneNode())
        div9.appendChild(brP.cloneNode())
        div9.appendChild(p2)
        div9.appendChild(in3)

    }
    const p3 = document.createElement("p")
    p3.style.marginLeft = "50px"
    p3.textContent = "choose the right answer"
    p3.id = "p3index"
    const in4 = document.createElement("input")
    in4.type = "number"
    in4.style.marginLeft = "50px"
    in4.max = "4"
    in4.min = "1"
    in4.id = "index"
    in4.textContent = "choose the right answer"
    div9.appendChild(p3)
    div9.appendChild(in4)
    const btns = document.createElement("button")
    btns.id = "btns"
    btns.style.backgroundColor = "black"
    btns.style.color = "white"
    btns.innerHTML = "save question"
    btns.style.borderRadius = "10px"
    btns.style.marginLeft = "150px"
    btns.style.cursor = "pointer"
    div9.appendChild(brP.cloneNode())
    div9.appendChild(brP.cloneNode())
    div9.appendChild(btns)
    let r = 1
    let b = 1
    btns.addEventListener("click", function () { questionAdd(y, qjson, aj, b, m, f) })
    const br = document.createElement("br")
    const uld = document.createElement("ul")
}

// this func upload the add text question to the screan
function addtext(y, qjson, aj, m) {

    div9.replaceChildren()
    div9.style.float = "left"
    div9.style.marginLeft = "130%"
    div9.style.width = "60%"
    div9.style.height = "500px"
    div9.style.marginTop = "-650px"
    div9.style.backgroundColor = "aquamarine" 
    div9.style.border = "dotted"
    const h1 = document.createElement("h3")
    h1.style.marginLeft = "50px"
    h1.textContent = ` Add Question`
    div9.appendChild(h1)
    const in1 = document.createElement("input")
    in1.style.marginLeft = "50px"
    in1.type = "text"
    in1.id = "in1"
    in1.value = ""
    in1.textContent = "enter question"
    const p1 = document.createElement("p")
    p1.id = "p11"
    p1.textContent = "please enter a quetion"
    p1.style.marginLeft = "50px"
    div9.appendChild(p1)
    div9.appendChild(in1)
    for (let i = 0; i < 4; i++) {
        const p2 = document.createElement("p")
        p2.textContent = "please enter an answer"
        p2.style.marginLeft = "50px"
        p2.id = `inp${i}`
        const in3 = document.createElement("input")
        in3.style.marginLeft = "50px"
        in3.type = "text"
        in3.value = ""
        in3.id = `ina${i}`
        in3.textContent = "enter a question"
        div9.appendChild(p2)
        div9.appendChild(in3)

    }
    const p3 = document.createElement("p")
    p3.textContent = "choose the right answer"
    p3.style.marginLeft = "50px"
    p3.id = "p3index"
    const in4 = document.createElement("input")
    in4.style.marginLeft = "50px"
    in4.type = "number"
    in4.max = "4"
    in4.min = "1"
    in4.id = "index"
    in4.value = ""
    in4.textContent = "choose the right answer"
    div9.appendChild(p3)
    div9.appendChild(in4)
    const btns = document.createElement("button")
    btns.id = "btns"
    btns.style.backgroundColor = "black"
    btns.style.color = "white"
    btns.innerHTML = "save question"
    btns.style.borderRadius = "10px"
    btns.style.marginLeft = "150px"
    btns.style.cursor = "pointer"
    let b = 0
    let f = ""
    btns.addEventListener("click", function () { questionAdd(y, qjson, aj, b, m, f) })
    let rr = 0
    div9.appendChild(btns)
}

// this func sand the add question to the surver
async function questionAdd(y, qjson, aj, b, m, f) {

    let qu = ""
    let pic = ""
    if (b == 0) {
        qu = document.getElementById("in1").value
        if (qu == "") {
            const InputText = document.getElementById("p11")
            InputText.style.color = "red"
            InputText.innerHTML = "* Must Fild"
            return
        }
        else {
            const InputText = document.getElementById("p11")
            InputText.style.color = "black"
            InputText.innerHTML = "please enter a quetion"
        }
        pic = ""
    }
    else if (b == 1) {
        pic = f
        if (pic == "") {
            const InputText = document.getElementById("labPic")
            InputText.style.color = "red"
            InputText.innerHTML = "* Must Fild"
            return
        }
        else {
            const InputText = document.getElementById("labPic")
            InputText.style.color = "black"
            InputText.innerHTML = ""
        }
        qu = ""
    }
    const an1 = document.getElementById("ina0").value
    const an2 = document.getElementById("ina1").value
    if (an2 == "" || an1 == "") {
        if (b == 0) {
            const lab1T = document.getElementById("inp0")
            lab1T.style.color = "red"
            lab1T.innerHTML = "* Must Fild"
            const lab2T = document.getElementById("inp1")
            lab2T.style.color = "red"
            lab2T.innerHTML = "* Must Fild"
            return
        }
        if (b == 1) {
            const lab1T = document.getElementById("labP0")
            lab1T.style.color = "red"
            lab1T.innerHTML = "* Must Fild"
            const lab2T = document.getElementById("labP1")
            lab2T.style.color = "red"
            lab2T.innerHTML = "* Must Fild"
            return
        }

    }
    else if (b == 0) {
        const lab1T = document.getElementById("inp0")
        lab1T.style.color = "black"
        lab1T.innerHTML = "please enter an answer"
        const lab2T = document.getElementById("inp1")
        lab2T.style.color = "black"
        lab2T.innerHTML = "please enter an answer"

    }
    else if (b == 1) {
        const lab1T = document.getElementById("labP0")
        lab1T.style.color = "black"
        lab1T.innerHTML = "please enter an answer"
        const lab2T = document.getElementById("labP1")
        lab2T.style.color = "black"
        lab2T.innerHTML = "please enter an answer"
    }
    const an3 = document.getElementById("ina2").value
    const an4 = document.getElementById("ina3").value
    const an5 = document.getElementById("index").value
    if (an5 == "") {
        const indexInput = document.getElementById("p3index")
        indexInput.innerHTML = "* Must Fild"
        indexInput.style.color = "red"
        return
    }
    const a1 = m.id
    const a = "0"
    const n11 = { id: `${a}`, testIdRef: `${a1}`, questions: `${qu}`, picture: `${pic}` }
    const y112 = 'https://top-school.azurewebsites.net/../api/Question'
    const response200 = await fetch(y112, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n11) })
    if (response200.status != 200) {
        divBuilder2()
        const hError = document.createElement("h1")
        hError.innerHTML = `Error ${response200.status}`
        hError.style.marginTop = "0%"
        hError.style.fontSize = "50px"
        div61.appendChild(hError)
        return
    }
    else {
        const response1 = await response200.json()
        let b3 = 0
        let countc = 0
        for (let h = 0; h < 4; h++) {
            const b1 = document.getElementById(`ina${h}`).value
            if (b1 != "") {
                const comper = parseInt(an5) - 1
                if (h == comper) {
                    b3 = "1"

                }
                else { b3 = "0" }
                const b2 = response1.id
                
                const n11 = { id: b3, answer1: `${b1}`, questionIdRef: `${b2}`, rightWorng: `${b3}` }
                const y11 = 'https://top-school.azurewebsites.net/../api/Answer'
                const response11 = await fetch(y11, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n11) })
                if (response11.status != 200) {
                    divBuilder2()
                    const hError = document.createElement("h1")
                    hError.innerHTML = `Error ${response11.status}`
                    hError.style.marginTop = "0%"
                    hError.style.fontSize = "50px"
                    div61.appendChild(hError)
                    return
                }
            }
        }
        if (countc == 0) {
            localStorage.setItem("jjj", `${m.testName}`)
            ee = 1
            location.reload()
        }
    }
}