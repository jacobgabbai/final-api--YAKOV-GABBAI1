const rr = ""
let di = ""
let qj = []
let aj11 = []
let aa1 = 0
let countsubmit = []
let ch = 0
let start = 0
localStorage.setItem("open", 1)

ht = document.createElement("h3")
ht.style.marginTop="0px"
ht.style.fontSize = "40px"
ht.style.margin = "70px"
ht.style.marginTop="40px"
let hour = 0
let mid = 0
let min = 0
let secunde = 0
let timeout = 0
let checktimer = 0
let fin = 0
let tr = false
let one = 0
let interval=""
const p1a = document.createElement("p")


let bb1 = 0
window.addEventListener("beforeunload", function () { finishtest() })
let kk1 = 0
localStorage.setItem("counter", kk1)
localStorage.setItem("itson", 1)
let aj = []
const div11=document.getElementById("div11")
const div21 = document.getElementById("div21")
const div22= document.getElementById("div22")
const div23 = document.getElementById("div23")
const div24 = document.getElementById("div24")
const div31 = document.getElementById("div31")
const div32 = document.getElementById("div32")
const div222 = document.getElementById("div222")
const div221 = document.getElementById("div221")
const div223 = document.getElementById("div223")

// this func update the question count
function up(b) {
    aa1 = aa1 + 1
    const divData = document.getElementById("div11")
    divData.replaceChildren()
    const cc = localStorage.getItem("answercount")
    const cc1 = b.length - aa1
    const p2 = document.createElement("li")
    p2.style.fontWeight = "bold"
    p2.style.marginLeft="20px"
    const span1 = document.createElement("SPAN")
    span1.style.color = "red"
    span1.style.backgroundColor = "red"
    const pspan = document.getElementById("p")
    span1.textContent = `${pspan}`
    p2.style.fontSize = "25px"
    const p3 = document.createElement("li")
    p3.style.fontWeight = "bold"
    p3.style.marginLeft = "20px"
    p3.style.marginTop="10px"
    p2.style.marginTop="0px"
    p3.style.fontSize = "25px"
    p3.textContent = `${aa1} questions has been answerd you have ${cc1} questions left`
    p2.textContent = `you have a total of ${b.length} questions`
    divData.appendChild(p2)
    divData.appendChild(p3)



}




