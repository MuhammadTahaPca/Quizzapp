var name = sessionStorage.getItem("name");
var points = sessionStorage.getItem("points");

document.querySelector(".name").innerHTML = name;
document.querySelector(".points").innerHTML = points;
