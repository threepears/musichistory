var colors = ["Blue", "Red", "Orange", "Purple", "NavajoWhite", "Aquamarine", "Goldenrod", "Green", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

/*
  YOUR ASSIGNMENT
  ----------------------------------------
  Loop through all the reindeer in the array, and add the 
  name of the reindeer to the single HTML <div> element provided.
  The name of the reindeer should be prepended with the corresponding
  color from the other array.
  
  For example:
    Blue Dasher
    Red Dancer
    etc..
*/

for (var i = 0; i < reindeer.length; i++) {
  var name = colors[i] + " " + reindeer[i];
  var code = "<div style='color: " + colors[i] + ";'>" + name + "</div>"  ;
  hohohoElement.innerHTML = hohohoElement.innerHTML + code;
}