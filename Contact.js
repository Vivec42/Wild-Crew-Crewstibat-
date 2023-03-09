const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const text2 = document.querySelector("#text2");

form.addEventListener('click',e=>{
    e.preventDefault();

    form_verify();

})

function form_verify() {
    const uservalue = username.value.trim();
    const emailvalue = email.value.trim();
    const numbervalue = number.value.trim();
    const text2value = text2.value.trim();
    console.log(uservalue)
    console.log(emailvalue)
    console.log(numbervalue)
    console.log(text2value)

    if (uservalue === "") {
        let message ="Votre prénom ne peut être vide";
        setError(username,message);

    
    }

    else {
        setSucces(username)
    }
}


function setError(elem,message) {
    const formcontrol = elem.parentElement;
    const small = formcontrol.querySelector('small');
    /*small.innerHTML = "";*/

    small.innerText = message

    formcontrol.className = "form-control error";
}

function setSucces(elem) {
    const formcontrol = elem.parentElement;
    const small = formcontrol.querySelector('small');

    small.innerText = "" 
    /*small.innerHTML = '<i class="fa fa-check-circle"></i>';*/
    

    formcontrol.className = "form-control succes";

    if (emailvalue === "") {
        let message ="Votre email ne peut être vide";
        setError(email,message);

    
    }

    else {
        setSucces(email)
    }
}


function setError(elem,message) {
    const formcontrol = elem.parentElement;
    const small = formcontrol.querySelector('small');
    /*small.innerHTML = "";*/

    small.innerText = message

    formcontrol.className = "form-control error";
}

function setSucces(elem) {
    const formcontrol = elem.parentElement;
    const small = formcontrol.querySelector('small');

    small.innerText = "" 
    /*small.innerHTML = '<i class="fa fa-check-circle"></i>';*/
    

    formcontrol.className = "form-control succes";
    
}


