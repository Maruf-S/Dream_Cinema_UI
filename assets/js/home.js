var baseUrl = "http://127.0.0.1:5000/"

// file query
var parrentCarousel = document.querySelector("#topShows");
var parrentCarouse2 = document.querySelector("#topShowsr2");
var parrentCarouse3 = document.querySelector("#topShowsr3");
var parrentCarouse4 = document.querySelector("#topShowsr4");
var newRelease1 = document.querySelector("#newRelease1");
var newRelease2 = document.querySelector("#newRelease2");
var newRelease3 = document.querySelector("#newRelease3");
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
  fetch(`http://127.0.0.1:5000/api/v1/movies`)
  .then(response => response.json())
        .then(function(data){
          console.log(data);
          parrentCarousel.innerHTML = '';
      // *****************************************************************
      var i = 1;
      data.forEach(function(movie) {
        if(movie["IDMBRating"] > 6.0 && i <= 4){
          parrentCarousel.innerHTML  += `
                <div class="col-lg-3 col-md-6 col-sm-12 topShowCard">
                    <div class="card topShowCard">
                        <img class="img-fluid topShowsImage" alt="100%x100%" src="assets/images/${movie.Postor}">
                        <div class="card-body">
                            <h4 class="card-title">${movie.Title}</h4>
                            <a class="btn topShowBtn" href="cinema.html?id=${movie.id}" target="_blank">Get Ticket</a>

                        </div>

                    </div>
                </div>
          `
          i++;
        }
        else if(movie["IDMBRating"] > 6.0 && i <= 8){
          parrentCarouse2.innerHTML  += `
                <div class="col-lg-3 col-md-6 col-sm-12 topShowCard">
                    <div class="card topShowCard">
                        <img class="img-fluid topShowsImage" alt="100%x100%" src="assets/images/${movie.Postor}">
                        <div class="card-body">
                            <h4 class="card-title">${movie.Title}</h4>
                            <a class="btn topShowBtn" href="cinema.html?id=${movie.id}" target="_blank">Get Ticket</a>

                        </div>

                    </div>
                </div>
          `
          i++;
        }
        else if(movie["IDMBRating"] > 6.0 && i <= 12){
          parrentCarouse3.innerHTML  += `
                <div class="col-lg-3 col-md-6 col-sm-12 topShowCard">
                    <div class="card topShowCard">
                        <img class="img-fluid topShowsImage" alt="100%x100%" src="assets/images/${movie.Postor}">
                        <div class="card-body">
                            <h4 class="card-title">${movie.Title}</h4>
                            <a class="btn topShowBtn" href="cinema.html?id=${movie.id}" target="_blank">Get Ticket</a>

                        </div>

                    </div>
                </div>
          `
          i++;
        }
        else if(movie["IDMBRating"] > 6.0 && i <= 16){
          parrentCarouse4.innerHTML  += `
                <div class="col-lg-3 col-md-6 col-sm-12 topShowCard">
                    <div class="card  ">
                        <img class="img-fluid topShowsImage" alt="100%x100%" src="assets/images/${movie.Postor}">
                        <div class="card-body">
                            <h4 class="card-title">${movie.Title}</h4>
                            <a class="btn topShowBtn" href="cinema.html?id=${movie.id}" target="_blank">Get Ticket</a>

                        </div>

                    </div>
                </div>
          `
          i++;
        }
        
        
    
    })

  })
  .catch(err => {
      console.log(err);
      // return `Unknown error occurred${error}`;
  });
};
getTopMovies();
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
          console.log(data)
          newRelease.innerHTML = "";
      // work goes here
      // *****************************************************************
      var i = 1;
      data.forEach(function(movie) {
        if( movie["Genre"].includes("Action") && i <= 4){
          newRelease1.innerHTML +=  `
                    <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card hovereffect">
                        <img class="card-img-top"
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                            alt="Thumbnail [100%x225]" src="assets/images/${movie["Postor"]}"
                            data-holder-rendered="true">
                        <div class="overlay">
                            <a class="info" href="cinema.html?id=${movie["id"]}">Get Ticket</a>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">${movie["Title"]}</h4>
                        </div>
                    </div>
                    </div>
          `
          i++;
        }
        else if(movie["Genre"].includes("Animation") && i <= 8){
          newRelease2.innerHTML +=  `
                  <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="card hovereffect">
                      <img class="card-img-top"
                          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                          alt="Thumbnail [100%x225]" src="assets/images/${movie["Postor"]}"
                          data-holder-rendered="true">
                      <div class="overlay">
                          <a class="info" href="cinema.html?id=${movie["id"]}">Get Ticket</a>
                      </div>
                      <div class="card-body">
                          <h4 class="card-title">${movie["Title"]}</h4>
                      </div>
                  </div>
                  </div>
          `
          i++;
        }
        else if(movie["Genre"].includes("Adventure") && i <= 12){
          newRelease3.innerHTML +=  `
                <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card hovereffect">
                    <img class="card-img-top"
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                        alt="Thumbnail [100%x225]" src="assets/images/${movie["Postor"]}"
                        data-holder-rendered="true">
                    <div class="overlay">
                        <a class="info" href="cinema.html?id=${movie["id"]}">Get Ticket</a>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">${movie["Title"]}</h4>
                    </div>
                </div>
                </div>
          `
          i++;
        }
      


    });
  })
      
      // *****************************************************************
      

  .catch(err => {
      console.log(err);
      // return `Unknown error occurred${error}`;
  });
}
getNewMovies();
      

