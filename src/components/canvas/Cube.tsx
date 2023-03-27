import { GroupProps, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const Cube = (props?: GroupProps) => {
  const cube = useRef<THREE.Mesh>(null);
  const [hover, setHover] = useState(false);

  useFrame(() => {
    if (!cube.current) return;
    cube.current.rotation.x += 0.01;
    cube.current.rotation.y += 0.01;
  });

  return (
    <group {...props}>
      <mesh ref={cube} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hover ? 'yellow' : '#0391BA'} />
      </mesh>
    </group>
  );
};

export default Cube;
