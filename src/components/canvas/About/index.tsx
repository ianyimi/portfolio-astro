import { useThree } from '@react-three/fiber';
import CloudOne from './Models/CloudOne';
import { useControls } from 'leva';

export default function About() {
  const { viewport } = useThree();
  return (
    <group position={[0, -viewport.height / 3, 3.5]}>
      <CloudOne position={[0, 0, 0]} />
    </group>
  );
}
