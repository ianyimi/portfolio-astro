import { useThree } from '@react-three/fiber';
import Clouds from './Clouds';

export default function About() {
  const { viewport } = useThree();
  return (
    <group position={[0, -viewport.height / 3, 3.5]}>
      <Clouds position={[0, 0, 0]} />
    </group>
  );
}
