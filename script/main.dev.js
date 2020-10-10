"use strict";

function animateFrom(elem, direction) {
  direction = direction | 1; // тип если второй параметр отсутсвует 
  //- то 1, если есть, это значит что мы возвращаемся снизу страницы и элемент
  // появляется сверху)

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
  gsap.registerPlugin(ScrollTrigger); //регистрируем плагин скролтригер
  gsap.utils.toArray(".reveal").forEach(function (elem) { //всё в массив (шоб для всех)
    hide(elem); //прячем если не во вью порте
    ScrollTrigger.create({ //создаём скролл тригер
      trigger: elem, // тригер для начала анимации (наш элемент)
      onEnter: function onEnter() { // если появляется во вьюпорте запускаем
        animateFrom(elem);
      },
      onEnterBack: function onEnterBack() { //если возвращаемся и появляемся во вьюпорте
        animateFrom(elem, -2);
      },
      onLeave: function onLeave() { //прячем, если не во вьюпорте
        hide(elem);
      }
    });
  });
});