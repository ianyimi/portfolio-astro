import { useFrame, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { damp } from 'three/src/math/MathUtils';
import { ScrollTicker, ScrollState } from '../dom/Scroll';
import { useStore } from '@nanostores/react';
import { scrollState } from '~/utils/lenis';

const DELTA = 0.003;
const SMOOTH = 999999;

gsap.registerPlugin(ScrollTrigger);

export default function Camera() {
  const { progress } = useStore(scrollState);

  ScrollTrigger.create({
    // trigger: '.content',
    scroller: '#content',
    start: 'top top',
    // endTrigger: '#otherID',
    end: 'bottom 50%+=100px',
    // onToggle: (self) => console.log('toggled, isActive:', self.isActive),
    onUpdate: (self) => {
      console.log('progress:', self.progress.toFixed(3), 'direction:', self.direction, 'velocity', self.getVelocity());
    },
  });

  // Lenis ScrollTicker Logic
  useFrame(({ viewport, camera }) => {
    camera.position['y'] = -damp(camera.position['y'], progress * viewport.height, SMOOTH, DELTA);
  });

  // gsap.to(camera.position, { x: -0.1, y: 1.3, z: 0.7, duration: 2, ease: 'power3.inOut' });

  return <group></group>;
}
