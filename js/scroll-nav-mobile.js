var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-mobile").classList.remove("show");
  } else {
    document.getElementById("nav-mobile").classList.add("show");
  }
  prevScrollpos = currentScrollPos;
};
