


window.addEventListener("load", function () { load() })

let t = true
let s = true
let r = true
let l = true
let checkme = 0
let regiOn = 0

// this function loads the first div//
function load() {
    localStorage.clear()
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    div1.className = "dd"
    div1.id = "div1"
    div1.style.float = "left"
    div1.textContent = "student "
    div1.style.backgroundColor = "aquamarine"
    div1.style.fontSize = "30px"
    div1.style.padding = "5px"
    div1.style.margin = "5px"
    div1.style.marginTop = "25px"
    div1.style.cursor = "pointer"
    div1.style.marginLeft = "70px"

    div1.addEventListener("click", function () { s ? stu() : clear1(); s = !s })
    div3.className = "dd"
    div3.id = "div3"
    div3.style.float = "left"
    div3.textContent = "/ "
    div3.style.backgroundColor = "aquamarine"
    div3.style.fontSize = "50px"
    div3.style.padding = "5px"
    div3.style.margin = "5px"
    div3.style.marginTop = "8px"
    div2.className = "dd"
    div2.id = "div2"
    div2.textContent = " teacher"
    div2.style.float = "left"
    div2.style.fontFamily = ""

    div2.style.backgroundColor = "aquamarine"
    div2.style.fontSize = "30px"
    div2.style.padding = "5px"
    div2.style.margin = "5px"
    div2.style.marginTop = "25px"
    div2.style.cursor = "pointer"
    div2.addEventListener("click", function () { t ? tea() : clear1(); t = !t })


    const divm = document.getElementById("m1")
    divm.style.border = "dotted"
    divm.appendChild(div1)
    divm.appendChild(div3)
    divm.appendChild(div2)

}
const divm = document.createElement("div")
const divn = document.createElement("div")

const center = document.getElementById("center")

//this func loads the sconde div as a student//

function stu() {
    checkme = 1
    if (regiOn == 1 || regiOn == 2) {
        center.removeChild(divn)
        center.removeChild(divm)
    }


    divm.replaceChildren()

    divm.style.border = "dotted"
    divm.style.height = "150px"
    const h1 = document.createElement("h3")
    h1.style.marginLeft = "150px"
    h1.style.fontSize = "30px"
    h1.style.marginTop = "10px"
    h1.textContent = "student"
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    div1.className = "dd"
    div1.id = "div4"
    div1.style.float = "left"
    div1.textContent = "login "
    div1.style.backgroundColor = "aquamarine"
    div1.style.fontSize = "30px"
    div1.style.padding = "5px"
    div1.style.margin = "5px"
    div1.style.marginTop = "-0px"
    div1.style.marginLeft = "100px"
    div1.style.cursor = "pointer"
    div1.addEventListener("click", function () { l ? logs() : clear2(); l = !l })
    div3.className = "dd"
    div3.id = "div5"
    div3.style.float = "left"
    div3.textContent = "/ "
    div3.style.backgroundColor = "aquamarine"
    div3.style.fontSize = "50px"
    div3.style.padding = "5px"
    div3.style.margin = "5px"
    div3.style.marginTop = "-15px"
    div2.className = "dd"
    div2.id = "div6"
    div2.textContent = " register"
    div2.style.float = "left"

    div2.style.backgroundColor = "aquamarine"
    div2.style.fontSize = "30px"
    div2.style.padding = "5px"
    div2.style.margin = "5px"
    div2.style.marginTop = "-0px"
    div2.style.cursor = "pointer"
    div2.addEventListener("click", function () { r ? regis() : clear2(); r = !r })



    divm.style.width = "400px"

    divm.style.backgroundColor = "aquamarine"
    divm.style.margin = "auto"
    divm.style.marginTop = "7px"
    divm.appendChild(h1)
    divm.appendChild(div1)
    divm.appendChild(div3)
    divm.appendChild(div2)
    center.appendChild(divm)




    if (t == false) {
        t = true
    }
    if (regiOn == 1) {
        logs()
    }
    if (regiOn == 2) {
        regis()
    }
    /*regiOn = 0*/
}

