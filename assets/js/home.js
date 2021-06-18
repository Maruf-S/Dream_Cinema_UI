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
function getMovies() {
  fetch(`${baseUrl}/api/v1/movies`, {
  method: "GET",
  body: JSON.stringify(_data),
  headers: {"Content-type": "application/json; charset=UTF-8"
          }
  })
  .then(response => response.json())
        .then(function(data){
      // work goes here
      console.log(data)

  }) 
  .catch(err => {
      console.log(err);
      // return `Unknown error occurred${error}`;
  });
}
//#endregion