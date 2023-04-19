import { timeline } from '~/store/scroll';

import { floralWhiteFlameHSL, spaceCadetRedHSL } from './themes';

const TARGET = ':root';
const B1 = '--b1';

export function gsapAnimations() {
  console.log('animations');

  timeline
    .fromTo(TARGET, { [B1]: spaceCadetRedHSL.neutral }, { [B1]: '192 100% 50%' })
    .to(TARGET, { [B1]: spaceCadetRedHSL.neutral })
    .to(TARGET, { [B1]: floralWhiteFlameHSL.neutral });
}