// this func search for a test
// checking if exist
// looking for questions and answers
// calls the func take test at the end
async function find() {
    const lab = document.getElementById("lab")
    if (interval != "") {
        clearInterval(interval)
    }
    ht.innerHTML = ""
     hour = 0
     mid = 0
     min = 0
     secunde = 0
     timeout = 0
    checktimer = 0
     fin = 0
     tr = false
    one = 0
     start=0
    lab.style.color = "red"
    lab.innerHTML = ""
    aj = []
    qj = []
    const ajson = []
    let teacher = 0
    const testname = document.getElementById("in1").value
    const y1 = `../api/Test/${testname},${teacher},name`
    const res=await fetch(y1)
    if (res.status != 200) {
        div11.replaceChildren()
        div21.replaceChildren()
        div22.replaceChildren()
        div221.replaceChildren()
        div222.replaceChildren()
        div223.replaceChildren()
        div23.replaceChildren()
        div24.replaceChildren()
        div31.replaceChildren()
        div32.replaceChildren()
        const h1 = document.createElement("h1")
        h1.textContent = `Error ${res.status}`
        div22.style.border = ""
        div223.style.textAlign = "center"
        div223.appendChild(h1)
        div22.appendChild(div223)
        return

    }
    if (testname != "") {
       
     

        const rr = await res.json()
        const r1 = rr.id
        di = rr.testName
        secunde = 0
        ht.innerHTML = ""
        if (rr.testName == "empty") {
            div11.replaceChildren()
            div21.replaceChildren()
            div22.replaceChildren()
            div221.replaceChildren()
            div222.replaceChildren()
            div223.replaceChildren()
            div23.replaceChildren()
            div24.replaceChildren()
            div31.replaceChildren()
            div32.replaceChildren()
            const h1 = document.createElement("h1")
            h1.textContent = `No Tests Were Found`
            div22.style.border = ""
            div223.style.textAlign = "center"
            div223.appendChild(h1)
            div22.appendChild(div223)
            return
            
            return
        }

        if (res.status == 200) {
            const ti = rr.totalTime.split(":")
            mid = ti[0]
            min = ti[1]

            min = min - 1

            if (min == -1) {
                min = 0
                start = 1
            }


            const stuname = localStorage.getItem("stuName")
            const stuId = localStorage.getItem("stuId")
            localStorage.clear()
            localStorage.setItem("stuName", stuname)
            localStorage.setItem("stuId", stuId)
            const stn = localStorage.getItem("stuName")
            const yy1 = `../api/TestExControler?sname=${stn}&tname=${rr.testName}`
            const rescheck = await fetch(yy1)
           
            if (rescheck.status != 200) {
                
                    div11.replaceChildren()
                    div21.replaceChildren()
                    div22.replaceChildren()
                    div221.replaceChildren()
                    div222.replaceChildren()
                    div223.replaceChildren()
                    div23.replaceChildren()
                    div24.replaceChildren()
                    div31.replaceChildren()
                    div32.replaceChildren()
                    const h1 = document.createElement("h1")
                    h1.textContent = `Error ${rescheck.status}`
                    div22.style.border = ""
                    div223.style.textAlign = "center"
                    div223.appendChild(h1)
                    div22.appendChild(div223)
                    return

                
            }
            const resjson1 = await rescheck.json()
            if (resjson1 == 0) {
                const resq = await fetch(`../api/Question/${r1}`)
                if (resq.status != 200) {
                    if (res.status != 200) {
                        div11.replaceChildren()
                        div21.replaceChildren()
                        div22.replaceChildren()
                        div221.replaceChildren()
                        div222.replaceChildren()
                        div223.replaceChildren()
                        div23.replaceChildren()
                        div24.replaceChildren()
                        div31.replaceChildren()
                        div32.replaceChildren()
                        const h1 = document.createElement("h1")
                        h1.textContent = `Error ${resq.status}`
                        div22.style.border = ""
                        div223.style.textAlign = "center"
                        div223.appendChild(h1)
                        div22.appendChild(div223)
                        return

                    }
                }
                if (resq.status == 200) {
                    const qid = []
                    let qjr1 = []
                    const qjson = await resq.json()
                    for (let i = 0; i < qjson.length; i++) {
                        qid.push(qjson[i].id)
                        qjr1.push(qjson[i])

                    }
                    let qj22 = []
                    let qj33 = []
                    let checkRandom = 0
                    let tru = true
                    // this if check if random or not 
                    if (rr.random == 1) {


                        for (let z = 0; z < qjson.length; z++) {
                            var qjr = qjr1[Math.floor(Math.random() * (qjr1.length))];
                            qj.push(qjr)
                            for (let x = 0; x <= qjson.length; x++) {
                                if (qjr == qjr1[x]) {
                                    qjr1.splice(x, 1)
                                }

                            }


                        }

                    }
                    else {
                        for (let i = 0; i < qjson.length; i++) {
                            qid.push(qjson[i].id)
                            qj.push(qjson[i])
                        }
                    }
                    for (let ii = 0; ii < qid.length; ii++) {
                        let g = qj22
                        const resa = await fetch(`../api/Answer/${qj[ii].id}`)
                        if (resa.status != 200) {
                            if (res.status != 200) {
                                div11.replaceChildren()
                                div21.replaceChildren()
                                div22.replaceChildren()
                                div221.replaceChildren()
                                div222.replaceChildren()
                                div223.replaceChildren()
                                div23.replaceChildren()
                                div24.replaceChildren()
                                div31.replaceChildren()
                                div32.replaceChildren()
                                const h1 = document.createElement("h1")
                                h1.textContent = `Error ${resa.status}`
                                div22.style.border = ""
                                div223.style.textAlign = "center"
                                div223.appendChild(h1)
                                div22.appendChild(div223)
                                return

                            }
                        }
                        if (resa.status == 200) {
                            const yy = await resa.json()
                            const aj1 = []
                            for (let z = 0; z < yy.length; z++) {
                                ajson.push(yy[z])
                                aj1.push(yy[z])
                            }
                            aj.push(aj1)
                            aj11.push(aj1)
                        }
                    }
                }
                taketest(rr, qj, aj)
            }
            else {
                div11.replaceChildren()
                div21.replaceChildren()
                div22.replaceChildren()
                div221.replaceChildren()
                div222.replaceChildren()
                div223.replaceChildren()
                div23.replaceChildren()
                div24.replaceChildren()
                div31.replaceChildren()
                div32.replaceChildren()
                const h1 = document.createElement("h1")
                h1.textContent = `This Test Already Been Done`
                div22.style.border = ""
                div223.style.textAlign = "center"
                div223.appendChild(h1)
                div22.appendChild(div223)
                
                return
            }
        }

    }
    else {
        const lab = document.getElementById("lab")
        lab.style.color = "red"
        lab.innerHTML = "No Data Has Been Enterd"
        return

    }

}

