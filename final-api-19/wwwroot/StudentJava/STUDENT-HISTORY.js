window.addEventListener("beforeunload", localset)
const table = document.createElement("table")
window.addEventListener("load", testh)
qex = []
aex = []
var tr = true

const centerdiv=document.getElementById("center")

// THIS FUNC calls the data from the surver  create a table and upload the data to the screan
async function testh() {
    const n = localStorage.getItem("stuId")
    const rep = await fetch(`../api/TestExControler/${n}?i=0`)
    if (rep.status != 200) {
        const divwr1 = document.createElement("div")
        divwr1.style.width = "400px"
        divwr1.style.marginLeft = "35%"
        divwr1.style.marginTop = "100px"
        const hwr = document.createElement("h1")
        hwr.textContent = `Error ${rep.status}`
        hwr.style.marginLeft = "25%"
        divwr1.appendChild(hwr)
        centerdiv.appendChild(divwr1)
        return
    }
    const repo = await rep.json()
    const tn = []
   
    if (repo.length == 0 && rep.status == 200) {

        const divwr1 = document.createElement("div")
        divwr1.style.width = "500px"
        divwr1.style.marginLeft = "35%"
        divwr1.style.marginTop = "100px"
        const hwr = document.createElement("h1")
        hwr.style.color="black"
        hwr.textContent = `You Did Not Take Any Test Yet`
        hwr.style.marginLeft = ""
        divwr1.appendChild(hwr)
        centerdiv.appendChild(divwr1)
        return
    }
   
    if (rep.status == 200 && repo.length > 0) {
        const div = document.getElementById("div")
        div.id = "div1"
        const br = document.createElement("br")
        const div1 = document.createElement("div")
        div1.id = `div1${0}`
        const u = document.createElement("ul")
        u.id = `ul${0}`
        const li = document.createElement("p")
        li.id = `li${0}`
        li.textContent = `Student Name - ${repo[0].stuName}`
        u.appendChild(li)
        const li1 = document.createElement("p")
        li1.id = `li1${1}`
        li1.textContent = `Student Id - ${repo[0].stuId}`
        let gr=0
        for (let h = 0; h < repo.length; h++) {
          gr+=parseInt(repo[h].grade)
        }
        gr= parseInt( gr/(repo.length))
        const lig = document.createElement("P")
        lig.innerHTML=`Your Avrage Grade Is : ${gr}`        
        u.appendChild(li1)
        u.appendChild(lig)
        div1.appendChild(u)
        const h33 = document.createElement("h3")
        h33.textContent = `Total of ${repo.length} Tests`
        div1.appendChild(h33)
        div.appendChild(div1)
        table.id = "table"
        table.style.backgroundColor = "azure"
        const tr1 = document.createElement("tr")
        const td1 = document.createElement("td")
        td1.style.border = "2px solid black"
        td1.style.padding = "5px"
        td1.innerHTML = "Test Name"
        const td2 = document.createElement("td")
        td2.innerHTML = "Grade"
        td2.style.border = "2px solid black"
        td2.style.padding = "5px"
        const td3 = document.createElement("td")
        td3.innerHTML = "mistakes"
        td3.style.border = "2px solid black"
        td3.style.padding = "5px"
        tr1.appendChild(td1)
        tr1.appendChild(td2)
        tr1.appendChild(td3)
        table.style.width = "250px"
        table.style.float = "Left"
        table.style.backgroundColor ="aquamarine"
        table.style.marginTop = "0px"
        table.style.marginLeft="25px"
        table.appendChild(tr1)
        const maindiv=document.getElementById("bodyd")
        centerdiv.appendChild(table)
        for (let i = 0; i < repo.length; i++) {
            const f1 = ``
            var row = table.insertRow()
            var cell1 = row.insertCell()
            cell1.style.border = "2px solid black"
            cell1.style.padding = "5px"
            cell1.innerHTML = `${repo[i].testName}`
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
           /*cell3.addEventListener("click", function () { watchmistake(a) })*/
            const idt = repo[i].id
            const rep12 = await fetch(`../api/QuesEx/${idt}`)
            const rep12j = await rep12.json()
            const b = rep12j.length
            for (let ii = 0; ii < rep12j.length; ii++) {
                const rep13 = await fetch(`../api/AnswerEx/${rep12j[ii].id}`)
                const rep13j = await rep13.json()
                localStorage.setItem(`question${i}${ii}`, rep12j[ii].questions)
                localStorage.setItem(`answersR${i}${ii}`, rep13j.rightAnswer)
                localStorage.setItem(`answersW${i}${ii}`, rep13j.worngAnswer)
                if (ii == 0) {
                    const cell = document.getElementById(`${i}0`)
                    cell.addEventListener("click", function () { tr ? dissplay(i, b) : clearme(); tr = !tr })

                }
            }
        }


     

        // this func up loads all the worng answers to the screan 
        function dissplay(a, b) {
            if (divwr != null) {
                const divwr = document.createElement("div")
                divwr.style.width = "400px"
                divwr.style.marginLeft = "35%"
                divwr.style.marginTop = "0px"
                const hwr = document.createElement("h1")
                hwr.textContent = "mistakes"
                hwr.style.marginLeft = "29%"
            }
            centerdiv.appendChild(divwr)
            divwr.replaceChildren()
            divwr.style.border = "dotted"
            divwr.style.overflow = "scroll"
            divwr.style.marginTop = "0px"
            divwr.style.height="200px"
            divwr.appendChild(hwr)
            for (let z = 0; z < b; z++) {
                let bc = (b - 1) * 100 + 200
                let bcs = bc.toString()
                const w = localStorage.getItem(`answersW${a}${z}`)
                const ww = w.split("+")
                const r = localStorage.getItem(`answersR${a}${z}`)
                const rr = r.split("+")
                const p1 = document.createElement("p")
                p1.textContent = `the right answer is - ${rr[0]}`
                p1.style.marginLeft = "30%"
                const p2 = document.createElement("p")
                p2.style.marginLeft = "30%"
                p2.textContent = `the answer you choose is -  ${ww[0]}`
                const p3 = document.createElement("p")
                const q1 = localStorage.getItem(`question${a}${z}`)
                const data = q1.split(":")
                
                if (data[0] != "data") {
                    p3.textContent = `Question-${z + 1} "${q1}"`
                    p3.style.marginLeft = "25%"
                    p3.style.fontWeight = "bold"
                    divwr.appendChild(p3)
                }
                else {
                    p3.textContent = `Question-${z + 1}`
                    p3.style.marginLeft = "25%"
                    p3.style.fontWeight = "bold"
                    divwr.appendChild(p3)
                    const out = document.createElement("output")
                    out.style.height = "50px"
                    const divo = document.createElement("div")
                    divo.style.display = "flex"
                    divo.style.marginLeft = "35%"
                    divo.style.height = "70px"
                    let gg = q1
                    if (gg != "") {
                       
                        divo.innerHTML = `<img src="${gg}"/>`
                        out.appendChild(divo)
                        divwr.appendChild(out)
                    }
                }
            
                divwr.appendChild(p2)
                divwr.appendChild(p1)
            }
        }
        // this func clears the div that contains the mistakes
        function clearme() {
            divwr.replaceChildren()
            divwr.style.border = ""
            divwr.style.overflow = ""
        }
    }
}




function localset()
{

    const a = localStorage.getItem("stuId")
    const b = localStorage.getItem("stuName")
    localStorage.clear()
    localStorage.setItem("stuId", a)
    localStorage.setItem("stuName", b)
}