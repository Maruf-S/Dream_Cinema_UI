var loggedIn = true;
var loginContainer = document.querySelector(".LoginStatus")
var logOutButton = document.querySelector(".logoutLink");

var baseUrl = "http://127.0.0.1:5000/"
jwtToken = readLoginCookie();
console.log(jwtToken);

logOutButton.addEventListener("click",logOutUser);
async function logOutUser(){
eraseLoginCookie();
// location.reload();
window.location.href = 'Login.html';
}
//#region  APIreq
$(document).ready(function () {
    fetch(`${baseUrl}api/v1/current_user`, {
          method: "GET",
          headers: {"Content-type": "application/json; charset=UTF-8",
                   "Authorization": `JWT ${readLoginCookie()}`
                  }
          })
          .then(response =>response.json()) 
          .then(json => {
              if(json['status_code']==401){
                  console.log(json)
                  eraseLoginCookie();
                  loginContainer.innerHTML = 
                  `
                  <a class="nav-link" id="login" href="Login.html">
                      <i class="nav-icon fa fa-sign-in"></i>
                      <p class='ml-2'>
                          Login
                      </p>
                  </a>`;
                  logOutButton.style.display="none";
                  return null;
              }
              else{
                console.log(json);
                // return json;
                if(readLoginCookie()){
                    var username = json['Email'];
                    loginContainer.innerHTML = `        
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                            <img src="https://st3.depositphotos.com/13159112/17145/v/600/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg" class="img-circle elevation-2" alt="User Image">
                        </div>
                        <div class="info">
                            <div class="d-block text-white">${username}</div>
                        </div>
                    </div>`;
                    logOutButton.style.display="block";
                }
                else{
                    loginContainer.innerHTML = 
                    `
                    <a class="nav-link" id="login" href="Login.html">
                        <i class="nav-icon fa fa-sign-in"></i>
                        <p class='ml-2'>
                            Login
                        </p>
                    </a>`;
                    logOutButton.style.display="none";
                }
             }
          })
          .catch(err => {
             console.log(err);
             loginContainer.innerHTML = 
             `
             <a class="nav-link" id="login" href="Login.html">
                 <i class="nav-icon fa fa-sign-in"></i>
                 <p class='ml-2'>
                     Login
                 </p>
             </a>`;
             logOutButton.style.display="none";
          });
        });
       //#endregion