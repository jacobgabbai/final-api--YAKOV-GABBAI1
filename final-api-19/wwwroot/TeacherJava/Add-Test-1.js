const a = addEventListener("load", get)
localStorage.setItem("open", 1)
const div = document.getElementById("divid1")
const h1 = document.getElementById("pdiv2")
const h = document.getElementById("pdiv1")
const divError1=document.getElementById("divError")
divError1.innerHTML = ""
window.addEventListener("beforeunload", function () { unload() })

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


function unload() {
    const tn = localStorage.getItem("TeacherName")
    const ti = localStorage.getItem("TeacherIdRef")
    localStorage.clear()
    localStorage.setItem("TeacherName", tn)
    localStorage.setItem("TeacherIdRef", ti)

}




let Questionnumbre = 0
let countquestion = 0
let p = true
let on1 = false
let on2 = false
let f = ""
let ClearIndex=0


async function get() {

    const aa = await fetch(`../api/TEST`)
    const aaa = await aa.json();
    let b = aaa.length
    let bb = b + 1
    localStorage.setItem("TestIdRef", bb)
    const xx = await fetch(`../api/Question`)
    const xxx = await xx.json();
    let y = xxx.length
    let yy = y + 1
    Questionnumbre = yy
    localStorage.setItem("QuestionIdRef", yy)

}






let testdatavalid = 0
let checkError = 0
let runSaveTest = 0
//SaveTest func is Uploading the inputs for the test data procces them and calls for the questions
// buttos in case the data is valid

