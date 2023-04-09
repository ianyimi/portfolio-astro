import { useFrame } from '@react-three/fiber';
import { damp } from 'three/src/math/MathUtils';
import { useStore } from '@nanostores/react';
import { ScrollState, ScrollTimeline } from '~/store/scroll';
import { spaceCadetRedHSL } from '~/utils/themes';

const DELTA = 0.003;
const SMOOTH = 999999;

export default function CameraScroll() {
  const { progress } = useStore(ScrollState);
  const { timeline } = useStore(ScrollTimeline);

  // gsap.to(':root', {
  //   '--b1': `259 94% 51%`,
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: '#content',
  //     start: 'top top',
  //     end: 'bottom bottom',
  //     scrub: 1,
  //     markers: true,
  //   },
  // });
  // console.log('🚀 ~ file: CameraScroll.tsx:12 ~ CameraScroll ~ timeline:', timeline);
  useFrame(({ viewport, camera }) => {
    camera.position['y'] = -damp(camera.position['y'], progress * viewport.height, SMOOTH, DELTA);
  });

  return <group></group>;
}