// timer function
function timer() {


    if (fin == 0) {

        let zero = ""
        let zeromin = ""
        if (secunde < 10) {
            zero = 0
        }

        if (min < 10 && min >= 0) {
            zeromin = "0"
        }


        ht.innerHTML = `Time Left ${mid}:${zeromin}${min}:${zero}${secunde}`

        if (one == 0 && start == 0) { tr = true }
        if (one == 1 && start == 1) { tr = true }

        if (checktimer == 0 && tr) {
            secunde = 59
        }



        if (secunde != 0) {
            secunde--
        }


        checktimer = 1



        if (secunde == 0 && tr) {

            if (min == 0 && ch == 0) {
                secunde = 59
                min = 0
                ch = 1
            }
            else {
                if (mid != 0 && min == 0) { min = 60; mid = mid - 1; }
                ch == 0


            }
            if (min != 0) {
                secunde = 59; min = min - 1
            }

        }
        if (min == 0 && ch == 1) {


            if (mid != 0) { min = 59; mid = mid - 1; }
            ch == 0
        }
        start = 1
        one = 1

        if (mid == 0 && secunde == 0 && min == 0) {
            ht.innerHTML = `Time Left ${mid}:${zeromin}${min}:${zero}${secunde}`
            timeout = 1
            fin = 1
            alert("You Have Run Out Of Time")
            subTest(aj11, qj)
            return
        }
    }
}


