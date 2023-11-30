function showContent(id) {
  // Hide all content divs
  hideAllContent();

  // Show the selected content div
  document.getElementById(id).style.display = "block";
}

function hideAllContent() {
  // Hide all content divs
  var contentDivs = document.querySelectorAll('[id^="manajemen-"]');
  contentDivs.forEach(function (div) {
    div.style.display = "none";
  });
}
