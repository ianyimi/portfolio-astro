import { useThree } from '@react-three/fiber';
import JumpMan from './JumpMan';

export default function Work() {
  const { viewport } = useThree();
  return <group position={[0, (-2 * viewport.height) / 3, 3]}>{/* <JumpMan position={[0.5, -1, -1]} /> */}</group>;
}
