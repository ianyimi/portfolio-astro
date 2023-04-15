import { useThree } from '@react-three/fiber';
import Cctvs from './Cctvs';

export default function Contact() {
  const { viewport } = useThree();
  return (
    <group position-y={-viewport.height}>
      <Cctvs position={[0, -1.6, 3.5]} />
    </group>
  );
}
