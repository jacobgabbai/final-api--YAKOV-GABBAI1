localStorage.setItem("open", 1)
window.addEventListener("beforeunload", function () { localStorage.clear() })

const st = document.createElement("select")
st.id = "st"
st.name = "stname"
const op1 = document.createElement("option")
op1.value = "name"
op1.innerHTML = "name"
const op2 = document.createElement("option")
op2.value = "date"
op1.innerHTML = "date"
st.appendChild(op1)
st.appendChild(op2)

// this func change bitween the search type// 

function readvalue(val) {

   
    const in1 = document.getElementById("in")

    if (val == "name") {

        
        in1.type="text"

    }
    if (val == "date")
    {
        in1.type = "date"

    }

}


// this func gets the search data and send it//
async function testsearch() {

    let inb = document.getElementById("in").value
    const inn = document.getElementById("in")
    let type=""
    if (inn.type == "date") {
         type="date"
    }
    if (inn.type == "text") {
         type = "name"
    }

    


  
    const y1 = `../api/Test/${inb},0,${type}`

    const response = await fetch(y1)

    const repsjson=await response.json()

    if (response.status != 200) {
        alert(`error ${response.status}`)


    }
    if (repsjson.testName == "empty") {

        const div = document.getElementById("div")
        div.replaceChildren()
        const p = document.createElement("p")
        p.textContent = "no test has been found"
        div.style.border = ""
        p.style.fontSize = "40px"
        p.style.margin = "center"
        div.style.textAlign="justify"
        div.appendChild(p)



    }

    else {

        const div = document.getElementById("div")
        div.replaceChildren()
        div.style.position = "relative"
        div.style.backgroundColor = "aquamarine"
        div.style.border="dotted"
        const p1 = document.createElement("p")
        p1.style.marginTop = "30px"
        p1.textContent = `test name : ${repsjson.testName}`
        p1.style.fontSize="25px"
        const br = document.createElement("br")
        const p2 = document.createElement("p")
        p2.style.fontSize = "25px"
        p2.textContent = `test date: ${repsjson.testDate}`
        const p3 = document.createElement("p")
        p3.style.fontSize = "25px"
        p3.textContent = `test start time: ${repsjson.startTime}`
        const p4 = document.createElement("p")
        p4.style.fontSize = "25px"
        let mm = []
        mm = repsjson.totalTime.split(":")
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
        p4.textContent = `Test Total Time: ${yname}  `
        div.appendChild(p1) 
        div.appendChild(p2)
        div.appendChild(p3)
        div.appendChild(p4)


    }




}