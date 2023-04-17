import { timeline } from '~/store/scroll';

const B1 = '--b1';

export function gsapAnimations(target: string) {
  if (!target) return;
  console.log('animations');
  gsap.registerPlugin(ScrollTrigger);
  timeline
    .to(target, {
      [B1]: '186, 100%, 50%',
      duration: 1,
      ease: 'none',
    })
    .to(target, {
      [B1]: '233, 17%, 80%',
      duration: 1,
      ease: 'none',
    })
    .to(target, {
      [B1]: '16, 0%, 20%',
      duration: 1,
      ease: 'none',
    });
}
