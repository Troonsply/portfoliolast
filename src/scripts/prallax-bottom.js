const container = document.querySelector(".parallax_budda");
const items = container.querySelectorAll(".parallax__item");
function moveLayers(wScroll){
  Array.from(items).forEach(item => {
    const speed = item.dataset.speed;
    if(speed){
      const movePercent = wScroll * speed / 95;
      const transform = `translate3d(0, -${movePercent}%, 0)`;
      item.style.transform = transform;
      item.style.webkitTransform = transform;
    }
  });
}
window.addEventListener('scroll', e => {
  const wScroll = window.pageYOffset;
  moveLayers(wScroll);
});