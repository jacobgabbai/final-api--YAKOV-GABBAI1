const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const in1 = document.createElement("input")
in1.placeholder = "Enter Test Name"
in1.style.marginRight = "10px"
in1.id = "in1"
in1.name = "in1"
in1.style.backgroundColor = "azure"
const lab = document.createElement("label")
lab.for = "in1"
lab.innerHTML = ""
lab.style.marginLeft = "10px"
lab.style.color = "red"
const sl = document.createElement("select")
sl.id = "sl"
sl.style.backgroundColor = "azure"
sl.addEventListener("change", function () { sel(this.value) })

// this func change the input text by the select value
function sel(a) {
    if (a == "student") {

        in1.placeholder = "Enter Student Id"
    }
    else {
        in1.placeholder = "Enter Test Name"
    }
}
const op1 = document.createElement("option")
op1.value = "name"
op1.id = "op1"
op1.innerHTML = "Test Name"
const op2 = document.createElement("option")
op2.value = "student"
op2.id = "op2"
op2.innerHTML = "Student Id"
const br = document.createElement("br")
sl.appendChild(op1)
sl.appendChild(op2)
const button1 = document.createElement("button")
button1.style.marginLeft = "20px"
button1.style.borderRadius = "10px"
button1.style.backgroundColor = "black"
button1.style.color = "white"
button1.style.cursor = "pointer"
button1.addEventListener("click", function () { testh() })
button1.innerHTML = "search"
div1.appendChild(lab)
div1.appendChild(br.cloneNode())
div1.appendChild(in1)
div1.appendChild(sl)
div1.appendChild(button1)
const table = document.createElement("table")

qex = []
aex = []
var tr = true

// this func gets the input value and proces it sand it to the surver gets the data build a table
// and upload it to the surver
async function testh() {
    let rep = ""
    divwr2.replaceChildren()
    divwr.replaceChildren()
    div2.replaceChildren()
    divwr2.style.overflow = "hidden"
    divwr.style.border = ""
    divwr2.style.border = ""
    table.replaceChildren()
    table.style.backgroundColor = "red"
    const n = localStorage.getItem("stuId")
    const valueinput = document.getElementById("in1").value
    if (valueinput == "") {
        lab.innerHTML = "* Must Fild"
        return
    }
    else {
        lab.innerHTML = ""
    }
    if (sl.value == "student") {
        const check = /^\d+$/
        const b = check.test(valueinput)

        if (valueinput.length != 10) {
            lab.innerHTML = "Student Id Must Be 10 Numbers"
            return
        }
        else if (!b) {
            lab.innerHTML = "Student Id Containds Numbers Only"
            return
        }
        else {
            lab.innerHTML = ""
        }

    }
    if (sl.value == "student") {
        rep = await fetch(`../api/TestExControler/${valueinput}?i=2`)

    }
    else {
        rep = await fetch(`../api/TestExControler/${valueinput}?i=1`)
    }



    const tn = []
    if (rep.status != 200) {
        const divwr1 = document.getElementById("divwr")
        const hError = document.createElement("h1")
        hError.innerHTML = `Error ${rep.status}`
        divwr1.style.textAlign = "center"
        hError.style.fontSize = "50px"
        divwr1.appendChild(hError)
        return

    }
    const repo = await rep.json()
    if (repo.length == 0 && rep.status == 200) {
        const pdiv = document.getElementById("divwr")
        const hError = document.createElement("h1")
        hError.innerHTML = `No Tests Have Been Found `
        divwr.style.textAlign = "center"
        hError.style.fontSize = "50px"
        pdiv.appendChild(hError)
        return
    }

    if (rep.status == 200 && repo.length > 0) {
        table.id = "table"
        table.style.backgroundColor = "aquamarine"
        const tr1 = document.createElement("tr")
        const td1 = document.createElement("td")
        td1.style.border = "2px solid black"
        td1.style.padding = "5px"
        td1.innerHTML = "Student Name"
        const td11 = document.createElement("td")
        td11.innerHTML = "Student ID"
        td11.style.border = "2px solid black"
        td11.style.padding = "5px"
        const valuepoint1 = document.getElementById("sl").value
        const td111 = document.createElement("td")
        if (valuepoint1 == "student") {
            
            td111.innerHTML = "Test Name"
            td111.style.border = "2px solid black"
            td111.style.padding = "5px"
        }
        const td2 = document.createElement("td")
        td2.innerHTML = "Grade"
        td2.style.border = "2px solid black"
        td2.style.padding = "5px"
        const td3 = document.createElement("td")
        td3.innerHTML = " watch mistakes"
        td3.style.border = "2px solid black"
        td3.style.padding = "5px"

        tr1.appendChild(td1)
        if (valuepoint1 == "student") {
            tr1.appendChild(td111)
        }
        tr1.appendChild(td11)
        tr1.appendChild(td2)
        tr1.appendChild(td3)
        table.style.width = "250px"
        table.style.float = "Left"
        table.appendChild(tr1)
        const htable = document.createElement("ul")
        const li1 = document.createElement("li")
        const li2 = document.createElement("li")
       
        if (valuepoint1 == "name") {
            li1.textContent = `Total Of ${repo.length} Students Did The Test `
            let sum = 0
            for (let z = 0; z < repo.length; z++) {
                sum += parseInt(repo[z].grade)
            }
            sum = sum / (parseInt(repo.length))
            sum = Math.floor(sum)
            li2.textContent = `The Averege Grade of The Class Is ${sum}`
            htable.appendChild(li1)
            const br1 = document.createElement("BR")
            htable.appendChild(br1
            )
            htable.appendChild(li2)
        }
        else {

        }
        
     
        div2.appendChild(htable)
        div2.appendChild(table)
        for (let i = 0; i < repo.length; i++) {
            const f1 = ``
            var row = table.insertRow()
            var cell1 = row.insertCell()
            cell1.style.border = "2px solid black"
            cell1.style.padding = "5px"
            cell1.innerHTML = `${repo[i].stuName}`
            if (valuepoint1 == "student") {
                var cell111 = row.insertCell()
                cell111.style.border = "2px solid black"
                cell111.style.padding = "5px"
                cell111.innerHTML = `${repo[i].testName}`
            }
            var cell11 = row.insertCell()
            cell11.style.border = "2px solid black"
            cell11.style.padding = "5px"
            cell11.innerHTML = `${repo[i].stuId}`


            var cell2 = row.insertCell()
            cell2.style.border = "2px solid black"
            cell2.style.padding = "5px"
            cell2.innerHTML = `${repo[i].grade}`

            var cell3 = row.insertCell()
            cell3.style.border = "2px solid black"
            cell3.style.padding = "5px"
            cell3.innerHTML = "mistake"
            cell3.style.cursor = "pointer"
            cell3.id = `${i}0`
            const idt = repo[i].id

            const rep12 = await fetch(`../api/QuesEx/${idt}`)
            const rep12j = await rep12.json()
            const b = rep12j.length
            for (let ii = 0; ii < rep12j.length; ii++) {
                const rep13 = await fetch(`../api/AnswerEx/${rep12j[ii].id}`)
                const rep13j = await rep13.json()
                localStorage.setItem(`question${i}${ii}`, rep12j[ii].questions)
                localStorage.setItem(`question${i}${ii}`, rep12j[ii].questions)
                localStorage.setItem(`answersR${i}${ii}`, rep13j.rightAnswer)
                localStorage.setItem(`answersW${i}${ii}`, rep13j.worngAnswer)
                if (ii == 0) {
                    const cell = document.getElementById(`${i}0`)
                    cell.addEventListener("click", function () { tr ? dissplay(i, b, repo[i]) : clearme(); tr = !tr })

                }
            }

        }



    }
}