//this func upload the test to the screen checkes if set to same date and start the test if yes
function taketest(a, b, c) {
    div11.replaceChildren()
    div21.replaceChildren()
    div22.replaceChildren()
    div23.replaceChildren()
    div24.replaceChildren()
    div31.replaceChildren()
    div32.replaceChildren()
    div221.replaceChildren()
    div222.replaceChildren()
    div22.style.border="black"
    const stuname = localStorage.getItem("stuName")
    const stuId = localStorage.getItem("stuId")
    localStorage.clear()
    kk1 = 0
    localStorage.setItem("counter", kk1)
    localStorage.setItem("itson", 1)
    localStorage.setItem("stuName", stuname)
    localStorage.setItem("stuId", stuId)
    for (let z = 0; z < b.length; z++) {
        let answercount = 0
        localStorage.setItem(`answercount${z}`, answercount)
    }
    let kk = localStorage.getItem("counter")
    const date = a.testDate.split("-")
    const t = a.startTime.split(":")
    let tt = date[1] - 1
    let tt2 = parseInt(t[0])
    let tt3 = parseInt(t[1])
    let tt1 = parseInt(t[1]) + 50
    if (tt1 > 59) {
        tt2 = tt2 + 1
        tt3 = tt1 - 60
    }
    else { tt3 = tt1 }
    let ts = `${tt3}`
    let ts1 = `${tt2}`
    const mydate = new Date(date[0], tt, date[2], t[0], t[1])
    const mydate1 = new Date(date[0], tt, date[2], ts1, ts)
    const d = new Date()
    if (mydate <= d && d <= mydate1) {
        var countDownDate = new Date(mydate).getTime();
        interval= setInterval(timer, 1000)
        const div21 = document.getElementById("div21")
        div21.replaceChildren()
        const h1 = document.createElement("h1")
        h1.textContent = `test: ${a.testName}`
        h1.style.marginTop="0px"
        h1.style.marginLeft = "35%"
        const h2 = document.createElement("h2")
        h2.textContent = `you have hours`
        h2.style.marginLeft = "35%"
        div21.appendChild(h1)
        const divTimer = document.getElementById("div32")
        const divData = document.getElementById("div11")
        divTimer.appendChild(ht)
        div22.replaceChildren()
        const br = document.createElement("br")
        const p = document.createElement("li")
        
        const p2 = document.createElement("li")
        p2.style.fontWeight = "bold"
        p2.style.fontSize = "25px"
        const p3 = document.createElement("li")
        p3.style.fontWeight = "bold"
        p3.style.fontSize = "25px"
        p3.style.marginLeft = "20px"
        p3.style.marginTop="10px"
        const cc = localStorage.getItem("answercount")
        const cc1 = b.length - parseInt(cc)
        if (cc != null) {
            p3.textContent = `${cc} questions has been answerd you have ${cc1} questions left`
        }
        if (cc == null) {
            p3.textContent = `${aa1} questions has been answerd you have ${c.length} questions left`
        }
        p2.style.marginLeft="20px"
        p2.textContent = `you have a total of ${b.length} questions`
        p2.style.marginTop="0px"
        p2.style.fontWeight = "bold"
        p1a.textContent = "question 1"
        p1a.style.fontSize = "25px"
        p1a.style.marginLeft = "35%"
        p1a.style.fontWeight = "bold"
        p1a.style.marginTop="0px"
        divData.appendChild(p2)
        divData.appendChild(br)
        p3.style.marginRight="50px"
        divData.appendChild(p3)
      p1a.style.marginBottom="0px"
        div21.appendChild(p1a)
        let ps = b[0].questions
        let ps1 = ps.split("/?/")
        p.textContent = b[0].questions
        p.style.marginLeft="20px"
        const out = document.createElement("output")
        const divo = document.createElement("div")
        divo.style.display = "flex"
        divo.style.height = "100px"
        divo.style.marginLeft="10px"
        let gg = b[0].picture
        if (gg != "") {
            divo.innerHTML = `<img src="${gg}"/>`
            out.appendChild(divo)
            div221.appendChild(out)
        }
        div223.style.width = "100%"
        div223.style.height = "50px"
        div223.style.marginLeft = "0px"
        div223.style.backgroundColor = "azure"
        div223.textContent=""
        div222.style.height = "150px"
        div222.style.width = "50%"
        div222.style.float = "left"
        div222.style.backgroundColor = "azure"
        div221.style.height = "150px"
        div221.style.width = "50%"
        div221.style.float = "left"
        div221.style.backgroundColor = "azure"
        div22.appendChild(div223)
        div22.appendChild(div221)
        div22.appendChild(div222)
       

        if (gg == "") {
            div221.appendChild(p)
        }
       
        for (let k = 0; k < c[0].length; k++) {
            const int6 = document.createElement("input")
            const br = document.createElement("br")
            int6.type = "radio"
            int6.name = "l"
            int6.id = `idr${k}`
            int6.value = `${c[0][k].answer1}+${c[0][k].rightWorng}`
            const leb = document.createElement("label")
            leb.innerHTML = `${c[0][k].answer1}`
            const divs1 = document.createElement("div")
            divs1.id = `divs${k}`
            const divme = document.getElementById(`divs${k}`)
            const inme = document.getElementById(`idr${k}`)
            div222.appendChild(int6)
            div222.appendChild(leb)
            div222.appendChild(br)
            div222.appendChild( br)
        }

        div23.appendChild(br)
        div23.appendChild(br)
        const btn1 = document.createElement("button")
        btn1.id = "btn11"
        btn1.innerHTML = "back"
        btn1.style.backgroundColor = "black"
        btn1.style.width="45%"
        btn1.style.color = "white"
        btn1.style.margin = "10px"
        btn1.style.borderRadius = "10px"
        btn1.style.marginLeft="10px"
        btn1.style.cursor = "pointer"
        const btn2 = document.createElement("button")
        btn2.id = "btn22"
        btn2.innerHTML = "next"
        btn2.style.backgroundColor = "black"
        btn2.style.marginLeft = "0px"
        btn2.style.margin = "10px"
        btn2.style.color = "white"
        btn2.style.borderRadius = "10px"
        btn2.style.cursor = "pointer"
        btn2.style.width = "45%"
        btn2.addEventListener("click", function () { next1(kk,a, c, b) })
        btn1.addEventListener("click", function () { back1(a,c, b) })
        const btns = document.createElement("button")
        btns.id = "btnsi"
        btns.style.margin = "10px"
        btns.innerHTML = "Submit Question"
        btns.style.backgroundColor = "green"
        btns.style.color = "white"
        btns.style.borderRadius = "10px"
        btns.style.marginTop = "20px"
        btns.style.cursor="pointer"
        const ul1 = document.createElement("ul")
        ul1.id = "ul1"
        const ul2 = document.createElement("ul")
        ul2.id = "ul2"
        const btnt = document.createElement("button")
        btnt.innerHTML = "submit test"
        btnt.id = "btnt"
        btnt.style.width = "95%"
        btnt.style.height="30px"
        btnt.style.backgroundColor = "azure"
        btnt.style.marginLeft = "10px"
        btnt.style.cursor = "pointer"
        btnt.style.backgroundColor = "green"
        btnt.style.color = "white"
        btnt.style.borderRadius = "10px"
        div23.appendChild(btn1)
        div23.appendChild(btn2)
        div222.appendChild(btns)
        div23.appendChild(br)
        div23.appendChild(br)
        div23.appendChild(btnt)
        const yt = document.getElementById("btnsi").addEventListener("click", function () { submit(c, b) })
        const ytt = document.getElementById("btnt").addEventListener("click", function () { subTest(c, b) })
    }
    else {
        div11.replaceChildren()
        div21.replaceChildren()
        div22.replaceChildren()
        div221.replaceChildren()
        div222.replaceChildren()
        div223.replaceChildren()
        div23.replaceChildren()
        div24.replaceChildren()
        div31.replaceChildren()
        div32.replaceChildren()
        const h1 = document.createElement("h1")
        h1.textContent = `${a.testName} test is on the ${a.testDate} start at ${a.startTime}`
        div22.style.border = ""
        div223.style.textAlign = "center"
        div223.appendChild(h1)
        div22.appendChild(div223)

        return
    }
}

