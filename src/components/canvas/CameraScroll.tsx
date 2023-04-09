import { useFrame } from '@react-three/fiber';
import { damp } from 'three/src/math/MathUtils';
import { useStore } from '@nanostores/react';
import { ScrollState, ScrollTimeline } from '~/store/scroll';
// import { CustomThemes } from '~/utils/themes';
import { useEffect } from 'react';

const DELTA = 0.003;
const SMOOTH = 999999;

export default function CameraScroll() {
  const { progress } = useStore(ScrollState);
  const { timeline } = useStore(ScrollTimeline);
  // const { spaceCadetRed } = useStore(CustomThemes);
  // console.log(spaceCadetRed.theme);

  useEffect(() => {
    // timeline.to(':root', {
    //   '--activeBase100':
    // })
    timeline.to(':root', {
      '--b1': `259 94% 51%`,
      // backgroundColor: `#ff0000`,
      duration: 1,
      ease: 'none',
      // scrollTrigger: {
      //   trigger: '.section-2-scroll-trigger',
      //   start: 'top bottom',
      //   end: 'max',
      //   // scrub: 1,
      //   markers: true,
      // },
    });
  }, []);
  // console.log('🚀 ~ file: CameraScroll.tsx:12 ~ CameraScroll ~ timeline:', timeline);
  useFrame(({ viewport, camera }) => {
    camera.position['y'] = -damp(camera.position['y'], progress * viewport.height, SMOOTH, DELTA);
  });

  return <group></group>;
}
