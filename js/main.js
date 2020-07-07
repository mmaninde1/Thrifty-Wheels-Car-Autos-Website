function checkname() {
    var letters = /^[A-Za-z\s]+$/;
    if (document.getElementById('name').value.match(letters)) {
        document.getElementById('name').classList.remove("invalid");
        document.getElementById('name').classList.add("valid");
    } else {
        document.getElementById('name').classList.remove("valid");
        document.getElementById('name').classList.add("invalid");

    }
}



function checkphone() {
    var num = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (document.getElementById('phone').value.match(num)) {
        document.getElementById('phone').classList.remove("invalid");
        document.getElementById('phone').classList.add("valid");
    } else {
        document.getElementById('phone').classList.remove("valid");
        document.getElementById('phone').classList.add("invalid");

    }
}