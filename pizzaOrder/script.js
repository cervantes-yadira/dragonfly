// main
function validateForm() {
    let noErrors = true;
    //let x = document.forms["myForm"]["fname"].value;
    // if(x === "") {
    //     alert("Name must be filled out");
    //     return false;
    // }

    //alert("hello");
    validateEmail();
    validateCity();
    validateToppings();

    if (noErrors === true) {
        document.forms.submit();
    }
}

// email
function validateEmail() {
    // FIX
    const re = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/

    let email = document.querySelector("input[name='Email']").value;
    console.log(email);

    if (email.includes("@greenriver.edu") && String(email)
        .toLowerCase()
        .match(re)) {
        return true;
    }

    alert("Your email does not contain @greenriver.edu or is not valid")
    return false;
}

//topping validator
function validateToppings() {
    var inputs = document.getElementsByTagName('input');
    count = 0;
    for(var i = 0; i<inputs.length; i++) {
        if(inputs[i].type === "checkbox" && inputs[i].checked === true) {
            count++;
        }
    }
    if (count > 3) {
        alert("too many toppings!");
        event.preventDefault();
    } else if (count < 3) {
        alert("too little toppings!")
        event.preventDefault();
    }
}

//city/state validator
function validateCity(){
    let city = document.getElementById('inputCity');
    let cityLower = city.value.toLowerCase();

    switch (cityLower){
        case ('seattle'):
        case ('kent'):
        case ('auburn'):
        case ('burien'):
        case ('seatac'):
            return true;
        default:
            alert("A $25 delivery fee will be added to you order total!")
            return false;
    }
}

//phone/email validator

function validatePhone() {

}