// this func clear div 2  //
function clear1() {
    divn.replaceChildren()
    divn.style.border = ""
    divn.style.backgroundColor = "azure"
    if (regiOn == 1 || regiOn == 2) {
        center.removeChild(divn)
    }
    divm.replaceChildren()
    divm.style.border = ""
    divm.style.backgroundColor = "azure"
    center.removeChild(divm)
    regiOn = 0


}

//this func loads div 2 as a teacher//
function tea() {
    if (regiOn == 1 || regiOn == 2) {
        center.removeChild(divn)
        center.removeChild(divm)
    }

    checkme = 2
    divm.replaceChildren()
    divm.style.border = "dotted"
    divm.style.height = "150px"
    const h1 = document.createElement("h3")
    h1.style.marginLeft = "150px"
    h1.style.fontSize = "30px"
    h1.style.marginTop = "10px"
    h1.textContent = "teacher"
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    div1.className = "dd"
    div1.id = "div4"
    div1.style.float = "left"
    div1.textContent = "login "
    div1.style.backgroundColor = "aquamarine"
    div1.style.fontSize = "30px"
    div1.style.padding = "5px"
    div1.style.margin = "5px"
    div1.style.marginTop = "-0px"
    div1.style.marginLeft = "100px"
    div1.style.cursor = "pointer"
    div1.addEventListener("click", function () { l ? logs() : clear2(); l = !l })
    div3.className = "dd"
    div3.id = "div5"
    div3.style.float = "left"
    div3.textContent = "/ "
    div3.style.backgroundColor = "aquamarine"
    div3.style.fontSize = "50px"
    div3.style.padding = "5px"
    div3.style.margin = "5px"
    div3.style.marginTop = "-15px"
    div2.className = "dd"
    div2.id = "div6"
    div2.textContent = " register"
    div2.style.float = "left"

    div2.style.backgroundColor = "aquamarine"
    div2.style.fontSize = "30px"
    div2.style.padding = "5px"
    div2.style.margin = "5px"
    div2.style.marginTop = "-0px"
    div2.style.cursor = "pointer"
    div2.addEventListener("click", function () { r ? regis() : clear2(); r = !r })



    divm.style.width = "400px"

    divm.style.backgroundColor = "aquamarine"
    divm.style.margin = "auto"
    divm.style.marginTop = "7px"
    divm.appendChild(h1)
    divm.appendChild(div1)
    divm.appendChild(div3)
    divm.appendChild(div2)
    center.appendChild(divm)

    if (s == false) { s = true }
    if (regiOn == 1) {
        logs()
    }
    if (regiOn == 2) {
        regis()
    }
  

}


//this func loads the therd div as a login//
function logs() {
    regiOn = 1

    divn.replaceChildren()
    divn.style.border = "dotted"
    divn.style.position = "relative"
    divn.style.height = "250px"
    divn.style.textAlign = "center"
    const h1 = document.createElement("h2")
    h1.style.textAlign = "center"
    h1.textContent = "login"
    const br = document.createElement("br")
    const form1 = document.createElement("form")

    const ul = document.createElement("ul")
    const input1 = document.createElement("input")
    input1.name = "email1"
    input1.type = "email"
    input1.value = ""
    input1.id = "inp1"
    input1.placeholder = "enter your Email"
    input1.style.margin = "auto"
    const label1 = document.createElement("label")
    label1.for = "email1"
    label1.id = "label1"
    label1.style.marginLeft = "-32%"
    label1.innerHTML = "Email"


    const label2 = document.createElement("label")
    label2.for = "password1"
    label2.id = "label2"
    label2.style.marginLeft = "-26%"
    label2.innerHTML = "Password"
    const input2 = document.createElement("input")
    input2.type = "password"
    input2.value = ""
    input2.id = "inp2"

    input2.style.margin = "auto"
    input2.placeholder = "enter your password"
    const btn = document.createElement("button")
    btn.addEventListener("click", function () { StuLog(checkme) })

    btn.id = "btn1"
    btn.style.backgroundColor = "azure"
    btn.innerHTML = "submit"
    btn.style.marginLeft = "60%"

    btn.style.borderRadius = "10px"
    btn.style.color = "white"
    btn.style.backgroundColor = "black"
    btn.style.cursor = "pointer"

    divn.style.width = "400px"

    divn.style.backgroundColor = "aquamarine"
    divn.style.margin = "auto"
    divn.style.marginBottom = "20px"
    divn.style.marginTop = "7px"
    divn.appendChild(h1)
    divn.appendChild(label1)
    divn.appendChild(br.cloneNode())
    divn.appendChild(input1)
    divn.appendChild(br.cloneNode())

    divn.appendChild(br.cloneNode())
    divn.appendChild(label2)
    divn.appendChild(br.cloneNode())
    divn.appendChild(input2)
    divn.appendChild(br.cloneNode())

    divn.appendChild(br.cloneNode())

    divn.appendChild(btn)
    center.appendChild(divn)
    let yy = 0


    if (r == false) {
        r = true
    }




}