// this func upload the question and answers to the local storag
function submit(c, b) {
    const divAlert = document.getElementById("div223")
    const kk = localStorage.getItem("counter")
    const ift = countsubmit.find((el) => el == kk)
    const radioButtons = document.querySelectorAll('input[name="l"]')
    let counta = 0
    for (let o1 = 0; o1 < c[kk].length; o1++) {
        if (radioButtons[o1].checked) {
            counta = counta + 1
            break
        }
    }
    if (counta == 0) {
        
        divAlert.replaceChildren()
        const hAlert = document.createElement("h1")
        hAlert.style.marginTop="0px"
        hAlert.textContent = "no question has been choosen"
        hAlert.style.color = "red"
        divAlert.style.textAlign = "center"
        divAlert.appendChild(hAlert)
        return
    }
    else {
 
        divAlert.replaceChildren()
    }
    const cn = localStorage.getItem(`answercount${kk}`)
    if (cn == "0") {
        localStorage.setItem(`answercount${kk}`, 1)
    }
    for (let o = 0; o < c[kk].length; o++) {
        const radioButtons = document.querySelectorAll('input[name="l"]')
        h = document.getElementById(`idr${o}`).value
        if (radioButtons[o].checked) {


            for (let oo = 0; oo < c[kk].length; oo++) {
                localStorage.removeItem(`chooseanswer${kk}${oo}`)
            }
            localStorage.setItem(`chooseanswer${kk}${o}`, h)
        }

        const g = h.split("+")
        if (g[1] == 1) {
            localStorage.removeItem(`rightanswer${kk}${o}`)
            localStorage.setItem(`rightanswer${kk}${o}`, h)

        }
    }
    divAlert.replaceChildren()
    const hAlert = document.createElement("h1")
    hAlert.style.marginTop = "0px"
    hAlert.textContent = "checked"
    hAlert.style.color = "red"
    divAlert.style.textAlign = "center"
    divAlert.style.backgroundColor="azure"
    divAlert.appendChild(hAlert)
   
    
    setTimeout(() => divAlert.removeChild(hAlert), 1000)
    

    if (ift === undefined) {
        countsubmit.push(kk)
        up(b)
    }


}


