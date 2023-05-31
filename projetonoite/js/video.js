const menuItems = document.querySelectorAll(".menu-item");
const secoes = document.querySelectorAll(".menu-secoes > .container > div");

menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    const section = this.getAttribute("data-section");

    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });
    this.classList.add("active");

    secoes.forEach((secao) => {
      secao.style.display = "none";
    });
    document.querySelector(`.secao-${section}`).style.display = "block";
  });
});