// this func load the therd div as register
function regis() {
    regiOn = 2
    divn.replaceChildren()
    divn.style.width = "400px"

    divn.style.backgroundColor = "aquamarine"
    divn.style.margin = "auto"
    divn.style.marginBottom = "20px"
    divn.style.marginTop = "7px"
    divn.style.border = "dotted"
    divn.style.position = "relative"
    divn.style.textAlign = "center"
    divn.style.height = "380px"
    const h1 = document.createElement("h2")
    h1.textContent = "register"
   

    const br = document.createElement("br")

    const input1 = document.createElement("input")

    input1.type = "text"

    input1.value = ""
    input1.name = "input11"
    input1.id = "inp11"
    input1.placeholder = "enter your name"
    input1.style.margin = "auto"
 
    const label11 = document.createElement("label")
    label11.for = "input11"
    label11.id = "label11"
    label11.style.marginLeft = "-32%"
    label11.innerHTML = "Name"
    label11.style.color = "black"
    const input2 = document.createElement("input")
    input2.type = "email"
    input2.name = "input22"
    input2.value = ""
    input2.id = "inp22"
    input2.placeholder = "enter your mail"
    input2.style.margin = "auto"

    const label22 = document.createElement("label")
    label22.for = "input22"
    label22.id = "label22"
    label22.innerHTML = "Email"
    label22.style.color = "black"
    label22.style.marginLeft = "-32%"
    const input3 = document.createElement("input")
    input3.type = "tel"
    input3.name = "input33"
    input3.value = ""
    input3.id = "inp33"
    input3.pattern = "[0-9]{7}"
    input3.placeholder = "enter your phone"
    input3.style.width = "116px"
    const label33 = document.createElement("label")
    label33.for = "input33"
    label33.id = "label33"
    label33.style.marginLeft = "-19%"
    label33.innerHTML = "Phone number"
    label33.style.color = "black"
    const leb = document.createElement("label")
    leb.setAttribute("for", "inp331")
    const select = document.createElement("select")
    select.id = "select1"
    select.style.margin = "auto"
   
    const option2 = document.createElement("option")
    option2.value = "050"
    option2.innerHTML = "050"
    const option3 = document.createElement("option")
    option3.value = "052"
    option3.innerHTML = "052"
    const option4 = document.createElement("option")
    option4.value = "053"
    option4.innerHTML = "053"
    const option5 = document.createElement("option")
    option5.value = "054"
    option5.innerHTML = "054"
    const option6 = document.createElement("option")
    option6.value = "055"
    option6.innerHTML = "055"
    select.appendChild(option2)
    select.appendChild(option3)
    select.appendChild(option4)
    select.appendChild(option5)
    select.appendChild(option6)


    const input4 = document.createElement("input")
    input4.type = "text"
    input4.value = ""
    input4.id = "inp44"
    input4.placeholder = "enter your Id"
    input4.style.margin = "auto"

    input4.name = "input44"
    const label44 = document.createElement("label")
    label44.for = "input44"
    label44.id = "label44"
    label44.style.marginLeft = "-38%"
    label44.innerHTML = "Id"
    label44.style.color = "black"
    const input7 = document.createElement("input")
    input7.type = "password"
    input7.value = ""
    input7.id = "inp77"
    input7.style.margin = "auto"
  
    input7.name = "input77"
    input7.placeholder = "enter your passward"
    const label77 = document.createElement("label")
    label77.for = "input77"
    label77.id = "label77"
    label77.style.marginLeft = "-27%"
    label77.innerHTML = "Password"
    label77.style.color = "black"
    const input5 = document.createElement("input")
    input5.type = "text"
    input5.value = ""
    input5.id = "inp55"
    input5.name = "input55"
    input5.style.margin = "auto"
    input5.style.marginLeft = "30%"
    input5.placeholder = "enter your Code"
    const label55 = document.createElement("label")
    label55.for = "input55"
    label55.id = "label55"
    label55.innerHTML = "kkkkk"
    const btn = document.createElement("button")
    btn.addEventListener("click", function () { valid() })
   
    btn.style.borderRadius = "10px"
    btn.style.color = "white"
    btn.style.backgroundColor = "black"
    btn.style.cursor = "pointer"
    btn.innerHTML = "Submit"
   
    btn.style.marginLeft = "70%"
    btn.style.marginTop = "-50px"

    const p = document.createElement("spacer")
    p.textContent = " "


    divn.appendChild(h1)
    const ul = document.createElement("ul")
    ul.style.marginTop = "-10px"
    divn.appendChild(label11)
    divn.appendChild(br.cloneNode())
    divn.appendChild(input1)
    divn.appendChild(br.cloneNode())

    divn.appendChild(br.cloneNode())
    divn.appendChild(label44)
    divn.appendChild(br.cloneNode())


    divn.appendChild(input4)
    divn.appendChild(br.cloneNode())
    divn.appendChild(br.cloneNode())
    divn.appendChild(label22)
    divn.appendChild(br.cloneNode())
    divn.appendChild(input2)
    divn.appendChild(br.cloneNode())
    divn.appendChild(br.cloneNode())
    divn.appendChild(label33)
    divn.appendChild(br.cloneNode())
    divn.appendChild(select)
    divn.appendChild(p)
    divn.appendChild(input3)
    divn.appendChild(br.cloneNode())
    divn.appendChild(br.cloneNode())
    divn.appendChild(label77)
    divn.appendChild(br.cloneNode())
    divn.appendChild(input7)


    divn.appendChild(btn)
  
    center.appendChild(divn)


    if (l == false) {
        l = true
    }

}

