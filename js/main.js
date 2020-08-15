//Animation on Scroll
AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: "ease-in-out", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});

// Preloader
function loading() {
  var preLoader = document.getElementById("loader");
  preLoader.style.display = "none";
}
//Type.js
var options = {
  strings: [
    "<span style='border-bottom:3px solid #00acee'>Web Developer</span>.",
    "<span style='border-bottom:3px solid #00acee'>Freelancer</span>.",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  backDelay: 700,
  smartBackspace: true,
};
var typed = new Typed(".element", options);
//Glider JS
const config = {
  type: "carousel",
  startAt: 0,
  perView: 3,
  gap: 10,
  autoplay: 2000,
  hoverpause: true,
  breakpoints: {
    768: {
      perView: 1,
    },
  },
};
new Glide(".glide", config).mount();
//Jquery

$(document).ready(function () {
  //Menu Function
  var menu_button = $("#menu_btn");

  menu_button.click(function () {
    var status = menu_button.attr("data");
    if (status == "hidden") {
      $(".nav_sidebar").addClass("show_menu");
      menu_button.attr("data", "show");
      menu_button.attr("class", "fas fa-times d-lg-none menu_btn");
    } else if (status == "show") {
      $(".nav_sidebar").removeClass("show_menu");
      menu_button.attr("data", "hidden");
      menu_button.attr("class", "fas fa-bars d-lg-none menu_btn");
    }
  });
  //Hide Menu As user clicks on any link or on screen
  $(".nav_link").click(function () {
    menu_button.attr("data", "hidden");
    $(".nav_sidebar").removeClass("show_menu");
    menu_button.attr("class", "fas fa-bars d-lg-none menu_btn");
  });
  //Project Filter
  //Getting filter btn
  var all_btn = $("#all");
  var html_btn = $("#html");
  var js_btn = $("#js");
  var react_btn = $("#react");
  //Getting projects
  var all_projects = $(".all");
  var html_projects = $(".html");
  var js_projects = $(".js");
  var react_projects = $(".react");

  //ALL BTN ACTION
  all_btn.on("click", function () {
    // all_projects.removeClass("hide");
    all_projects.show();
  });

  //HTML BTN ACTION
  html_btn.on("click", function () {
    js_projects.hide();
    react_projects.hide();
    html_projects.show();
  });

  //JS BTN ACTION
  js_btn.on("click", function () {
    html_projects.hide();
    react_projects.hide();
    js_projects.show();
  });

  //react BTN ACTION
  react_btn.on("click", function () {
    html_projects.hide();
    js_projects.hide();
    react_projects.show();
  });
});
