// for the New item part

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