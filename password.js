var input = document.getElementById("password");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});


var button = document.getElementById("btn");

var sitepassword = "atticus";

button.onclick = function(){
    if(document.getElementById("password").value == sitepassword)
    location.href= "main.html";
}