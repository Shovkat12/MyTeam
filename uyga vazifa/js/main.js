const elInputs = [...document.querySelectorAll('.form-field-item')];
const elAlertDiv = [...document.querySelectorAll('.form-field-alert')];

for (let i = 0; i < elInputs.length; i++) {
    elInputs[i].onblur = function(){
        if (elInputs[i].value === "") {
            elInputs[i].classList.add("form-field-item-red");
            elAlertDiv[i].innerHTML = "This field is required"
        }
    }
    elInputs[i].onfocus = function(){
        if (elInputs[i].classList.contains("form-field-item-red")) {
            elInputs[i].classList.remove("form-field-item-red");
            elAlertDiv[i].innerHTML = ""
        }
    }
}
let elBut = [...document.querySelectorAll(".directors-pack_button")]
let elWindow = [...document.querySelectorAll(".directors-pack-click")]

for (let i = 0; i < elBut.length; i++) {
    elBut[i].addEventListener('click', function(){
        if(elBut[i].classList.contains("button-active")){
            elBut[i].classList.remove("button-active")
            elWindow[i].classList.remove("active")
        }else{
            elBut[i].classList.add("button-active")
            elWindow[i].classList.add("active")
        }
    })
    
}

