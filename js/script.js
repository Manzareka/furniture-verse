const items = document.querySelectorAll(".accordion .accordion-item");

items.forEach((item) => {
  const trigger = item.querySelector(".accordion-header");
  trigger.addEventListener("click", () => {
    trigger.nextElementSibling.classList.toggle("active");
  });
});
