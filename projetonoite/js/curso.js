function msg() {
  $("#mensagem").addClass("ver");
  setTimeout(function () {
    $("#mensagem").removeClass("ver");
  }, 3000);
}

const searchIcon = document.getElementById("search-icon");
const menu2 = document.querySelector(".menu-2");

searchIcon.addEventListener("click", function () {
  menu2.classList.toggle("show-search-bar");
});