// this func moves to the next question
function next1(kkk,a, c, b) {
  
    let h = ''
    let kk = parseInt(localStorage.getItem("counter"))
    let op = b.length
    if (b.length > kk + 1) {
        div221.replaceChildren()
        div222.replaceChildren()
        div21.replaceChildren()
        const h1 = document.createElement("h1")
        h1.textContent = `test: ${a.testName}`
        h1.style.marginTop = "0px"
        h1.style.marginLeft = "35%"
        const h2 = document.createElement("h2")
        h2.textContent = `you have hours`
        h2.style.marginLeft = "35%"
        div21.appendChild(h1)
        let ci = ''
        const ra = localStorage.getItem(`answercount${kk + 1}`)
        if (ra == "1") {

            for (let i = 0; i < b.length; i++) {

                for (let ii = 0; ii < c[kk].length; ii++) {

                    const rq = localStorage.getItem(`chooseanswer${i}${ii}`)

                    if (rq != null) {
                        ci = ii

                       /* document.getElementById(`idr${ii}`).checked = true*/
                    }
                }


            }


        }
        div221.replaceChildren()
        div222.replaceChildren()
        const p2 = document.createElement("li")
        p2.style.marginLeft="20px"
        const p3 = document.createElement("li")
        p3.style.marginLeft = "20px"
        p3.style.marginTop="10px"
        let countersub = 0
        let cn = ''
        for (let zz = 0; zz < b.length; zz++) {
            cn = localStorage.getItem(`answercount${zz}`)
            if (cn == "1") { countersub = countersub + 1 }
        }

        const cc1 = b.length - countersub
        p3.textContent = `${bb1} questions has been answerd you have ${cc1} questions left`
        p2.textContent = `you have a total of ${b.length} questions`
        const p1 = document.createElement("p")
        p1.textContent = `question ${kk + 2}`
        p1.style.fontWeight = "bold"
        p1.style.fontSize = "25px"
        p1.style.marginLeft = "35%"
        p1.style.marginTop="0px"
        div21.appendChild(p1)
        const p = document.createElement("li")
        const out = document.createElement("output")
        out.style.height = "100px"
        const divo = document.createElement("div")
          divo.style.display = "flex"
          divo.style.marginLeft="10px"
        divo.style.height = "100px"
        let gg = b[kk + 1].picture
        if (gg != "") {
            div2.style.height = "250px"
            divo.innerHTML = `<img src="${gg}"/>`
            out.appendChild(divo)
            div221.appendChild(out)
        }
        p.textContent = b[kk + 1].questions
        p.style.marginLeft="20px"
        if (gg == "") {
            div221.appendChild(p)
        }
        let count = parseInt(localStorage.getItem("counter"))
        count = count + 1
        localStorage.setItem("counter", count)
        if (kk + 1 < qj.length) {
            for (let k = 0; k < c[kk + 1].length; k++) {
                const int6 = document.createElement("input")
                int6.type = "radio"
                int6.name = "l"
                int6.id = `idr${k}`
                int6.value = `${c[kk + 1][k].answer1}+${c[kk + 1][k].rightWorng}`
                const leb = document.createElement("label")
                leb.innerHTML = `${c[kk + 1][k].answer1}`
                const ra = localStorage.getItem(`answercount${kk + 1}`)
                if (k == ci && ra == 1) {
                    int6.checked = true
                }
                const divs1 = document.createElement("div")
                divs1.id = `divs${k}`
                const divme = document.getElementById(`divs${k}`)
                const inme = document.getElementById(`idr${k}`)
                divs1.appendChild(int6)
                divs1.appendChild(leb)
                div222.appendChild(divs1)

            }
         


        }
        const btns1 = document.createElement("button")
        btns1.id = "btnsi1"
        btns1.style.margin = "10px"
        btns1.innerHTML = "Submit Question"
        btns1.style.backgroundColor = "green"
        btns1.style.color = "white"
        btns1.style.borderRadius = "10px"
        btns1.style.marginTop = "20px"
        btns1.style.cursor = "pointer"
        div222.appendChild(btns1)
        const yt = document.getElementById("btnsi1").addEventListener("click", function () { submit(c, b) })

        div22.appendChild(div221)
        div22.appendChild(div222)
    }


}