// this func uploads the worng answers of the student to the screan
function dissplay(a, b, c) {



    const hwr = document.createElement("h1")
    hwr.textContent = ` ${c.stuName}'s mistakes`
    const divwr11 = document.getElementById("divwr2")
    divwr11.style.backgroundColor="azure"
    divwr11.style.border = "dotted"
    divwr11.style.textAlign="center"
    divwr11.appendChild(hwr)
    for (let z = 0; z < b; z++) {
        let bc = (b - 1) * 110 + 200
        let bcs = bc.toString()
        divwr11.style.height = "300px"
        
        divwr11.style.overflow = "scroll"
        const w = localStorage.getItem(`answersW${a}${z}`)
        const ww = w.split("+")
        const r = localStorage.getItem(`answersR${a}${z}`)
        const rr = r.split("+")
        const p1 = document.createElement("p")
        p1.style.marginLeft = "auto"
        p1.textContent = `the right answer is - ${rr[0]}`
        const p2 = document.createElement("p")
        p2.textContent = ` chosen answer is -  ${ww[0]}`
        p2.style.marginLeft = "auto%"
        const p3 = document.createElement("p")
        const q1 = localStorage.getItem(`question${a}${z}`)
        const data = q1.split(":")

        if (data[0] != "data") {
            p3.textContent = `Question-${z + 1} "${q1}"`
            p3.style.marginLeft = "0%"
            p3.style.fontWeight = "bold"
            divwr11.appendChild(p3)
        }
        else {
            p3.textContent = `Question-${z + 1}`
            p3.style.marginLeft = "auto"
            p3.style.fontWeight = "bold"
            p3.style.marginTop="20px"
            divwr11.appendChild(p3)
            const out = document.createElement("output")
            out.style.height = "50px"
            const divo = document.createElement("div")
            divo.style.display = "flex"
            divo.style.marginLeft = "35%"
            divo.style.height = "70px"
            divo.style.marginTop="20px"
            let gg = q1
            if (gg != "") {

                divo.innerHTML = `<img src="${gg}"/>`
                out.appendChild(divo)
                divwr11.appendChild(out)
            }
        }
        

        divwr11.appendChild(p2)
        divwr11.appendChild(p1)
    }
}

// the func clear the div that contain the answers
function clearme() {
    divwr2.replaceChildren()
    divwr2.style.overflow = "hidden"
    divwr2.style.border = ""
    divwr2.style.backgroundColor="azure"
}

