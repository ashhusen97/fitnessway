$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".menu").toggleClass("menu-active");
    $(".hamburger").toggleClass("hamburger-active");
    $(".hamburger .top").toggleClass("hamburger-top");
    $(".hamburger .center").toggleClass("hamburger-center");
    $(".hamburger .bottom").toggleClass("hamburger-bottom");
  });
});
