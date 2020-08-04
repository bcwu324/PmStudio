// booking html template========================
document.querySelector("#booking_form").innerHTML = `
        <form action="#" method="POST" id="booking_form_slideDown">
        <span id="form_close_button">&times</span>
        <div class="block" style="text-align:center; margin-bottom:10px; margin-left:20px;"> 預約拍攝表單</div>
            <div class="block">
                <label class="title" for="choose_survice">*選擇服務：</label>
                <select class="title" id="choose_survice" name="choose_survice " required>
                    <option class="service_select" for="01" value="";></option>
                    <option class="service_select" for="01" value="新生兒寫真";>新生兒寫真</option>
                    <option class="service_select" for="02" value="孕媽咪寫真";>孕媽咪寫真</option>
                    <option class="service_select" for="03" value="全家福";>全家福</option>
                    <option class="service_select" for="04" value="藝術照";>藝術照</option>
                    <option class="service_select" for="04" value="畢業照";>畢業照</option>
                    <option class="service_select" for="04" value="婚攝";>婚攝</option>
                    <option class="service_select" for="04" value="結婚週年照";>結婚週年照</option>
                    <option class="service_select" for="04" value="其它";>其它</option>
                </select>
                    
            </div>
            <div class="block">
                <label class="title" for="user_name">*姓名：</label>
                <input type="text" id="user_name" required>
            </div>
            <div class="block">
                <label class="title phone_number" for="phone_number">*電話：</label>
                <input type="text" id="phone_number" required>
            </div>
            <div class="block">
                <label class="title email" for="email">*E-mail：</label>
                <input type="text" id="email" required>
            </div>
            
            <div class="block">
                <label class="title" for="location">預定拍攝地點：</label>
                <input type="text" id="location">
            </div>
            <div class="block">
                <label class="title" for="date">預定拍攝日期：</label>
                <input type="text" id="date">
            </div>
            <div class="block">
                <label class="title" for="note">備註：</label>
                <textarea id="note"></textarea>
            </div>
            <div class="block center">
                <input type="submit" value="送出預約">
            </div>
        </form>
`;

// declare================================================================================
let booking_form = document.getElementById("booking_form");
let form_close_button = document.getElementById("form_close_button");

// Open Form by booking_button clicking===================================================
form_motal = () => {
  booking_form.style.display = "block";
};
for (i = 0; i < document.querySelectorAll(".booking_button").length; i++) {
  document
    .querySelectorAll(".booking_button")
    [i].addEventListener("click", form_motal);
}

// Close Form by X clicking================================================================
form_close_button.onclick = function () {
  booking_form.style.display = "none";
};

// Close Form by Window clicking===========================================================
window.onclick = function (event) {
  if (event.target == booking_form) {
    booking_form.style.display = "none";
  }
};

// validation==============================================================================
$("#booking_form_slideDown").submit(function (e) {
  e.preventDefault();
  $("label").css("color", "black");
  // valide phone
  let phone_number = $("#phone_number").val();
  if (!/(\d[\-]?){6,15}/.test(phone_number)) {
    document.querySelector(".phone_number").style.color = "red";
    alert("請輸入正確的電話號碼");
  }
  // valide email
  let email = $("#email").val();
  if (!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i.test(email)) {
    document.querySelector(".email").style.color = "red";
    alert("請輸入正確的E-mail");
  }
});

// return label to black===================================================================
// $("#booking_form").click(function () {
//   $("label").css("color", "black");
// });
