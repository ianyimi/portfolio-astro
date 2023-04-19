import { useThree } from '@react-three/fiber';
import CloudOne from './Models/CloudOne';

export default function About() {
  const { viewport } = useThree();
  return (
    <group position={[0, -viewport.height / 3, 3.5]}>
      <CloudOne scale={0.5} position={[1, 0.5, 0]} />
    </group>
  );
}