async function SaveTest() {

    er("")
    runSaveTest=1
    let Catch = 0
    const t1 = document.getElementById("in1").value
    const y1 = localStorage.getItem("TestName")
    if (y1 != "") {
        localStorage.removeItem("TestName")
    }
    if (t1 == "") {
        Catch = 1
        const lab1 = document.getElementById("lab1")
        lab1.style.color = "red"
        lab1.innerHTML = "* Must Fild"
        return
    }
    const t2 = document.getElementById("in2").value
    const y2 = localStorage.getItem("TestDate")
    if (y2 != "") {
        localStorage.removeItem("TestDate")

    }
    if (t2 == "") {
        const lab2 = document.getElementById("lab2")
        lab2.style.color = "red"
        lab2.innerHTML = "* Must Fild"
        return
        Catch = 1
    }
    let t33 = document.getElementById("in33").value
    let t31 = document.getElementById("in3").value
    if (t33 == "" || t31 == "") {
        const lab3 = document.getElementById("lab3")
        lab3.style.color = "red"
        lab3.innerHTML = "* Must Fild"
        return
        Catch = 1
    }
     t33 =parseInt( document.getElementById("in33").value)
     t31 =parseInt( document.getElementById("in3").value)
    const t3 = `${t31}:${t33}`
    const y3 = localStorage.getItem("TotalTime")
    if (y3 != "") {
        localStorage.removeItem("TotalTime")
    }
    const t4 = document.getElementById("in4").value
    const y4 = localStorage.getItem("StartTime")
    if (y4 != "") {
        localStorage.removeItem("StartTime")
    }
    if (t4 == "") {
        const lab4 = document.getElementById("lab4")
        lab4.style.color = "red"
        lab4.innerHTML = "* Must Fild"
        return
        Catch = 1
    }
    let t5 = document.getElementById("in5").value
    let t555=1
    if (t5 == "yes") { t555 = 1 }
    else {t555=0 }
    const y5 = localStorage.getItem("Random")
    if (y5 != "") {
        localStorage.removeItem("Random")
    }
    if (t5 == "") {
        Catch = 1
    }
    let tid = localStorage.getItem("TeacherIdRef")
    let tiddd=0
    tiddd=parseInt(tid)
    const ob = { testName: t1, testDate: t2, startTime:t4,totalTime:t3,random:t5,teacherIdRef:tid }
    const yf = `../api/Test?TestName=${t1}&TestDate=${t2}&StartTime=${t4}&TotalTime=${t3}&Random=${t555}&TeacherIdRef=${tiddd}`
    const response = await fetch(yf)
    if (response.status == 200) {

        const repsjson = await response.json()
        if (repsjson == 0) {
            if (Catch == 0) {
                localStorage.setItem("TestName", t1)
                localStorage.setItem("TestDate", t2)
                localStorage.setItem("TotalTime", t3)
                localStorage.setItem("StartTime", t4)
                localStorage.setItem("Random", t5)
             
                document.getElementById("in1").value = null
                document.getElementById("in2").value = null
                document.getElementById("in3").value = null
                document.getElementById("in4").value = null
                document.getElementById("in5").value = null
                testdatavalid = 1

                const div = document.getElementById("divid1")
                div.style.float="left"
              
                div.replaceChildren()
                div.style.height = "500px"
                div.style.width = "50%"
                div.style.marginLeft = "0px"
                div.style.backgroundColor = "azure"
                const h2 = document.createElement("h2")
                h2.textContent = "add question"
                div.appendChild(h2)

                const uu = document.createElement("div")
                uu.style.marginLeft = "10px"
                uu.style.width = "150px"
                uu.style.height = "20px"
                uu.style.marginTop = "20px"            
                uu.textContent = "picture question "
                uu.style.fontSize = "20px"
                uu.style.cursor = "pointer"
                uu.id = "uu"
               
                div.appendChild(uu)
                const uur = document.createElement("div")
                uur.style.marginLeft = "170px"
                uur.style.width = "150px"
                uur.style.height = "20px"
                uur.style.marginTop = "-20px"
                uur.style.fontSize = "20px"
                uur.id = "uur"             
                uur.textContent = "text question"
                uur.style.cursor = "pointer"
                
                div.appendChild(uur)
                
                const btn1 = document.createElement("div")
                btn1.textContent = "text question"               
                btn1.style.marginTop = "20px"
                const btn2 = document.createElement("ul")
                btn2.textContent = "picture question"              
                uu.addEventListener("click", function () { pic() })
                uur.addEventListener("click", function () { que() })
            }
            else { alert("one or more empty box") }
        }
        if(repsjson==1) {
            er(`You Already Have That Test Name On That Date`)
            return
        }
        if (repsjson == 2) {
            er(`You Already Have A Test On That Day Please Choose Different Date`)
            return
        }
    }
    else {
        er(` Error ${response.status}`)
        
        return
    }
}

/// er is a func for creating an response for errors in the surver or 
/// inject alrets to the div
function er(r) {
    
    if (checkError == 0 && runSaveTest == 1) {        
        if (divError1.innerHTML!=r) {
            divError1.replaceChildren()
        }
       
        const hdiv=document.createElement("h1")
        hdiv.innerHTML=r        

        divError1.appendChild(hdiv)
      
        
    }
   
}

///the func upload the inputs for a picture question

