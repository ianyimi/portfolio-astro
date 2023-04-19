import { timeline } from '~/store/scroll';

const TARGET = ':root';
const B1 = '--b1';

export function gsapAnimations() {
  console.log('animations');

  timeline
    .to(TARGET, {
      [B1]: '192 100% 50%',
      ease: 'none',
    })
    .to(TARGET, {
      [B1]: '206 26% 95%',
      ease: 'none',
    })
    .to(TARGET, {
      [B1]: '0 0% 0%',
      ease: 'none',
    });
  // timeline
  //   .to(TARGET, {
  //     [B1]: '186, 100%, 50%',
  //     duration: 1,
  //     ease: 'none',
  //   })
  //   .to(TARGET, {
  //     [B1]: '233, 17%, 80%',
  //     duration: 1,
  //     ease: 'none',
  //   })
  //   .to(TARGET, {
  //     [B1]: '16, 0%, 20%',
  //     duration: 1,
  //     ease: 'none',
  //   });
}
