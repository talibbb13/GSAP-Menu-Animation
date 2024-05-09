const menuTL = gsap.timeline();
const menu = document.querySelector(".ri-menu-4-line");
const closeMenu = document.querySelector(".ri-close-circle-fill");

menuTL.to(menu, {
    opacity: 0
});
menuTL.to("#menu", {
  transform: "translateX(0%)",
  duration: 0.3,
  ease: "expo.out",
});

menuTL.from("#menu h1", {
  x: 150,
  delay: -0.1,
  opacity: 0,
  duration: 0.3,
  stagger: 0.1,
});
menuTL.pause();

menu.addEventListener("click", function () {
  menuTL.play();
});

closeMenu.addEventListener("click", function () {
    menuTL.reverse()
});
