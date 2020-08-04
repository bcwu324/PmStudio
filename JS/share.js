$(window).scroll(function () {
  offsetTop01 = document.querySelector(".comment01").offsetTop;
  windowHeight01 = $(window).height();
  scrollTop01 = $(window).scrollTop();
  if (offsetTop01 - windowHeight01 < scrollTop01) {
    document.querySelector(".comment01").style.opacity = "1";
  }
  offsetTop02 = document.querySelector(".comment02").offsetTop;
  windowHeight02 = $(window).height();
  scrollTop02 = $(window).scrollTop();
  if (offsetTop02 - windowHeight02 < scrollTop02) {
    document.querySelector(".comment02").style.opacity = "1";
  }
  offsetTop03 = document.querySelector(".comment03").offsetTop;
  windowHeight03 = $(window).height();
  scrollTop03 = $(window).scrollTop();
  if (offsetTop03 - windowHeight03 < scrollTop03) {
    document.querySelector(".comment03").style.opacity = "1";
  }
});
