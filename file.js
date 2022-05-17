var button = document.getElementById("btn");

button.onclick = function(){
   var first = document.getElementById("fname").value;
   var last = document.getElementById("lname").value;

   document.getElementById("Ofname").innerText = first;
   document.getElementById("Olname").innerText = last;
   event.preventDefault();
}

