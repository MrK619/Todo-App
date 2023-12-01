export default function Handleerror(value) {
    var check = true;
    var EMAIL_REGEX =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var PASSWORDCHECK = /^[A-Za-z]\w{7,14}$/;
    let error = {};
    if (value.email === "" || !EMAIL_REGEX.test(value["email"])) {
        check = false;
        error.email = "Enter valid email";
    }
    if (value.password === "" || !PASSWORDCHECK.test(value.password)) {
        error.password = "Enter valid password ";
        check = false;
    }
    if (check) {
        error.password = "";
        error.email = "";
    }
    return error;
}
