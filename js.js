document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".menu-categories__label");
  
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        toggleTwoClasses(event, "is-visible", "is-hidden", 500);
      });
    });
  });
  

function toggleTwoClasses(event, first, second, timeOfAnimation) {
  let path = event.target.dataset.path;
  let target = document.querySelector(`[data-target='${path}']`);

  if (!target.classList.contains(first)) {
    target.classList.add(first);
    target.classList.remove(second);
  } else {
    target.classList.add(second);
    window.setTimeout(function() {
      target.classList.remove(first);
    }, timeOfAnimation);
  }
}