// this func moves to the previos question
function back1(a,c, b) {
  
    let h = ''
    let kk = parseInt(localStorage.getItem("counter"))
    if (0 < kk) {
        div221.replaceChildren()
        div222.replaceChildren()
        div21.replaceChildren()
        const h1 = document.createElement("h1")
        h1.textContent = `test: ${a.testName}`
        h1.style.marginTop = "0px"
        h1.style.marginLeft = "35%"
        div21.appendChild(h1)
        kk = kk - 1
        const ra = localStorage.getItem(`answercount${kk}`)
        let rq = ''
        let ci = ""
        if (ra == "1") {
            for (let ii = 0; ii < c[kk].length; ii++) {
                rq = localStorage.getItem(`chooseanswer${kk}${ii}`)
                if (rq != null) {
                    ci = ii
                   /* document.getElementById(`idr${ii}`).checked = true*/
                    break
                }
            }
        }

        const p2 = document.createElement("li")
        const p3 = document.createElement("li")
        p2.style.marginLeft = "20px"
        p3.style.marginLeft = "20px"
        p3.style.marginTop="10px"
        let countersub = 0
        let countersub1 = 0
        let cn = ''
        for (let zz = 0; zz < b.length; zz++) {

            cn = localStorage.getItem(`answercount${zz}`)
            if (cn == "1") {
                countersub1 = countersub1 + 1


            }
        }
        const cc1 = b.length - countersub1
        p3.textContent = `${bb1} questions has been answerd you have ${cc1} questions left`
        p2.textContent = `you have a total of ${b.length} questions`
        const p1 = document.createElement("p")
        p1.textContent = `question ${kk + 1}`
        p1.style.fontWeight = "bold"
        p1.style.fontSize = "25px"
        p1.style.marginLeft = "35%"
        p1.style.marginTop = "0px"
        div21.appendChild(p1)
        const out = document.createElement("output")
        out.style.height = "100px"
        const divo = document.createElement("div")
        divo.style.display = "flex"
        divo.style.marginLeft = "10px"
        divo.style.height = "100px"
        let gg = b[kk].picture
        if (gg != "") {
            div2.style.height = "250px"
            divo.innerHTML = `<img src="${gg}"/>`
            out.appendChild(divo)
            div221.appendChild(out)
        }
        const br = document.createElement("br")
        const p = document.createElement("li")
        if (gg == "") {
            p.textContent = b[kk].questions
            div221.appendChild(p)
        }
        for (let k = 0; k < c[kk].length; k++) {
            const int6 = document.createElement("input")
            int6.type = "radio"
            int6.name = "l"
            int6.id = `idr${k}`
            int6.value = `${c[kk][k].answer1}+${c[kk][k].rightWorng}`
            const leb = document.createElement("label")
            const ra = localStorage.getItem(`answercount${kk}`)
            leb.innerHTML = `${c[kk][k].answer1}`
            if (k == ci && ra == 1) {
                int6.checked = true
            }
            const divs1 = document.createElement("div")
            divs1.id = `divs${k}`
            const divme = document.getElementById(`divs${k}`)
            const inme = document.getElementById(`idr${k}`)
            divs1.appendChild(int6)
            divs1.appendChild(leb)
            div222.appendChild(divs1)

        }

        let count = parseInt(localStorage.getItem("counter"))
        count = count - 1
        localStorage.setItem("counter", count)
        const btns1 = document.createElement("button")
        btns1.id = "btnsi1"
        btns1.style.margin = "10px"
        btns1.innerHTML = "Submit Question"
        btns1.style.backgroundColor = "green"
        btns1.style.color = "white"
        btns1.style.borderRadius = "10px"
        btns1.style.marginTop = "20px"
        btns1.style.cursor = "pointer"
        div222.appendChild(btns1)
        const yt = document.getElementById("btnsi1").addEventListener("click", function () { submit(c, b) })

    }
   
}

