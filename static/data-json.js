var movieContainer = document.getElementById("movie-info");
var tbl = document.getElementById("tbl");

var img = document.createElement("img");
img.src = "static/img/tomholland.jpg";
var src = document.getElementById("img");
src.appendChild(img);

//set dynamics of picture
img.style.height = "500px";
img.style.width = "400px";

showTable();


function showTable(){
  var movieRequest = new XMLHttpRequest();                 // Create XMLHttpRequest object
  movieRequest.open('GET', 'static/movies.json', true);

  movieRequest.onload = function() {                       // When readystate changes
    var movieData = JSON.parse(movieRequest.responseText);
    render10HTML(movieData);
  };

  movieRequest.send(null);
}

//this is what i am posting ot the screen
function render10HTML(data){
  var htmlString = "";
  //loop to just show 10
  htmlString += "<table>";
  htmlString += "<tr> <th>Title</th> <th>Year</th> <th>Cast</th> <th>Genre</th>  </tr> <br>";
  for(i=0; i< 1000;i++){
    htmlString += "<tr> <th>"+ data[i].title+ "</th> <th>" +data[i].year+ "</th> <th>" + data[i].cast+ "</th> <th>" + data[i].genres + "</th> </tr>";
  }
  htmlString += "</table>";
  movieContainer.insertAdjacentHTML('beforeend', htmlString);
}

