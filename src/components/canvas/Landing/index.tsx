import EnvironmentHandler from '../EnvironmentHandler';
import Spaceship from './Spaceship';
import Cube from '../Cube';

export default function Landing() {
  return (
    <group position-y={20}>
      <Cube position-x={4} newCamPos={[-2, -1, 3]} />
      <Cube position-x={-4} newCamPos={[2, 1, 3]} />
      <Spaceship position={[0, -1, 2]} />
      <EnvironmentHandler />
    </group>
  );
}
