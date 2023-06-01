let string = "";
let input = document.getElementById("input-digit");
let buttons = document.querySelectorAll(".btn-calc");
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    
    } 
    else if (e.target.innerHTML == "AC") {
        string = ""
        document.querySelector("input").value = string;
      
      } 
      else if (e.target.innerHTML == "DEl") {
        string = string.substring(0, string.length-1);
        document.querySelector("input").value = string;
      
      } 
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
     
      }
  });
});

$(document).ready(function name() {
  function add() {
    $(".copied").addClass("bounce-effect");
  }
  function remove() {
    $(".copied").removeClass("bounce-effect");
  }

  $(".copy-btn").click(function () {
    $("#textField").select();
    document.execCommand("copy");
    add();
    setTimeout(remove, 800);
  });
});
