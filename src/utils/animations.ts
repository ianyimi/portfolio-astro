import { timeline } from '~/store/scroll';

import { floralWhiteFlameHSL, spaceCadetRedHSL } from './themes';

const TARGET = ':root';
const BACKGROUND_COLOR = '--b1';

export function gsapAnimations() {
  console.log('animations');

  timeline
    .fromTo(TARGET, { [BACKGROUND_COLOR]: spaceCadetRedHSL.neutral }, { [BACKGROUND_COLOR]: '192 100% 50%' })
    .to(TARGET, { [BACKGROUND_COLOR]: spaceCadetRedHSL.neutral })
    .to(TARGET, { [BACKGROUND_COLOR]: floralWhiteFlameHSL.neutral });
}
