//JS file to reveal intro for some seconds and the showing the actual page
var timer = 0; //global variable

$(document).ready( function () {

      $("#site").hide(); 
      timer = setInterval( showSite , 3500 ) 

});

function showSite() {
      clearInterval(timer);

      $("#intro").fadeOut();
      $("#site").fadeIn();
}