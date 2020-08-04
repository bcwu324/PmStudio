// header template================================================
document.querySelector("header").innerHTML = `
        <div class="topbar">
            <!-- <div class="top01"><a href="#">登入</a></div>
            <div class="top02"><a href="#">註冊</a></div> -->
            <div class="top04">
                    <div class="booking_button">
                        <a href="#">立即預約</a>
                    </div>
            </div>

            <div class="top03">
                <div class="community_selection">
                    <a class="community">PM 社群連結</a>
                        <div class="community_list">
                            <div class="fb"><a href="#">facebook</a></div>
                            <div class="ig"><a href="#">Instagram</a></div>
                            <div class="twitter"><a href="#">twitter</a></div>
                            <div class="Youtube"><a href="#">Youtube</a></div>
                            <div class="flickr"><a href="#">flickr</a></div>
                        </div>
                </div>
            </div>
        </div>
        <a href="./index.html">
            <div class="logo"></div>
        </a>
        <div class="hamburger">
            <div class="ham ham_top"></div>
            <div class="ham ham_middle"></div>
            <div class="ham ham_bottom"></div>
        </div>
        <div class="vertical_navs">
            <div><a href="./index.html" id="vertical_nav_index">首頁</a></div>
            <hr class="vertical_navs_hr">
            <div><a href="./Service.html" id="vertical_nav_service">服務內容</a></div>
            <hr class="vertical_navs_hr">
            <div><a href="./Album.html" id="vertical_nav_album">精選作品</a></div>
            <hr class="vertical_navs_hr">
            <div><a href="./Aboutus.html" id="vertical_nav_aboutus">關於我們</a></div>
            <hr class="vertical_navs_hr">
            <div><a href="./Customer.html" id="vertical_nav_customer">訂單資訊</a></div>
        </div>
        <nav>
            <div><a href="./index.html" id="nav_index">首頁</a></div>
            <div><a href="./Service.html" id="nav_service">服務內容</a></div>
            <div><a href="./Album.html" id="nav_album">精選作品</a></div>
            <div><a href="./Aboutus.html" id="nav_aboutus">關於我們</a></div>
            <div><a href="./Customer.html" id="nav_customer">訂單資訊</a></div>
        </nav>
`;
// community_selection======================================================================
document.querySelector(".community_selection").onclick = () => {
  document
    .querySelector(".community_list")
    .classList.toggle("community_list_active");
};

// vertical_navs=================================================
document.querySelector(".hamburger").onclick = () => {
  document
    .querySelector(".vertical_navs")
    .classList.toggle("vertical_navs_active");
  document.querySelector(".hamburger").classList.toggle("active");
};

// active button=================================================
// $("nav div a").mouseup(function () {
//   $(this).addClass("activeNav");
// });
