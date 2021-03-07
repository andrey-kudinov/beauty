window.addEventListener("load", function () {
  // переключалка для indegrients
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".indegrients__caption")[i].onclick = function () {
      document.querySelectorAll(".indegrients__caption").forEach((el) => {
        el.classList.remove("indegrients__caption-active");
      });
      document.querySelectorAll(".indegrients__caption")[i].classList.add("indegrients__caption-active");

      document.querySelectorAll(".indegrients__desc").forEach((el) => {
        el.classList.remove("indegrients__desc_active");
      });
      document.querySelectorAll(".indegrients__desc")[i].classList.add("indegrients__desc_active");
    };
  }
  document.querySelectorAll(".indegrients__caption")[0].classList.add("indegrients__caption-active");
  // открывашки для Подробнее и для карточек в What-is
  // возможно лучше было бы написать через clothest
  for (let i = 0; i < 5; i++) {
    document.querySelectorAll(".js-more-btn")[i].onclick = function () {
      document.querySelectorAll(".js-more-desc")[i].classList.toggle("more-text_opened");
      document.querySelectorAll(".js-more-btn")[i].classList.toggle("btn_opened");
    };
  }
});
