// open modal======================================================
const imgs = document.querySelectorAll("img");

// for (i = 0; i < imgs.length; i++) {
//   imgs[i].onclick = function () {
//     document.querySelector(".modal").style.display = "block";
//     document.querySelector(".modal_img").src = event.target.src;
//     });
//   };
// }
$("img").click(function () {
  let imagSrc = $(this).attr("src");
  $(".modal").fadeIn(200);
  $(".modal_img").attr("src", imagSrc).fadeIn(200);
});
// close modal=======================================================
document.querySelector(".modal").onclick = function () {
  document.querySelector(".modal").style.display = "none";
};

document.querySelector(".modal_img_closeBtn").onclick = () => {
  document.querySelector(".modal").style.display = "none";
};
