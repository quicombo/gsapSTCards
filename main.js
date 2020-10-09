function animateFrom(elem, direction){
    direction = direction | 1;  // тип если второй параметр отсутсвует - то 1, если есть, то то самое
    let x = 0;
    let y = direction * 100;
    if( elem.classList.contains('from_left')) {
       x = -100;
       y = 0;
    } else
    if (elem.classList.contains('from_right')) {
        x = 100;
        y = 0;
    }
    gsap.fromTo(elem, { 
        x: x,
        y: y,
        autoAlpha: 0
    },
    {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem,{autoAlpha:0});
}
document.addEventListener("DOMContentLoaded", 
function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".reveal").forEach(function(elem) {
        hide(elem);
        ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -2) },
        onLeave: function() { hide(elem) }
        });
    });
}
);