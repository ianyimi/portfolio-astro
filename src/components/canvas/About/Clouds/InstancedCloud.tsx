import { Instance } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Group, MathUtils, Vector3 } from 'three/src/Three';

const RESPAWN_CUTOFF = 5;

export default function InstancedCloud(props: { scale: number } & JSX.IntrinsicElements['group']) {
  const ref = useRef<Group>();
  const currentWorldPosition = useRef(new Vector3());
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.getWorldPosition(currentWorldPosition.current);
    if (currentWorldPosition.current.x > RESPAWN_CUTOFF) {
      ref.current.scale.multiplyScalar(0);
      ref.current.position.x -= 400 - 1 / props.scale;
      gsap.to(ref.current.scale, { x: 1, y: 1, z: 1, duration: 2, ease: 'elastic.out(1, 0.3)' });
    } else {
      ref.current.position.x += 0.0075 / props.scale;
    }
    ref.current.scale.x =
      ref.current.scale.y =
      ref.current.scale.z =
        MathUtils.lerp(ref.current.scale.z, hovered ? 1.1 : 1, 0.1);
    // ref.current.color.lerp(color.set(hovered ? 'red' : 'white'), hovered ? 1 : 0.1);
  });
  return (
    <group {...props}>
      <group scale={0.025 * (props.scale ?? 1)}>
        <Instance
          ref={ref}
          onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
          onPointerOut={(e) => setHover(false)}
        />
      </group>
    </group>
  );
}
