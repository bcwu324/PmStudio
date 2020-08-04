// document.getElementById("arrowBtn").onclick = () => {
//     document.querySelector(".supporting_text").classList.toggle("supporting_text_click");

//     if (document.getElementById("arrowBtn").innerHTML === "keyboard_arrow_down") {
//         document.getElementById("arrowBtn").innerHTML = "keyboard_arrow_up";
//     } else {
//         document.getElementById("arrowBtn").innerHTML = "keyboard_arrow_down";
//     }

// }

//
// for (i = 0; i < document.querySelectorAll(".arrowBtn").length; i++) {
//     console.log(document.querySelectorAll(".arrowBtn")[i].classList)
//     console.log(document.querySelectorAll(".supporting_text")[i].classList)
// }
// console.log(document.querySelector(".supporting_text")[i].classList)

// console.log(document.querySelectorAll(".arrowBtn").length);

for (let i = 0; i < document.querySelectorAll(".arrowBtn").length; i++) {
  document.querySelectorAll(".arrowBtn")[i].onclick = () => {
    document
      .querySelectorAll(".supporting_text")
      [i].classList.toggle("supporting_text_click");
    if (
      document.querySelectorAll(".arrowBtn")[i].innerHTML ===
      "keyboard_arrow_down"
    ) {
      document.querySelectorAll(".arrowBtn")[i].innerHTML = "keyboard_arrow_up";
    } else {
      document.querySelectorAll(".arrowBtn")[i].innerHTML =
        "keyboard_arrow_down";
    }
  };
}
for (let i = 0; i < document.querySelectorAll("img").length; i++) {
  document.querySelectorAll("img")[i].onclick = () => {
    document
      .querySelectorAll(".supporting_text")
      [i].classList.toggle("supporting_text_click");
    if (
      document.querySelectorAll(".arrowBtn")[i].innerHTML ===
      "keyboard_arrow_down"
    ) {
      document.querySelectorAll(".arrowBtn")[i].innerHTML = "keyboard_arrow_up";
    } else {
      document.querySelectorAll(".arrowBtn")[i].innerHTML =
        "keyboard_arrow_down";
    }
  };
}
for (
  let i = 0;
  i < document.querySelectorAll(".supporting_text_left").length;
  i++
) {
  document.querySelectorAll(".supporting_text_left")[i].onclick = () => {
    document
      .querySelectorAll(".supporting_text")
      [i].classList.toggle("supporting_text_click");
    if (
      document.querySelectorAll(".arrowBtn")[i].innerHTML ===
      "keyboard_arrow_down"
    ) {
      document.querySelectorAll(".arrowBtn")[i].innerHTML = "keyboard_arrow_up";
    } else {
      document.querySelectorAll(".arrowBtn")[i].innerHTML =
        "keyboard_arrow_down";
    }
  };
}
