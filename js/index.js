function showDiv(divId) {
  var divs = ["chatai", "kalkulator", "ourContact"];

  // Hide all divs initially
  divs.forEach(function (id) {
    document.getElementById(id).style.display = "none";
  });

  // Show the clicked div
  document.getElementById(divId).style.display = "block";
}
