import { GroupProps, useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';

const DEFAULT_ANIMATION_CONFIG = {
  duration: 2,
  ease: 'power3.inOut',
};

const Cube = (props: { newCamPos: [number, number, number]; restProps?: GroupProps }) => {
  const { newCamPos, ...restProps } = props;
  const cube = useRef<THREE.Mesh>(null);
  const [hover, setHover] = useState(false);
  const { camera } = useThree();

  function transitionCamera() {
    gsap.to(camera.position, { x: newCamPos[0], y: newCamPos[1], z: newCamPos[2], ...DEFAULT_ANIMATION_CONFIG });
    // gsap.to(camera.rotation, { x: 0, y: 0, z: 0, ...DEFAULT_ANIMATION_CONFIG });
  }

  useFrame(() => {
    if (!cube.current) return;
    cube.current.rotation.x += 0.01;
    cube.current.rotation.y += 0.01;
  });

  return (
    <group onClick={transitionCamera} {...restProps}>
      <mesh ref={cube} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hover ? 'yellow' : '#0391BA'} />
      </mesh>
    </group>
  );
};

export default Cube;
