import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { damp } from 'three/src/math/MathUtils';
import { ScrollTicker, useScroll, ScrollState } from '../dom/Scroll';

const DELTA = 0.003;
const SMOOTH = 999999;

export default function CameraScroll() {
  const { top, progress } = useScroll();
  const { camera } = useThree();

  useFrame(({ viewport, camera }) => {
    console.log(progress);
    camera.position['y'] = damp(camera.position['y'], progress * viewport.height, SMOOTH, DELTA);
  });

  // gsap.to(camera.position, { x: -0.1, y: 1.3, z: 0.7, duration: 2, ease: 'power3.inOut' });

  return <group></group>;
}