// this func uploads the test data to the surver
let countA=0
async function subTest(c, b) {

    let countq0 = []
    for (let qq = 0; qq < b.length; qq++) {
        const loo = localStorage.getItem(`answercount${qq}`)
        if (loo == 0) {
        countA++
        }

    }
 
    for (let qq = 0; qq < b.length; qq++) {
        const lo = localStorage.getItem(`answercount${qq}`)
        if (lo == "0" && timeout == 0) {
           
            div223.replaceChildren()

            const h1 = document.createElement("h1")
            h1.textContent = `question ${ qq + 1 } has not been answered`
 
            div223.style.textAlign = "center"
            div223.appendChild(h1)

            setTimeout(() => { div223.removeChild(h1) },3000 )

            return
        }
        if (lo == 0 && timeout == 1) {
            localStorage.setItem(`chooseanswer${qq}0`, "missed question")
            localStorage.setItem(`rightanswer${qq}0`, ``)
        }
    }

    let answerc = b.length
    let c1 = 0
    let c2 = 0
    let quest = []
    let ria = []
    let woa = []
    let ra = ''
    let ca = ''
    for (let i = 0; i < b.length; i++) {
        for (let ii = 0; ii < c[i].length; ii++) {
            ca = localStorage.getItem(`chooseanswer${i}${ii}`)
            if (ca != null) {
                c1 = ii
            }
            ra = localStorage.getItem(`rightanswer${i}${ii}`)
            if (ra != null) {
                c2 = ii
            }
        }
        if (localStorage.getItem(`chooseanswer${i}${0}`) == "missed question") {
            quest.push(b[i])
            ria.push(localStorage.getItem(`rightanswer${i}${0}`))
            woa.push(localStorage.getItem(`chooseanswer${i}${0}`))
            answerc -= 1
        }
        else if (localStorage.getItem(`rightanswer${i}${c2}`) == localStorage.getItem(`chooseanswer${i}${c1}`)) {
            let ytyt = 0
        }

        else {
            quest.push(b[i])
            ria.push(localStorage.getItem(`rightanswer${i}${c2}`))
            woa.push(localStorage.getItem(`chooseanswer${i}${c1}`))
            answerc -= 1
        }


    }
    let cu = b.length
    let grade = ((100 / cu) * answerc).toString()
    let r = di
    const name = localStorage.getItem("stuName")
    const id = localStorage.getItem("stuId")
    const n1 = { testName: r, stuName: name, stuId: id, grade: grade }
    const y11 = 'https://localhost:7038/api/TestEx'
    const y112 = 'https://top-school.azurewebsites.net/../api/TestExControler'
    const response = await fetch(y112, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n1) })
    
    let ca1 = 0
    if (response.status == 200) {
        const r1 = await response.json()
        let rm = 0
        if (quest.length > 0) {
            for (let rl = 0; rl < quest.length; rl++) {
                let PQ = quest[rl].questions
                if (PQ == "") {
                    PQ=quest[rl].picture
                }
                const n11 = { testEx1IdRef: r1.id, questions: PQ }
                const y12 = 'https://top-school.azurewebsites.net/../api/QuesEx'
                const response1 = await fetch(y12, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n11) })
                if (response1.status == 200) {
                    const r21 = await response1.json()
                    const n12 = { questionEx1IdRef: r21.id, RightAnswer: ria[rl], WorngAnswer: woa[rl] }
                    const y3 = 'https://top-school.azurewebsites.net/../api/AnswerEx'
                    const response3 = await fetch(y3, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n12) })
                    if (response3.status == 200) {
                        ca1 = ca1 + 1
                    }
                    if (ca1 == quest.length) {
                        div11.replaceChildren()
                        div21.replaceChildren()
                        div22.replaceChildren()
                        div221.replaceChildren()
                        div222.replaceChildren()
                        div223.replaceChildren()
                        div23.replaceChildren()
                        div24.replaceChildren()
                        div31.replaceChildren()
                        div32.replaceChildren()
                        const h1 = document.createElement("h1")
                        h1.textContent = `Test Load Succefully`
                        div22.style.border = ""
                        div223.style.textAlign = "center"
                        div223.appendChild(h1)
                        div22.appendChild(div223)
                        setTimeout(finishtest,3000)

                    }
                    if (response3.status != 200)

                    {
                        div11.replaceChildren()
                        div21.replaceChildren()
                        div22.replaceChildren()
                        div221.replaceChildren()
                        div222.replaceChildren()
                        div223.replaceChildren()
                        div23.replaceChildren()
                        div24.replaceChildren()
                        div31.replaceChildren()
                        div32.replaceChildren()
                        const h1 = document.createElement("h1")
                        h1.textContent = `Error ${response3.status}`
                        div22.style.border = ""
                        div223.style.textAlign = "center"
                        div223.appendChild(h1)
                        div22.appendChild(div223)

                    }
                }
                else {
                    div11.replaceChildren()
                    div21.replaceChildren()
                    div22.replaceChildren()
                    div221.replaceChildren()
                    div222.replaceChildren()
                    div223.replaceChildren()
                    div23.replaceChildren()
                    div24.replaceChildren()
                    div31.replaceChildren()
                    div32.replaceChildren()
                    const h1 = document.createElement("h1")
                    h1.textContent = `Error ${response1.status}`
                    div22.style.border = ""
                    div223.style.textAlign = "center"
                    div223.appendChild(h1)
                    div22.appendChild(div223)
                    
                }
            }
        }
        else {
            div11.replaceChildren()
            div21.replaceChildren()
            div22.replaceChildren()
            div221.replaceChildren()
            div222.replaceChildren()
            div223.replaceChildren()
            div23.replaceChildren()
            div24.replaceChildren()
            div31.replaceChildren()
            div32.replaceChildren()
            const h1 = document.createElement("h1")
            h1.textContent = `Test Load Succefully`
            div22.style.border = ""
            div223.style.textAlign = "center"
            div223.appendChild(h1)
            div22.appendChild(div223)
            setTimeout(finishtest, 3000)
        }
    }
    else {
        div11.replaceChildren()
        div21.replaceChildren()
        div22.replaceChildren()
        div221.replaceChildren()
        div222.replaceChildren()
        div223.replaceChildren()
        div23.replaceChildren()
        div24.replaceChildren()
        div31.replaceChildren()
        div32.replaceChildren()
        const h1 = document.createElement("h1")
        h1.textContent = `Error ${response.status}`
        div22.style.border=""
        div223.style.textAlign="center"
        div223.appendChild(h1)
        div22.appendChild(div223)
     
    }
}
 //this func active after the test is finished and close the window
function finishtest() {
    const stuname = localStorage.getItem("stuName")
    const stuId = localStorage.getItem("stuId")
    localStorage.clear()
    localStorage.setItem("stuName", stuname)
    localStorage.setItem("stuId", stuId)
    window.close("https://top-school.azurewebsites.net/StudentHtml/Taketest4.html")

}