const profileDropdown = document.querySelector('.userProfile');
const loginRegister = document.querySelector('.loginRegister');
const emailID = document.querySelector('.emailID');

var baseUrl = "http://127.0.0.1:5000/"
jwtToken = readLoginCookie();
console.log(jwtToken);

$(document).ready(function () {
fetch(`${baseUrl}api/v1/current_user`, {
      method: "GET",
      headers: {"Content-type": "application/json; charset=UTF-8",
               "Authorization": `JWT ${readLoginCookie()}`
              },
      })
      .then(response =>response.json()) 
      .then(json => {
          console.log(json['status_code'])
          if(json['status_code']==401){
              console.log(json)
              eraseLoginCookie();
              loginRegister.style.display="block";
              profileDropdown.style.display="none";
              return null;
          }
          else{
            console.log(json);
            // return json;
            if(readLoginCookie()){
               loginRegister.style.display="none";
               profileDropdown.style.display="block";
               emailID.textContent = json['Email'];
            }
            else{
               loginRegister.style.display="block";
               profileDropdown.style.display="none";
            }
         }
      })
      .catch(err => {
         console.log(err);
         loginRegister.style.display="block";
         profileDropdown.style.display="none";
      });

   //#endregion

   var i, stop;
      i = 1;
      stop = 7;
      setInterval(function(){
        if (i > stop){
          return;
        }
        $('#len'+(i++)).toggleClass('bounce');
      }, 500)
   $(window).scroll(function () {
      if ($(this).scrollTop() < 70) {
         $(".navbar").removeClass("navbarNotSoFat");
      } else {
         $(".navbar").addClass("navbarNotSoFat");
      }
   });
});
$('.navTrigger').click(function () {
   $(this).toggleClass('active');
});
   //#region Logout
   const logOutButton = document.querySelector('.logoutUser');
   logOutButton.addEventListener("click",logOutUser);
   async function logOutUser(){
   eraseLoginCookie();
   // location.reload();
   window.location.href = 'Login.html';
   }
   //#endregion
