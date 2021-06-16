var postorImage = document.querySelector(".poster");
var movieTitle = document.querySelector(".movieTitle");
var movieRelease = document.querySelector(".releaseDate");
var productionCompany = document.querySelector(".prodCompany");
var IDMBrating = document.querySelector(".ratingOverall");
var ratingStarsContainner = document.querySelector(".ratingStarsContainner");
var genereContainer = document.querySelector(".sgeneros");
var movieDesc = document.querySelector(".desc");
var availableTickets = document.querySelector(".availaibleTickets");
var buyTicketsButton = document.querySelector(".getTicket");
var trailer = document.querySelector(".videoTrailer");
var numComments  = document.querySelector(".commentsNum");
var commentsContainer = document.querySelector(".comments");
var commentForm = document.querySelector("#comment");
var commentArea = commentForm.querySelector(".commentArea");
buyTicketsButton.addEventListener('click',buyTickets);
commentForm.addEventListener('submit',submitComment);
//Reference to all comments
var allComments;
var movId;
var movie;
async function startUp(){
    //Read vid Id from the URL
const urlParams = new URLSearchParams(window.location.search);
movId = Number(urlParams.get('id'));
movie  = await getMovie(movId).then(document =>{
    if(document !=6 ){
        //Movie exists
        //6 is the error code for object doesnot exist
        return document;
    }
    else{
        //Page not found
        window.location.href = "404.html";

    }
})
allComments = getComments();
document.title = `${movie['name']} | Dream Cinema` ;
postorImage.src = `assets/images/Data/postors/${movie['postor']}`;
document.querySelector('body').style.cssText = 
`background:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(assets/images/Data/covers/${movie['background']});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: fixed
`;
if(movie['ticket']!=="Available"){
  //You can't buy the tickets
  buyTicketsButton.style.display = "none";
}
movieTitle.innerText = movie['name'];
movieRelease.innerText = movie['release'];
productionCompany.innerText = movie['aired'];
IDMBrating.innerText = movie['idmbRating'];
//SetUpRating
for (let index = 0; index < parseInt(movie['idmbRating'], 10); index++) {
    var gen = document.createElement('span');
    gen.innerHTML = `<i class="fa fa-star px-1"></i>`
    ratingStarsContainner.appendChild(gen);
}
setUpComments();
//ADDING GENRES
var genre = movie['genre'];
genre.forEach(element => {
    var gen = document.createElement('span');
    gen.innerHTML = `<a class="genere pl-2">${element}</a>`
    genereContainer.appendChild(gen);
});
/////////////
movieDesc.innerText = movie['desc'];
availableTickets.innerText = movie['ticket'];
trailer.src = movie['trailer'];
}
startUp();
async function setUpComments(){
    //Empty the comment container
    commentsContainer.innerHTML = '';
    allComments = await getComments();
    var commentsLen = 0;
    allComments.forEach(element => {
        if(element['movId']===movId){
            numComments.innerText = `(${++commentsLen}) Comments`;
            var comU = document.createElement("div");
            comU.innerHTML = `<div class="media my-4">
            <img class="align-self-start rounded-circle mr-3" style="max-width: 64px;" src="https://st3.depositphotos.com/13159112/17145/v/600/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg" alt="User">
            <div class="media-body pl-3 leftBorder">
              <h5 class="mt-0 text-white">${element['email']}</h5>
              ${element['comment']}
            </div>
            <div class="text-muted d-inline cstext">${element['date']}</div>
          </div>  `
          commentsContainer.appendChild(comU);
        }
    });
}
async function submitComment(e){
    e.preventDefault();
    var userName = readLoginCookie();
    if(!readLoginCookie()){
        userName = "Anonymous user"
    }
    var commen = commentArea.value;
    await addComment(userName, movId,commen);
    allComments = await getComments();
    setUpComments();
}
//#endregion
function buyTickets(){
    if(!readLoginCookie()){
        //User not logged in? send him to the login page
        window.location.href ='Login.html?LogReq=1';
        return;
    }
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success mx-2',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirm order',
        text: `Are you sure you want to buy a ticket to ${movie['name']} ?`,
        icon: 'info',
        showCancelButton: true,
        cancelButtonText: 'No, cancel',
        confirmButtonText: 'Yes, Proceed',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            buyTicket(readLoginCookie(),movie['id']).then(
                guid =>{
                    if(guid){
                        swalWithBootstrapButtons.fire(
                            'Ticket bought successfully',
                            `Thankyou for working with us, your digital ticket will be sent to you next as well as a copy to ${readLoginCookie()}`,
                            'success'
                          ).then(
                            e =>{
                                Swal.fire({
                                    html:
                                    `<div>Ticket ID : <b>${guid}</b></div>
                                    <div class="alert alert-warning mt-2" role="alert">
                                    Please <span style='color: red;'>do not</span> share this QR code or ticket ID with anyone and Make sure to have a copy of this with you when you visit us, hope you catch a great show :)
                                    </div>
                                    `,
                                    imageUrl: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${guid}`,
                                    imageWidth: 300,
                                    imageHeight: 300,
                                    imageAlt: 'Ticket ID',
                                  })
                            }
                        )
                    }
                    else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Sorry, Something went wrong. Please Try again later!',
                            footer: `<a href='contactUs.html'>Report this issue.</a>`
                          })
                }
                }
            )


        }
        else{
          swalWithBootstrapButtons.fire(
            'Transaction canceled',
            'Purchase canceled by the user',
            'error'
          )
        }
      })
}
const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;
//Even though screening dates are stored on the database since the databases are static we''ve decided to load a demo
let targetDate = "Mar 9, 2021 04:00:00";
countDown = new Date(targetDate).getTime();
setInterval(() => {
let now = new Date().getTime();
distance = countDown - now;
document.getElementById("days").innerText = Math.floor(distance / (day)),
  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
}, 1000);