function pic() {
 
    clear1()
    clear2()
    ClearIndex=1
    const sv = document.getElementById("savetest")
    if (sv != null) {
        sv.remove()
    }

    if (on1 == false) {

        if (h1 != null) {
            h1.remove()
        }
        const pdiv = document.createElement("div")
        pdiv.id = "pdiv1"
        pdiv.style.marginTop = "10px"
        const pic = document.createElement("input")
        pic.type = "file"
        pic.value = ""
        pic.id = "files"
        pic.style.backgroundColor = "azure"
        pic.style.color="azure"
        pic.accept = "img/jpg, img/jpeg"       
        const leb = document.createElement("LABEL")
        leb.id="lebid"
        leb.style.color="red"
        leb.setAttribute("for", "files")
     const   br1=document.createElement("br")
        pdiv.appendChild(leb)
        pdiv.appendChild(br1)
        pdiv.appendChild(pic)     
       pic.addEventListener("change", (e) => {

            const files = e.target.files
           var filename = files[0].name;
           var extension = filename.substr(filename.lastIndexOf("."))
           var allowedExtensionsRegx = /(\.jpg|\.jpeg)$/i;
           var isAllowed = allowedExtensionsRegx.test(extension);
           if (!isAllowed) {
               leb.innerHTML = "please enter .jpg /.jpeg files"
               pic.value = ""
               return
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
            const p2 = document.createElement("p")
            p2.textContent = "please enter an answer"
            p2.id=`p2${i}`
            const in3 = document.createElement("input")
            in3.type = "text"
            in3.id = `ina${i}`
            in3.textContent = "enter a question"
            pdiv.appendChild(p2)
            pdiv.appendChild(in3)

        }
        const p3 = document.createElement("p")
        p3.textContent = "choose the right answer"
        p3.id="p3Answer"
        const in4 = document.createElement("input")
        in4.type = "number"
        in4.max = "4"
        in4.min = "1"
        in4.id="index"
        in4.textContent = "choose the right answer"
        pdiv.appendChild(p3)
        pdiv.appendChild(in4)
        const btns = document.createElement("button")
        btns.id = "btns"
        btns.style.borderRadius = "10px"
        btns.style.color = "white"
        btns.style.backgroundColor = "black"
        btns.style.cursor = "pointer"
        
        btns.innerHTML = "save question"
        let r=1
        btns.addEventListener("click", function () {gg(r) })
        const btnt = document.createElement("button")
        btnt.id = "btnt"
        btnt.style.backgroundColor="azure"
        btnt.innerHTML = "save Test"
        btnt.addEventListener("click", function () { ff() })
        const br = document.createElement("br")
        const uld = document.createElement("ul")      
        uld.appendChild(br)
       uld.appendChild(btns)
        uld.appendChild(br.cloneNode())
        uld.appendChild(br)
        pdiv.appendChild(uld)
       div.style.height="600px"
        div.appendChild(pdiv)
        SaveT(ClearIndex)
        on2 = false
        on1 = true
    }
}
// que fun is uploading the questios inputs
function que() {
    clear1()
    clear2()
    ClearIndex=1
    const sv = document.getElementById("savetest")
    if (sv != null) {
        sv.remove()
    }
    if (on2 == false) {

        if (h != null) {
            h.remove()
        }
        const pdiv = document.createElement("div")
        pdiv.id = "pdiv2"
        pdiv.style.marginTop = "10px"
        const in1 = document.createElement("textarea")
        in1.type = "text"
        in1.id = "in1"
        in1.value = ""
        in1.textContent = "enter question"
        const p1 = document.createElement("p")
        p1.textContent = "please enter a quetion"
        p1.id = "p1id"
        pdiv.appendChild(p1)
        pdiv.appendChild(in1)
        for (let i = 0; i < 4; i++) {
            const p2 = document.createElement("p")
            p2.textContent = "please enter an answer"
            p2.id = `p2${i}`
            const in3 = document.createElement("input")
            in3.type = "text"
            in3.value = ""
            in3.id = `ina${i}`
            in3.textContent = "enter a question"
            pdiv.appendChild(p2)
            pdiv.appendChild(in3)

        }
        const p312 = document.createElement("p")
        p312.textContent = "choose the right answer"
        p312.id = "p312"
        const in4 = document.createElement("input")
        in4.type = "number"
        in4.max = "4"
        in4.min = "1"
        in4.id = "index"
        in4.value = ""
        in4.textContent = "choose the right answer"
        pdiv.appendChild(p312)
        pdiv.appendChild(in4)
        const btns = document.createElement("button")
        btns.id = "btns"
        btns.style.backgroundColor = "azure"
        btns.style.borderRadius = "10px"
        btns.style.color = "white"
        btns.style.backgroundColor = "black"
        btns.style.cursor = "pointer"
        btns.innerHTML = "save question"
        let rr = 0
        btns.addEventListener("click", function () { gg(rr) })
        const btnt = document.createElement("button")
        btnt.id = "btnt"
        btnt.style.marginTop="-30px"
        btnt.style.backgroundColor ="azure"
        btnt.innerHTML = "save Test"
        btnt.addEventListener("click", function () {ff() })
        const br = document.createElement("br")
        const uld = document.createElement("ul")
        uld.appendChild(br)
        uld.appendChild(btns)
        uld.appendChild(br.cloneNode())
        uld.appendChild(br)
        pdiv.appendChild(uld)
        div.style.height = "650px"
        div.appendChild(pdiv)
        SaveT(ClearIndex)
        on2 = true
        on1=false
    }
}
// SaveT is a func for the save test button
function SaveT(a) {
    const btnS = document.createElement("button")
    btnS.style.width = "250px"
    btnS.style.height = "30px"
    if (a == 1) {
        btnS.style.marginTop = "0px"
    }
    else {
        btnS.style.marginTop = "70px"
    }
    btnS.style.marginLeft = "10px"
    btnS.style.backgroundColor = "green"
    btnS.style.color = "white"
    btnS.style.cursor = "pointer"
    btnS.innerHTML = "Save Test"
    btnS.id = "btnS"
    btnS.style.borderRadius="12px"
    btnS.addEventListener("click", function () { ff() })
    div.appendChild(btnS)

}

// clear1 is clearing the pic div
function clear1() {
    ClearIndex=0
    const h = document.getElementById("pdiv1")
    const btnS1=document.getElementById("btnS")
    
    if (h != null) {
        h.remove()
        on1 = false
    }
    if (btnS1 != null) {
        btnS.remove()
    }
}

//clear2 is clearing the the question div
function clear2() {
   ClearIndex=0
    const h1 = document.getElementById("pdiv2")
    const btnS1 = document.getElementById("btnS")
    if (h1 != null) {
        h1.remove()
        on2=false
    }
    if (btnS1 != null) {
        btnS.remove()
    }    
}

// gg func is procecing the data of the questions and save them to the local storage


function gg(a) {

    if (testdatavalid == 1) {
        let q1 = localStorage.getItem("TestIdRef")
        let q2 = localStorage.getItem("QuestionIdRef")
        let questionnull = 0

        const rr = f
        if (f == "" && a==1) {

            const lebP = document.getElementById("lebid")
            lebP.style.color="red"
            lebP.innerHTML = "No File Has Been Enterd"
            return
        }
        let r1=""
        if (a == 0) {
            r1 = document.getElementById("in1").value
            if (r1 == "") {
                const p1m = document.getElementById("p1id")
                p1m.innerHTML = "please enter a quetion - Must Fild "
                p1m.style.color="red"
            }
        }
       
        const r2 = document.getElementById("ina0").value
        const r3 = document.getElementById("ina1").value
        const r4 = document.getElementById("ina2").value
        const r5 = document.getElementById("ina3").value

        if (r2 == '' || r3 == "") {
            const pa1 = document.getElementById("p20")
            const pa2 = document.getElementById("p21")
            pa1.style.color = "red"
            pa2.style.color = "red"
            pa1.innerHTML = "please enter an answer - Must Fild"
            pa2.innerHTML = "please enter an answer - Must Fild"
            return
        }

        
        if ((r1 == "" && rr == "") || (r2 == "" && r3 != "") || (r3 == "" && r4 != "") || (r4 == "" && r5 != ""))

        { alert("you must enter data corectly") }
        else {
            const r6 = document.getElementById("index").value
            if (r6 != "") {
                localStorage.setItem(`picture${q2}`, rr)                
                localStorage.setItem(`question${q2}`, r1)
                localStorage.setItem(`answer1${q2}`, r2)
                localStorage.setItem(`answer2${q2}`, r3)
                localStorage.setItem(`answer3${q2}`, r4)
                localStorage.setItem(`answer4${q2}`, r5)
                localStorage.setItem(`teru-false${q2}`, r6)
                let q2q = parseInt(q2)
                q2q = q2q + 1
                countquestion = countquestion + 1
                localStorage.setItem('QuestionIdRef', q2q)              
                f=""
                if (a == 0) {
                    document.getElementById("in1").value = ""
                }
                document.getElementById("ina0").value = ""
                document.getElementById("ina1").value = ""
                document.getElementById("ina2").value = ""
                document.getElementById("ina3").value = ""
            }
            else {
                const pa11 = document.getElementById("p3Answer")
                const pa12 = document.getElementById("p312")
                if (pa12 != null) {
                    pa12.style.color = "red"

                    pa12.textContent = "choose the right answer - Must Fild"
                }
                if (pa11 != null) {
                    pa11.style.color = "red"

                    pa11.textContent = "choose the right answer - Must Fild"
                }
                return



            }
        }


    }
    const pa12 = document.getElementById("p312")
    if (pa12 != null) {
        pa12.style.color = "black"

        pa12.textContent = "choose the right answer"
    }
    const pa1 = document.getElementById("p20")
    if (pa1 != null) {
       
        pa1.textContent = "please enter an answer"
        pa1.style.color = "black"
    }
    const pa2 = document.getElementById("p21")
    if (pa2 != null) {
        pa2.textContent = "please enter an answer"
        pa2.style.color = "black"
    }
    const pa11 = document.getElementById("p3Answer")
    if (pa11 != null) {
        
        pa11.textContent = "choose the right answer"
        pa11.style.color = "black"
    }
    const lebP = document.getElementById("lebid")
    if (lebP != null) {
        lebP.innerHTML = ""
        
    }
    const h1g = document.getElementById("pdiv1")
    if (h1g != null) {
        h1g.replaceChildren()
    }
    const h2g = document.getElementById("pdiv2")
    if (h2g != null) {
        h2g.replaceChildren()
    }
    clear1()
    clear2()
   SaveT(ClearIndex)



}


function looktest() {

    if (z == 0) {
        const c = document.getElementById("demo5")

        let input1 = document.createElement("input")

        input1.id = "in1"

        input1.placeholder = "enter test name"

        c.appendChild(input1)

        const x = document.getElementById("in1")

        x.addEventListener("dblclick", get1)





        z += 1;
    }
}


let status1 = 0
let countp = 0

// this fuc download the test data from the local storage and sanding it to the 
//surver in case there is no error it calls the second func 
async function ff() {
    if (testdatavalid == 1&&countquestion>0) {
        
        let z = localStorage.getItem("TestName")
        let z1 = localStorage.getItem("TestDate")
        let z2 = localStorage.getItem("StartTime")
        let z3 = localStorage.getItem("TotalTime")
        let z4 = localStorage.getItem("Random")
        if (z4 == "yes") { z4 = 1 }
        else { z4 = 0 }
        let z5 = localStorage.getItem("TeacherIdRef")
        const new1 = { testName: `${z}`, testDate: `${z1}`, startTime: `${z2}`, totalTime: ` ${z3}`, random: z4, teacherIdRef: `${ z5 }` }
        const y2 = 'https://top-school.azurewebsites.net/../api/Test'
        const response = await fetch(y2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(new1) })
        const resj=await response.json()
        status1 = response.status
        if (status1 != 200) {
            alert(`error ${status1} - not able to load test info`)
            const teachername=localStorage.getItem("TeacherName")
            const quetionid = localStorage.getItem("QuestionIdRef")
            const teacherid = localStorage.getItem("TeacherIdRef")
            const testid = localStorage.getItem("TestIdRef")
            localStorage.clear()
            localStorage.setItem("TeacherName", teachername)
            localStorage.setItem("QuestionIdRef", quetionid)
            localStorage.setItem("TeacherIdRef", teacherid)
            localStorage.setItem("TestIdRef",resj.id)

            return
        }
        if (status1 == 200) {
            localStorage.setItem("TestIdRef", resj.id)
            ff3()
            countp += 1
        }

        localStorage.removeItem("TestName")
        localStorage.removeItem("TestDate")
        localStorage.removeItem("TotalTime")
        localStorage.removeItem("StartTime")
        localStorage.removeItem("Random")

    }
    else { er("AT List One Question Soulde Be Entered") }


}
let gg4 = 0

// func ff3 is downloading the questions data from local storage and sanding it to the surver
async function ff3() {

    if (testdatavalid == 1) {
        let d = Questionnumbre + countquestion
        let arrayId=[]
        for (let i = Questionnumbre; i < d; i++) {

            const p1 = localStorage.getItem(`picture${i}`)
           
            const q11 = localStorage.getItem(`question${i}`)    
            let o =localStorage.getItem("TestIdRef")
            const new11 = {id:"0", testIdRef: `${o}`, questions: `${q11}`, picture:`${p1}` }
            const y11 = 'https://top-school.azurewebsites.net/../api/Question'
            const response = await fetch(y11, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(new11) })        
            if (response.status == 200) {
                const responseQ = await response.json()
                arrayId.push(responseQ.id)
                localStorage.removeItem(`question${i}`)
                localStorage.removeItem(`picture${i}`)
                gg4 = 1
            }
            else {
                er(` error ${response.status}- problem with loading quetion info`)
                const teachername = localStorage.getItem("TeacherName")
                const quetionid = localStorage.getItem("QuestionIdRef")
                const teacherid = localStorage.getItem("TeacherIdRef")
                const testid = localStorage.getItem("TestIdRef")
                localStorage.clear()
                localStorage.setItem("TeacherName", teachername)
                localStorage.setItem("QuestionIdRef", quetionid)
                localStorage.setItem("TeacherIdRef", teacherid)
                localStorage.setItem("TestIdRef", testid)
            return}

        }
        let testCount = parseInt(localStorage.getItem("TestIdRef"))
        testCount = testCount + 1
        localStorage.setItem("TestIdRef", testCount)
        if (gg4 == 1) {
            countp += 1
            ff4(arrayId)
            
        }
    }

}

