let stars = document.querySelector('.stars')
let rightSideImg = document.querySelector('.introduction > .right-side')
let leftSideImg = document.querySelector('.introduction > .right-side')
let text = document.querySelector('.text')
let enrollBtn = document.querySelector('.enroll')

window.addEventListener('scroll', function() {
    let value = window.scrollY
    stars.style.left = value*0.25 + "px"
    text.style.marginRight = value*6.25 + "px"
    enrollBtn.style.marginTop = value*1.5 + "px"
})



// SCROLLING

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("vertical");
const col_left = document.querySelector(".col_left");
const timeln = gsap.timeline({ paused: true });

timeln.fromTo(col_left, {y: 0}, {y: '170vh', duration: 1, ease: 'none'}, 0);

const scroll_1 = ScrollTrigger.create({
    animation: timeln,
    trigger: section_1,
    start: 'top top',
    end: 'bottom center',
    scrub: true
});

const section_2 = document.getElementById("horizontal");
let box_items = gsap.utils.toArray(".horizontal__item");

gsap.to(box_items, {
  xPercent: -100 * (box_items.length - 1),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_2,
    pin: true,
    scrub: 3,
    snap: 1 / (box_items.length - 1),
    end: "+=" + section_2.offsetWidth
  }
});


let demo = new CountUp('myTargetElement', 7457);
if (!demo.error) {
demo.start();
document.querySelector('.count').innerText = demo
} else {
console.error(demo.error);
}