import gsap from 'gsap';

let tl = gsap.timeline();

const animation = (completeAnimation, titleRef, title2Ref, overlayRef) => {
  // Chrome scroll behavior
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  //reset scrollbar position
  document.getElementsByTagName('body')[0].scrollIntoView({
    block: 'start',
  });

  tl.from([titleRef.current, title2Ref.current], 0.75, {
    y: 120,
    ease: 'power4.out',
    delay: 0.5,
    skewY: 7,
    stagger: {
      amount: 0.3, // chain elements delay
    },
  })
    .to(overlayRef.current, 1, {
      autoAlpha: 0,
      ease: 'expo.inOut',
    })
    .to('body', 0, {
      css: { 'overflow-y': 'auto' },
      onComplete: completeAnimation,
    });
};

export default animation;