// ff4 func is downloading the answer data from the local storage and sanding it to the surver
async function ff4(ar) {

    let d = Questionnumbre + countquestion
    let co = 0
    let cou=0
    for (let h = Questionnumbre; h < d; h++) {
        const wr1 = parseInt(localStorage.getItem(`teru-false${h}`))
        for (let i = 1; i < 5; i++) {
            let wr = 0
            const q1 = localStorage.getItem(`answer${i}${h}`)

            if (q1 != "") {
               
                if (wr1 == i) { wr = 1 }

                let o = ar[cou];
                const new11 = { answer1: `${q1}`, questionIdRef: `${o}`, rightWorng: `${wr}` }

                const y11 = 'https://top-school.azurewebsites.net/../api/Answer'

                const response = await fetch(y11, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(new11) })

                if (response.status == 200) {
                   

                }
                else {
                    er(` error ${response.status}-problem loading answers info`)
                    const teachername = localStorage.getItem("TeacherName")
                    const quetionid = localStorage.getItem("QuestionIdRef")
                    const teacherid = localStorage.getItem("TeacherIdRef")
                    const testid = localStorage.getItem("TestIdRef")
                    localStorage.clear()
                    localStorage.setItem("TeacherName", teachername)
                    localStorage.setItem("QuestionIdRef", quetionid)
                    localStorage.setItem("TeacherIdRef", teacherid)
                    localStorage.setItem("TestIdRef", testid)
                    return
                }


            }

            

        }

        for (let s = 1; s < 5; s++) {

            localStorage.removeItem(`answer${s}${h}`)


        }
        localStorage.removeItem(`teru-false${h}`)
        cou = cou + 1
    }
    if (co == 0) {
        er("test load succfuly")
        function timeout() {
            location.reload()
        }
     const time=   setTimeout(timeout, 3000)
        function timeout() {
            location.reload()
        }
    }
 
}



