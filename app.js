const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
});
