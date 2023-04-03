import { useFrame } from '@react-three/fiber';
import { damp } from 'three/src/math/MathUtils';
import { useStore } from '@nanostores/react';
import { scrollState } from '~/store/scroll';

const DELTA = 0.003;
const SMOOTH = 999999;

export default function CameraScroll() {
  const { progress } = useStore(scrollState);
  useFrame(({ viewport, camera }) => {
    camera.position['y'] = -damp(camera.position['y'], progress * viewport.height, SMOOTH, DELTA);
  });

  // gsap.to(camera.position, { x: -0.1, y: 1.3, z: 0.7, duration: 2, ease: 'power3.inOut' });

  return <group></group>;
}
