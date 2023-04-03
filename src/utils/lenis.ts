import Lenis from '@studio-freight/lenis';

import { scrollState } from '~/store/scroll';

const wrapper = document.getElementById('domContent');
const content = document.getElementById('content');

initScroll();
function initScroll() {
  if (!window || !wrapper || !content) return;
  const lenis = new Lenis({
    wrapper: wrapper,
    content: content,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: 'vertical', // vertical, horizontal
    gestureOrientation: 'vertical', // vertical, horizontal, both
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    // scoller: scroller,
    trigger: '#name',
    start: 'top top',
    end: 'bottom top',
    onEnter: () => console.log('enter'),
    onLeave: () => console.log('leave'),
    markers: true,
  });

  lenis.on('scroll', ({ scroll, progress }: { scroll: number; progress: number }) => {
    // Is this performant??
    scrollState.setKey('top', scroll);
    scrollState.setKey('progress', progress);
    ScrollTrigger.update();
  });
}
