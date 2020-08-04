$(document).ready(function () {
  let carouseContainer_width = $(".carousel-container").width();
  let imgCount = $(".carousel-slide img").length;
  $(".carousel-slide img").width(carouseContainer_width);

  // create dots:===============================================
  for (let j = 0; j < imgCount; j++) {
    $(".carousel_button").append("<span></span>");
  }
  $(`.carousel_button span:nth-child(1)`).addClass("clickMe");

  // resize=======================================================
  $(window).resize(function () {
    carouseContainer_width = $(".carousel-container").width();
    imgCount = $(".carousel-slide img").length;
    $(".carousel-slide")
      .width(carouseContainer_width * imgCount)
      .css({
        left: carouseContainer_width * (i - 1) * -1,
      });
    $(".carousel-slide img").width(carouseContainer_width);
  });

  // button========================================================
  let i = 1;
  // console.log(i);
  $("#prevBtn").click(function () {
    // console.log(i);
    if (i > 1) {
      i--;
      $(".carousel-slide").animate({
        left: carouseContainer_width * (i - 1) * -1,
      });
      $(`.carousel_button span`).removeClass("clickMe");
      $(`.carousel_button span:nth-child(${i})`).addClass("clickMe");
    }
  });
  $("#nextBtn").click(function () {
    // console.log(i);
    if (i < imgCount) {
      i++;
      // console.log(i);

      $(".carousel-slide").animate({
        left: carouseContainer_width * (i - 1) * -1,
      });
      $(`.carousel_button span`).removeClass("clickMe");
      $(`.carousel_button span:nth-child(${i})`).addClass("clickMe");
    }
  });

  //carousel with timer:=========================================
  setInterval(function () {
    i++;
    if (i > imgCount) {
      i = 1;
    }
    // console.log(i);
    $(".carousel-slide").animate({
      left: carouseContainer_width * (i - 1) * -1,
    });
    $(`.carousel_button span`).removeClass("clickMe");
    $(`.carousel_button span:nth-child(${i})`).addClass("clickMe");
  }, 5000);
  $(".carousel_button span").click(function () {
    i = $(this).index() + 1;
    $(".carousel-slide").animate({
      left: carouseContainer_width * (i - 1) * -1,
    });
    $(`.carousel_button span`).removeClass("clickMe");
    $(`.carousel_button span:nth-child(${i})`).addClass("clickMe");
  });
});
