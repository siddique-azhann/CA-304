function formValidation() {
    var fname = document.registration.fname;
    var lname = document.registration.lname
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex; 
    if (userid_validation(uid, 5, 12)) {
        if (passid_validation(passid, 7, 12)) {
            if (allLetter(uname)) {
                if (alphanumeric(uadd)) {
                    if (ValidateEmail(uemail)) {
                        if (validsex(umsex, ufsex)) {
                        }
                    }
                }
            }
        }
    }
}
return false;