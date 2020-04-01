import gsap from "gsap";

let tl = gsap.timeline();


const animation = (completeAnimation, title, title2) => {

  tl.from([title.current, title2.current], 1, {
    y: 100,
    ease: "power4.out",
    delay: 0.5,
    skewY: 7,
    stagger: {
      amount: 0.3 // chain elements delay
    }
  }).to('.intro-overlay', 1, {
    autoAlpha: 0,
    ease: "expo.inOut"
  }).to("body", 0, {
    css: { "overflow-y": "auto" },
    onComplete: completeAnimation
  });

  // completeAnimation();
  
}

export default animation