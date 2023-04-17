import Lenis from '@studio-freight/lenis';

import { ScrollState, ScrollTimeline } from '~/store/scroll';

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

  ScrollTrigger.create({
    animation: ScrollTimeline.get().timeline,
    scroller: wrapper,
    trigger: content,
    scrub: 0.25,
    start: 'top top',
    end: 'bottom bottom',
    snap: 1 / 3,
    // onEnter: () => console.log('enter'),
    // onLeave: () => console.log('leave'),
    markers: false,
  });

  lenis.on('scroll', ({ scroll, progress }: { scroll: number; progress: number }) => {
    // Is this performant??
    ScrollTrigger.update();
    ScrollState.setKey('top', scroll);
    ScrollState.setKey('progress', progress);
  });
}
