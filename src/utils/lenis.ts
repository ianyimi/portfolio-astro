import Lenis from '@studio-freight/lenis';
import { map } from 'nanostores';
interface ScrollStore {
  top: number;
  progress: number;
}

export const scrollState = map<ScrollStore>({
  top: 0,
  progress: 0,
});

const wrapper = document.getElementById('domContent');
const content = document.getElementById('content');

const ScrollState = {
  top: 0,
  progress: 0,
};

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

  lenis.on('scroll', ({ scroll, progress }: { scroll: number; progress: number }) => {
    ScrollState.top = scroll;
    ScrollState.progress = progress;
    // Is this performant??
    scrollState.setKey('top', scroll);
    scrollState.setKey('progress', progress);
  });
}