//this func clear div 3//

function clear2() {
    if (regiOn == 1 || regiOn == 2) {
        center.removeChild(divn)

    }
    divn.replaceChildren()
    divn.style.border = ""
    divn.style.backgroundColor = "azure"
    regiOn = 0
}


//this func validate the info from regis and sand it to the server//

async function valid() {

    const name = document.getElementById("inp11").value
    if (name.length <= 20 && name.length > 0) {
        lab1 = document.getElementById("label11")
        lab1.style.color = "black"
        lab1.innerHTML = "Name"
        lab1.style.marginLeft = "-32%"
        const id = document.getElementById("inp44").value
        const check = /^\d+$/
        const b = check.test(id)
        if (b && id.length == 10) {
            lab4 = document.getElementById("label44")
            lab4.style.color = "black"
            lab4.style.marginLeft = "-38%"
            lab4.innerHTML = "Id"
            const email = document.getElementById("inp22").value
            regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
            const checke = regex.test(email)
            if (checke) {
                lab2 = document.getElementById("label22")
                lab2.style.color = "black"
                lab2.innerHTML = "Email"
                lab2.style.marginLeft = "-32%"
                const phone1 = document.getElementById("inp33").value
                const check1 = /^\d+$/
                const tr = check1.test(phone1)
                if (tr && phone1.length == 7) {
                    const sel = document.getElementById("select1").value
                    const fullphone = `${sel}${phone1}`

                    lab3 = document.getElementById("label33")
                    lab3.style.color = "black"
                    label33.style.marginLeft = "-19%"
                    lab3.innerHTML = "Phone Number"


                    const pass = document.getElementById("inp77").value

                    if (pass.length < 10 && pass.length > 3) {

                        if (/[a-z]/.test(pass) && /[A-Z]/.test(pass) && /[0-9]/.test(pass)) {
                            lab7 = document.getElementById("label77")
                            lab7.style.color = "black"
                            lab7.innerHTML = "Password"
                            if (checkme == 2) {



                                const js = { teacherName: `${name}`, password: `${pass}`, email: `${email}`, teacherId:id, phoneN: `${fullphone}` }
                                const y = "../api/TeacherControler"
                                const rep = await fetch(y, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(js) })
                                if (rep.status != 200) {
                                    divn.replaceChildren()
                                    const h11 = document.createElement("h1")
                                    h11.style.fontSize = "35px"
                                    h11.style.textAlign = "center"
                                    h11.style.marginTop = "30%"

                                    h11.innerHTML = "Error" + " " + rep.status
                                    divn.appendChild(h11)
                                }
                                const repjson = await rep.json()
                                if (rep.status == 200) {
                                    if (repjson.teacherName != "Id" && repjson.teacherName != "Password") {
                                        divn.replaceChildren()
                                        const h11 = document.createElement("h1")
                                        h11.style.fontSize = "35px"
                                        h11.style.textAlign = "center"
                                        h11.style.marginTop = "30%"

                                        h11.innerHTML = " Info Load Succesfuly You Can Sign In"
                                        divn.appendChild(h11)


                                    }

                                    else {

                                        if (repjson.teacherName == "Id") {

                                            divn.replaceChildren()
                                            const h11 = document.createElement("h1")
                                            h11.style.fontSize = "35px"
                                            h11.style.textAlign = "center"
                                            h11.style.marginTop = "30%"

                                            h11.innerHTML = "Your Data Is Already Showen In The System"
                                            divn.appendChild(h11)

                                        }

                                        if (repjson.teacherName == "Password") {
                                            divn.replaceChildren()
                                            const h11 = document.createElement("h1")
                                            h11.style.fontSize = "35px"
                                            h11.style.textAlign = "center"
                                            h11.style.marginTop = "30%"

                                            h11.innerHTML = "Password Already In Use Please Choose A Different Password"
                                            divn.appendChild(h11)

                                        }

                                    }
                                }
                              

                            }







                            if (checkme == 1) {



                                const js = { stuName: `${name}`, password: `${pass}`, stuId: `${id}`, email: `${email}`, tel: `${fullphone}` }
                                const y = "../api/StudentControler"
                                const rep = await fetch(y, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(js) })
                                if (rep.status != 200) {
                                    divn.replaceChildren()
                                    const h11 = document.createElement("h1")
                                    h11.style.fontSize = "35px"
                                    h11.style.textAlign = "center"
                                    h11.style.marginTop = "30%"

                                    h11.innerHTML = "Error" + " " + rep.status
                                    divn.appendChild(h11)
                                    return
                                }
                                const repjson = await rep.json()
                                if (rep.status == 200) {
                                    if (repjson.stuName != "Id" && repjson.stuName != "Password") {
                                        divn.replaceChildren()
                                        const h11 = document.createElement("h1")
                                        h11.style.fontSize = "35px"
                                        h11.style.textAlign = "center"
                                        h11.style.marginTop = "30%"

                                        h11.innerHTML = " Info Load Succesfuly You Can Sign In"
                                        divn.appendChild(h11)
                                    }

                                    else {

                                        if (repjson.stuName == "Id") {


                                            divn.replaceChildren()
                                            const h11 = document.createElement("h1")
                                            h11.style.fontSize = "35px"
                                            h11.style.textAlign = "center"
                                            h11.style.marginTop = "30%"

                                            h11.innerHTML = "Your Data Is Already Showen In The System"
                                            divn.appendChild(h11)
                                            return

                                        }

                                        if (repjson.stuName == "Password") {


                                            divn.replaceChildren()
                                            const h11 = document.createElement("h1")
                                            h11.style.fontSize = "35px"
                                            h11.style.textAlign = "center"
                                            h11.style.marginTop = "30%"

                                            h11.innerHTML = "Password Already In Use Please Choose A Different Password"
                                            divn.appendChild(h11)
                                            return
                                        }

                                    }
                                }
                                







                            }
                        }
                        else {
                            lab7 = document.getElementById("label77")
                            lab7.style.color = "red"
                            lab7.style.marginLeft = "1%"
                            lab7.innerHTML = "Must Contain Upper Case Lower Case And a Number"
                            lab7.style.marginLeft = "auto"
                        }
                    }

                    else {
                        lab7 = document.getElementById("label77")
                        lab7.style.color = "red"
                        lab7.style.marginLeft = "auto"
                        if (pass.length < 3) {
                            lab7.innerHTML = "Password Soulde have at list 3 character"
                        }
                        if (pass.length > 10) {
                            lab7.innerHTML = "Password Soulde Have Maximum 10 Character"
                        }
                    }





                }




                else {
                    lab3 = document.getElementById("label33")
                    lab3.style.color = "red"
                    if (phone1 == "") {
                        lab3.innerHTML = "* Must Fild"
                        lab3.style.marginLeft = "-28%"
                    }
                    else {
                        lab3.innerHTML = "Phone Number Should Contain 7 Numbers "
                        lab3.style.marginLeft = "auto"
                    }
                    return

                }



            }

            else {

                lab2 = document.getElementById("label22")
                lab2.style.color = "red"
                if (email == "") {
                    lab2.innerHTML = "* Must Fild"
                    lab2.style.marginLeft = "-28%"
                    return
                }
                else {
                    lab2.innerHTML = "* Please Enter Corect Email Address"
                    lab2.style.marginLeft = "auto"
                    return
                }
            }


        }
        else {
            lab4 = document.getElementById("label44")
            lab4.style.color = "red"
            if (id.length == 0) {
                lab4.innerHTML = "* Must Fild  "
                lab4.style.marginLeft = "-28%"
                return
            }
            if (id.length != 10) {
                lab4.innerHTML = "* Id Length Is 10 Characters Numbers Only  "
                lab4.style.marginLeft = "auto"
                return
            }
            if (!b) {
                lab4.innerHTML = "* Id Must Contain Only Numbers"
                lab4.style.marginLeft = "auto"
                return
            }




        }


    }

    else {
        if (name.length > 20) {
            lab1 = document.getElementById("label11")
            lab1.style.color = "red"
            lab1.style.margin = "auto"
            lab1.innerHTML = "* Name Maximum Length Is 20 Characters "
        }
        if (name.length == 0) {
            lab1 = document.getElementById("label11")
            lab1.style.color = "red"
            lab1.innerHTML = "* Must fild "
            lab1.style.marginLeft = "-28%"

        }
    }

}

