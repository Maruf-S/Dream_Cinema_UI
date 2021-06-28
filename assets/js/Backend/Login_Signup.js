
var baseUrl = "http://127.0.0.1:5000/"

//#region SignUp
async function SignUpUser(email, password) {
    //1,2,10 are error codes
    let _data = {
        'Email': email,
        'Password': password, 
      }
    return await fetch(`${baseUrl}api/v1/register`, {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"
            },
            
    })
    .then(response => {
        if(response['status']==409){
            return 2;
        }
        else{
            res = response.json();
            return 1;
        }
    }) 
    .catch(err => {
        console.log(err);
        return 10;
        // return `Unknown error occurred${error}`;
    });
}
//#endregion

//#region SignIn
async function SignInUser(email, password) {
    let _data = {
        'username': email,
        'password': password, 
      }
    return await fetch(`${baseUrl}auth`, {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"
            }
    })
    .then(response =>response.json()) 
    .then(json => {
        if(json['status_code']==401){
            console.log(json)
            return 2;
        }
        else{
            console.log(json);
            createLoginCookie(json['access_token'],2);
            return 1;
        }
    })
    .catch(err => {
        return 10;
        // return `Unknown error occurred${error}`;
    });
}
//#endregion
//#region AccountManagment
async function ChangePassword(email, oldPsw, newPsw) {
    try {
        return await db.collection('users').doc({
            email: email,
            password: oldPsw
        }).get().then(document => {
            if (document) { //user exists
                db.collection('users').doc({
                    email: email
                }).update({
                    password: newPsw
                }).catch(error => {
                    console.log(`UNKNOWN ERROR OCCOURED ${error}`);
                    return 10;
                });
                alert()
                console.log("CHANGE SUCCESSfUL");
                return 1;
                //return "Password change successful";
            } else {
                console.log(`password mismatch`);
                return 2;
                //Password mismatch
            }
        })
    } catch (error) {

        console.log(`UNKNOWN ERROR OCCOURED ${error}`);
        return 10;
    }
}
async function ChangeEmail(oldEmail, newEmail, phoneNumber, password) {
    try {
        if (oldEmail == null || newEmail == null) {
            return 10;
        }
        //CHANGE PHONE NUMBER ONLY
        if (!newEmail) {
            return await db.collection('users').doc({
                email: oldEmail,
                password: password
            }).update({
                phone: phoneNumber
            }).then((e) => {
                //PHONE NUMBER ONLY CHANGE WAS SUCCESSFUL;
                return 4;
            }).catch(error => {
                //Password Mismatch
                console.log(`UNKNOWN ERROR OCCOURED ${error}`);
                return 2;
            });
        }
        //CHANGE BOTH THE EMAIL AND PHONE NO
        return await DoesUserExist(newEmail).then(answer => {
            if (answer) {
                //A USER ALREADY EXISTS with this email
                return 3;
            } else {
                //Change onlythe phone number
                return db.collection('users').doc({
                    email: oldEmail,
                    password: password
                }).get().then(document => {
                    if (document) { //user exists
                        console.log("USER EXISTS PROCEDING CHANGE");
                        db.collection('users').doc({
                            email: oldEmail
                        }).update({
                            email: newEmail,
                            phone: phoneNumber
                        }).catch(error => {
                            console.log(`UNKNOWN ERROR OCCOURED ${error}`);
                            return 10;
                        });
                        console.log("Email change successufl")
                        return 1;
                        //return "Email change successful";
                    } else {
                        console.log(`password mismatch`);
                        return 2;
                        //Password mismatch
                    }
                });
            }

        })

    } catch (error) {
        console.log(`UNKNOWN ERROR OCCOURED ${error}`);
        return 10;
    }
}

async function ChangeSocials(email, twitter, insta) {
    return db.collection('users').doc({
        email: email
    }).update({
        twitter: twitter,
        instagram: insta
    }).then(
        (e) => {
            console.log("CHANGE SUCCESSfUL");
            return 1;
            //return "Operation successful";
        }
    ).catch(error => {
        console.log(`UNKNOWN ERROR OCCOURED ${error}`);
        return 10;
    });

}
async function Changepreferences(email, newsLetter) {
    return db.collection('users').doc({
        email: email
    }).update({
        newsLetter: newsLetter
    }).then((e) => {
        console.log("CHANGE SUCCESSfUL");
        return 1;
        //return "Operation successful";
    }).catch(error => {
        console.log(`UNKNOWN ERROR OCCOURED ${error}`);
        return 10;
    });

}
async function deleteUser(email, password) {
    return db.collection('users')
        .doc({
            email: email,
            password: password
        })
        .delete()
        .then(response => {
            return 1;
        })
        .catch(error => {
            console.log(`password mismatch`);
            return 2;
            //Password mismatch
        });
    // logOutUser();
}
//Helper function for email change
async function DoesUserExist(email) {
    //1,2,10 are error codes
    try {
        return await db.collection('users').doc({
            email: email
        }).get().then(document => {
            if (document == undefined) {
                return false;
                //User doesnot exist
            } else {
                return true;
                //User does exist
            }
        })

    } catch (error) {
        return true;
    }
}
//return user info without the password
async function getuser(email) {
    try {
        return await db.collection('users').doc({
            email: email
        }).get().then(document => {
            document['password'] = null;
            return document;
        })

    } catch (error) {
        return null;
    }
}
//#endregion 
//#region LoginCookie
function createLoginCookie(token, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = "identity=" + token + expires + "; path=/";
}

function readLoginCookie() {
    var nameEQ = "identity" + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseLoginCookie() {
    createLoginCookie("", -1);
}
//#endregion