var baseUrl = "http://127.0.0.1:5000/"

// file query
var parrentCarousel = document.querySelector("#innerCarousel");
var newRelease = document.querySelector("#newReleaseParrent");

var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

  function showPanel(panelIndex,colorCode) {
      tabButtons.forEach(function(node){
          node.style.backgroundColor="";
          node.style.color="";
      });
  
  tabPanels.forEach(function(node){
      node.style.display="none";
  });
  tabPanels[panelIndex].style.display="block";
  tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'');


$('.carousel_slider').carousel({
    interval: false,
  });

// end

// api calls for top movies
function getTopMovies() {
  fetch(`${baseUrl}/api/v1/movies`, {
  method: "GET",
  headers: {"Content-type": "application/json; charset=UTF-8"
          }
  })
  .then(response => response.json())
        .then(function(data){
      // *****************************************************************
      // data.forEach(function(movie) {
      //   if(movie["IDMBRating"] > 5){
        // <div class="carousel-item active ">
      //               <div class="row">
      //                   <div class="col-lg-3 col-md-6 col-sm-12 topShowCard">
      //                       <div class="card topShowCard">
      //                           <img class="img-fluid topShowsImage" alt="100%x100%"
      //                               src="{movie["Postor"]}">
      //                           <div class="card-body">
      //                               <h4 class="card-title">{movie["Title"]}</h4>
      //                               <a class="btn topShowBtn" href="cinema.html?id={movie["id"]}" target="_blank">Get Ticket</a>

      //                           </div>

      //                       </div>
      //                   </div>
      //                   <div class="col-lg-3 col-md-6 col-sm-12 topShowCard">
      //                       <div class="card topShowCard">
      //                           <img class="img-fluid topShowsImage" alt="100%x100%" src="{movie["Postor"]}">
      //                           <div class="card-body">
      //                               <h4 class="card-title">{movie["Title"]}</h4>
      //                               <a class="btn topShowBtn" href="cinema.html?id=112" target="_blank">Get Ticket</a>

      //                           </div>
      //                       </div>
      //                   </div>
      //                   <div class="col-lg-3 col-md-6 col-sm-12 topShowCard">
      //                       <div class="card">
      //                           <img class="img-fluid topShowsImage" alt="100%x100%"
      //                               src="{movie["Postor"]}">
      //                           <div class="card-body">
      //                               <h4 class="card-title">{movie["Title"]}</h4>
      //                               <a class="btn topShowBtn" href="cinema.html?id={movie["id"]}" target="_blank">Get Ticket</a>

      //                           </div>
      //                       </div>
      //                   </div>
      //                   <div class="col-lg-3 col-md-6 col-sm-12 topShowCard">
      //                       <div class="card">
      //                           <img class="img-fluid topShowsImage" alt="100%x100%" src="{movie["Postor"]}">
      //                           <div class="card-body">
      //                               <h4 class="card-title">{movie["Title"]}</h4>
      //                               <a class="btn topShowBtn" href="cinema.html?id={movie["id"]}" target="_blank">Get Ticket</a>

      //                           </div>
      //                       </div>
      //                   </div>


      //               </div>
      //           </div>
      // }
      // }
      
      
      // *****************************************************************
      console.log(data)

  }) 
  .catch(err => {
      console.log(err);
      // return `Unknown error occurred${error}`;
  });
}
//#endregion

// Carousel window interval
// $('.innerCarousel').carousel({
//     interval: 1000
// });

// api calls for new movies
function getNewMovies() {
  fetch(`${baseUrl}/api/v1/movies`, {
  method: "GET",
  headers: {"Content-type": "application/json; charset=UTF-8"
          }
  })
  .then(response => response.json())
        .then(function(data){
      // work goes here
      // *****************************************************************
      // for(int i; i<3;i++){
        // data.forEach(function(movie) {

          //   if(i==1 && movie["Genre"] = "Action"){
            // <div class="tabPanel">
        //                   <!-- New releases -->
        //                   <p></p>
        //                   <div class="row">
        //                       <div class="col-lg-3 col-md-6 col-sm-12">
        //                           <div class="card hovereffect">
        //                               <img class="card-img-top"
        //                                   data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
        //                                   alt="Thumbnail [100%x225]" src="{movie["Postor"]}"
        //                                   data-holder-rendered="true">
        //                               <div class="overlay">
        //                                   <a class="info" href="cinema.html?id={movie["id"]}">Get Ticket</a>
        //                               </div>
        //                               <div class="card-body">
        //                                   <h4 class="card-title">{movie["Title"]}</h4>
        //                               </div>
        //                           </div>
        //                       </div>
      
        //                       <div class="col-lg-3 col-md-6 col-sm-12">
        //                           <div class="card hovereffect">
        //                               <img class="card-img-top"
        //                                   data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
        //                                   alt="Thumbnail [100%x225]" src="{movie["Postor"]}"
        //                                   data-holder-rendered="true">
        //                               <div class="overlay">
        //                                   <a class="info" href="cinema.html?id={movie["id"]}">Get Ticket</a>
        //                               </div>
        //                               <div class="card-body">
        //                                   <h4 class="card-title">{movie["Title"]}</h4>
        //                               </div>
        //                           </div>
        //                       </div>
      
        //                       <div class="col-lg-3 col-md-6 col-sm-12">
        //                           <div class="card hovereffect">
        //                               <img class="card-img-top"
        //                                   data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
        //                                   alt="Thumbnail [100%x225]" src="{movie["Postor"]}"
        //                                   data-holder-rendered="true">
        //                               <div class="overlay">
        //                                   <a class="info" href="cinema.html?id={movie["id"]}">Get Ticket</a>
        //                               </div>
        //                               <div class="card-body">
        //                                   <h4 class="card-title">{movie["Title"]}</h4>
        //                               </div>
        //                           </div>
        //                       </div>
      
        //                       <div class="col-lg-3 col-md-6 col-sm-12">
        //                           <div class="card hovereffect">
        //                               <img class="card-img-top"
        //                                   data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
        //                                   alt="Thumbnail [100%x225]" src="{movie["Postor"]}" data-holder-rendered="true">
        //                               <div class="overlay">
        //                                   <a class="info" href="cinema.html?id={movie["id"]}">Get Ticket</a>
        //                               </div>
        //                               <div class="card-body">
        //                                   <h4 class="card-title">{movie["Title"]}</h4>
        //                               </div>
        //                           </div>
        //                       </div>
      
        //                   </div>
      
        //               </div>
        // }
      //   }

      // }
      
      // *****************************************************************
      console.log(data)

  }) 
  .catch(err => {
      console.log(err);
      // return `Unknown error occurred${error}`;
  });
}
//#endregion
