import { useFrame } from '@react-three/fiber';
import { damp } from 'three/src/math/MathUtils';
import { useStore } from '@nanostores/react';
import { ScrollState, ScrollTimeline } from '~/store/scroll';

const DELTA = 0.003;
const SMOOTH = 999999;

export default function CameraScroll() {
  const { progress } = useStore(ScrollState);
  const { timeline } = useStore(ScrollTimeline);
  // gsap.to(':root', {
  //   '--b1': '259 94% 51%',
  //   // backgroundColor
  //   scrollTrigger: { trigger: '#content', start: 'top top', end: 'bottom bottom' },
  //   repeat: -3,
  //   yoyo: true,
  // });
  // console.log('🚀 ~ file: CameraScroll.tsx:12 ~ CameraScroll ~ timeline:', timeline);
  useFrame(({ viewport, camera }) => {
    camera.position['y'] = -damp(camera.position['y'], progress * viewport.height, SMOOTH, DELTA);
  });

  // gsap.to(camera.position, { x: -0.1, y: 1.3, z: 0.7, duration: 2, ease: 'power3.inOut' });

  return <group></group>;
}
