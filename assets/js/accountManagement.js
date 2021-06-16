var db = new Localbase('DreamCinema');
var baseUrl = "http://127.0.0.1:5000/"

const generalForm = document.querySelector('#Gform');
const passwordChangeForm = document.querySelector('#passwordChangeForm');
const socialsForm = document.querySelector('#socialsForm');
const preferencesForm = document.querySelector('#preferncesForm');
const oldEmail = generalForm.querySelector('.oldEmail');
const phoneNo = generalForm.querySelector('.phoneNumber');
const newEmail = generalForm.querySelector('.newEmail');
generalForm.addEventListener('submit', Email_Change);

if (!readLoginCookie()) window.location.href = 'Login.html';
//#region Load old values
loadExistingData();
async function loadExistingData() {
    var user = await getuser(readLoginCookie());
    oldEmail.value = user['email'];
    // newEmail.value = user['email'];
    phoneNo.value = (user['phone'] == undefined) ? '' : user['phone'];
    twitterInput.value = (user['twitter'] == undefined) ? '' : user['twitter']
    instaInput.value = (user['instagram'] == undefined) ? '' : user['instagram']
    newsLetterCheckbox.checked = user['newsLetter'];
}
//#endregion
function Email_Change(e) {
    e.preventDefault();
    //UNCOMMENT THIS LATTER
    // if(oldEmail.value === newEmail.value){
    //     swal("Error!", "New email canot be the same as the old one", "error");    
    //     return;
    // }
    swal("Confirm Password", {
            content: "input",
        }, )
        .then((value) => {
            if (!value) return; //User canceled
            ChangeEmail(readLoginCookie(), newEmail.value, phoneNo.value, value)
                .then((response) => {
                    switch (response) {
                        case 1:
                            swal("Success", "Email changed successfully!", "success");
                            //Logout the user
                            // logOutUser();
                            break;
                        case 4:

                            swal("Success", "Changes were successfull", "success");
                            break;

                        case 2:
                            swal("Error!", "Incorrect password", "error");
                            break;
                        case 3:
                            swal("Error!", "An account already exists on this email", "error");
                            break;
                        case 10:
                            swal("Error!", "An Unknown error occoured, Please refresh the page!", "error");
                            break;
                            // default:
                            //   // code block
                    }
                }).catch(() => {
                    // rejection
                    swal("Error!", "Unknown error occoured!", "error");
                });
        });
}
///////////////////////////////////
///////////CHANGE PASSWORD/////////
///////////////////////////////////
const currentPsw = passwordChangeForm.querySelector('.currentPsw');
const newPsw = passwordChangeForm.querySelector('.newPsw');
const cfrmPsw = passwordChangeForm.querySelector('.cfrmPsw');
passwordChangeForm.addEventListener('submit', PasswordChange);
async function PasswordChange(e) {
    e.preventDefault();
    var varidationRegx = /^[a-zA-Z0-9_.-]*$/
    if(!((cfrmPsw.value.length<64 || newPsw.value.length<64)&&((cfrmPsw.value.length>8 || newPsw.value.length>8)))){
      swal("Error!", "Password length has to be between 8 and 64!", "error");
      return;
    }
    if(!(varidationRegx.test(newPsw.value) && varidationRegx.test(cfrmPsw.value))){
      swal("Error!", "Password can only contain Letters, numbers, underscores(_), dashes(-), and points(.)!", "error");
      return;
    }
    if (!(newPsw.value === cfrmPsw.value)) {
        swal("Error!", "Password and confirm password do not match!", "error");
        return;
    }

    await ChangePassword(readLoginCookie(), currentPsw.value, newPsw.value).then(
        (response) => {
            switch (response) {
                case 1:
                    swal("Success!", "Password change successfull.", "success");
                    passwordChangeForm.reset();
                    break;
                case 2:
                    //Password mismatch
                    swal("Error!", "Incorrect password!", "error");
                    break;
                case 10:
                    swal("Error!", "An Unknown error occoured, Please refresh the page!", "error");
                    // alert("Unknown Error occurred")
                    break;
            }
        }
    )
}
///////////////////////////////////
////SET SOCIAL MEDIA LINKS/////////
///////////////////////////////////
const twitterInput = socialsForm.querySelector('.twitterInput');
const instaInput = socialsForm.querySelector('.instaInput');
socialsForm.addEventListener('submit', SocialMediaChange(twitterInput, instaInput));

//#region social_media
async function SocialMediaChange(twitter_link, instagram_link) {
    //1,2,10 are error codes
    let _data = {
        'Twitter_link': twitter_link,
        'Instagram_link': instagram_link, 
      }
    return await fetch(`${baseUrl}api/v1/register`, {
    method: "PUT",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8",
                "Authorization": `JWT ${readLoginCookie()}`
            }
    })
    .then(response => {
        if(response['status']==200){
            swal("Success", "Changes were successfull", "success");
        }
        else if(response['status']==404){
            swal("Movie not found");
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


// async function socialsChange(e) {
//     e.preventDefault();
//     await ChangeSocials(readLoginCookie(), twitterInput.value, instaInput.value).then(
//         (response) => {
//             switch (response) {
//                 case 1:
//                     swal("Success", "Changes were successfull", "success");
//                     break;
//                 case 10:
//                     swal("Error!", "An Unknown error occoured, Please refresh the page!", "error");
//                     // alert("Unknown Error occurred")
//                     break;
//             }
//         }
//     )
// }
//SET NEWSLETTER PREFERENES//
preferencesForm.addEventListener('submit', preferencesChange);
const newsLetterCheckbox = preferencesForm.querySelector('.newsLetterCheckbox');
async function preferencesChange(e) {
    e.preventDefault();
    await Changepreferences(readLoginCookie(), newsLetterCheckbox.checked).then(
        (response) => {
            switch (response) {
                case 1:
                    swal("Success", "Changes were successfull", "success");
                    break;
                case 10:
                    swal("Error!", "An Unknown error occoured, Please refresh the page!", "error");
                    // alert("Unknown Error occurred")
                    break;
            }
        }
    )
}
//DELETE ACCOUNT
const deleteAcc = document.querySelector(".deleteAcc");
deleteAcc.addEventListener('click', deleteU);
async function deleteU() {
    swal({
            title: "Are you sure?",
            text: "This will permanently remove your account!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                return swal("Confirm Password", {
                    content: "input",
                }, ).then(pass => {
                    if (pass) {
                        return deleteUser(readLoginCookie(), pass).then(e => {
                            return e;
                        });
                    } else {
                        swal("Error!", "Password is required!", "error");
                        return null;
                    };
                }).then(e => {
                    switch (e) {
                        case 1:
                            //Account deletion was successful
                            eraseLoginCookie();
                            swal({
                                title: "Account deleted, you'll be logged out now",
                                // text: "You clicked the button!",
                                icon: "success",
                                button: "Okay",
                            }).then(() => {
                                logOutUser();
                            })
                            break;
                        case 2:
                            swal("Error!", "Incorrect password", "error");
                            break;
                    }
                })
            } else {
                return;
            }
        });
}