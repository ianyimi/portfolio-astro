import Lenis from '@studio-freight/lenis';

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
    console.log(progress);
  });
}

export const useScroll = () => {
  return { top: ScrollState.top, progress: ScrollState.progress };
};
