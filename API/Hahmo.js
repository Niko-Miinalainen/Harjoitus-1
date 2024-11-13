function Tietoja(){
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      console.log(data.results[0]);

      document.getElementById("tietoja").innerHTML = "<img src=\'" + data.results[0].picture.large + "\'>";
      document.getElementById("tietoja").innerHTML += "<br />"+ data.results[0].gender + " " + data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
      document.getElementById("tietoja").innerHTML += "<br />" + data.results[0].location.street.name + " " + data.results[0].location.street.number;
    } );
}