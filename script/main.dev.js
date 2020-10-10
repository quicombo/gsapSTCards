"use strict";

gsap.to('.scroll__icon', {
  y: 50,
  yoyo: true,
  repeat: -1
});

function animateFrom(elem, direction) {
  direction = direction | 1; // тип если второй параметр отсутсвует - то 1, если есть, то то самое

  var x = 0;
  var y = direction * 100;

  if (elem.classList.contains('from_left')) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains('from_right')) {
    x = 100;
    y = 0;
  }

  gsap.fromTo(elem, {
    x: x,
    y: y,
    autoAlpha: 0
  }, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {
    autoAlpha: 0
  });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".reveal").forEach(function (elem) {
    hide(elem);
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function onEnter() {
        animateFrom(elem);
      },
      onEnterBack: function onEnterBack() {
        animateFrom(elem, -2);
      },
      onLeave: function onLeave() {
        hide(elem);
      }
    });
  });
});