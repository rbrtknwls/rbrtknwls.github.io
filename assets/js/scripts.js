

var text = ["Websites", "Applets", "Solutions", "Registration Systems", "Data Parsers", "Calculators", "Games", "Simulations"];
var counter = 1;
var elem = document.getElementById("fluxtext");
var inst = setInterval(change, 2000);

function change() {
  elem.innerHTML = " " + text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}