// this func gets the info from logs and sand it to the server//
async function StuLog(checkme) {
    let ccc = localStorage.getItem("opent")
    let sss = localStorage.getItem("opens")
    localStorage.clear()
    if (ccc != null) {
        localStorage.setItem("opent", ccc)
    }
    if (sss != null) {
        localStorage.setItem("opens", sss)
    }
    if (checkme == 1) {
        const in1 = document.getElementById("inp1").value
        const in2 = document.getElementById("inp2").value


        if (in1 != '') {
            let label1 = document.getElementById("label1")
            label1.style.color = "black"
            label1.innerHTML = "Email"
            label1.style.marginLeft="-32%"
        }
        else {
            let label1 = document.getElementById("label1")
            label1.style.color = "red"
            label1.innerHTML = "* Must filds "
            label1.style.marginLeft = "-28%"
            return
        }

        if (in2 != '') {

            let label2 = document.getElementById("label2")
            label2.style.color = "black"
            label2.innerHTML = "Password"
        }
        else {
            let label1 = document.getElementById("label2")
            label1.style.color = "red"
            label1.innerHTML = "* Must filds "
            label1.style.marginLeft = "-28%"
            return

        }
        //  'https://localhost:7161/api/StudentControler?Id=1&StuName=d&StuId=d&Password=SSss11&Email=s%40s.com&Tel=7878'
        //  const rep = await fetch(`api/StudentControler?Id=2&StuName=aa&Email=${in1}&Password=${in2}&StuId=as&Tel=as`)
        const rep = await fetch(`../api/StudentControler?Id=1&StuName=d&StuId=d&Password=${in2}&Email=${in1}&Tel=7878`)
        if (rep.status != 200) {
            divn.replaceChildren()
            divn.style.border = "dotted"
            divn.style.height = "250px"
            const h1 = document.createElement("h1")
            h1.innerHTML = "Error" + rep.status
            h1.style.marginLeft = "30%"
            h1.style.marginTop = "25%"
            h1.style.fontSize = "30px"
            divn.appendChild(h1)
            
        }

        const v = await rep.json()
        if (rep.status == 200 && v.stuName != "dont match") {
           

            localStorage.setItem("stuName", v.stuName)
            localStorage.setItem("stuId", v.stuId)
            let sss1 = localStorage.getItem("opens")
            if (sss1 == null) {
                window.open("https://top-school.azurewebsites.net/StudentHtml/STM1.html")
            }
            else {
                alert("window is open please close befor you open another one")
            }
        }
        else if (rep.status == 200) {
            clearD()
            setTimeout(logs,5000)
            


        }


    }
   

if (checkme == 2) {
    const in1 = document.getElementById("inp1").value
    const in2 = document.getElementById("inp2").value
    if (in1 != '') {
        let label1 = document.getElementById("label1")
        label1.style.color = "black"
        label1.innerHTML = "Email"
        label1.style.marginLeft = "-32%"
    }
    else {
        let label1 = document.getElementById("label1")
        label1.style.color = "red"
        label1.innerHTML = "* Must filds "
        label1.style.marginLeft = "-28%"
        return
    }

    if (in2 != '') {

        let label2 = document.getElementById("label2")
        label2.style.color = "black"
        label2.innerHTML = "Password"
    }
    else {
        let label1 = document.getElementById("label2")
        label1.style.color = "red"
        label1.innerHTML = "* Must filds "
        label1.style.marginLeft = "-28%"
        return

    }
    if (in1 != '' && in2 != '') {
        const a = await fetch(`../api/TeacherControler?Id=2&TeacherName=aa&Email=${in1}&Password=${in2}&TeacherId=12323&PhoneN=as`)
        if (a.status != 200) {
            divn.replaceChildren()
            divn.style.border = "dotted"
            divn.style.height = "250px"
            const h1 = document.createElement("h1")
            h1.innerHTML = "Error" + "  " + a.status
            h1.style.marginLeft = "30%"
            h1.style.marginTop = "25%"
            h1.style.fontSize = "30px"
            divn.appendChild(h1)
        }
        const a1 = await a.json()
        if (a.status == 200 && a1.teacherName != "dont match") {
            localStorage.setItem("TeacherIdRef", `${a1.teacherId}`)
            localStorage.setItem("TeacherName", `${a1.teacherName}`)
            let ccc1 = localStorage.getItem("opent")
            if (ccc == null) {
                window.open("https://top-school.azurewebsites.net/TeacherHtml/TeacherManuF.html")
            }
            else { alert("window is open please close befor you open another one") }

        }
        else if (a.status == 200 && a1.teacherName == "dont match") {
            clearD()
            setTimeout(logs, 5000)
         
        }


    }
  
}

}

function clearD() {
    divn.replaceChildren()
    divn.style.border = "dotted"
    divn.style.position = "relative"
    divn.style.height = "250px"
    divn.style.textAlign = "center"
    divn.style.width = "400px"

    divn.style.backgroundColor = "aquamarine"
    divn.style.margin = "auto"
    divn.style.marginBottom = "20px"
    divn.style.marginTop = "7px"
    const h1 = document.createElement("h1")
    h1.textContent = "Details Dont Match Please Try Again"
    divn.appendChild(h1)
}





