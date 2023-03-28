import { useThree } from '@react-three/fiber';

export default function Camera() {
  const { camera } = useThree();

  // gsap.to(camera.position, { x: -0.1, y: 1.3, z: 0.7, duration: 2, ease: 'power3.inOut' })

  return <group></group>;
}
