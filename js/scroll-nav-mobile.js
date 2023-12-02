let prevScrollPos = window.pageYOffset;
const navMobile = document.getElementById("nav-mobile");

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scroll up
    navMobile.style.transform = "translateY(0)";
  } else {
    // Scroll down
    navMobile.style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScrollPos;
};
