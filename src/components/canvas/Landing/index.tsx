import EnvironmentHandler from './EnvironmentHandler';

import Cube from './Cube';
import Spaceship from './Spaceship';

export default function Landing() {
  return (
    <group position={[0, 0.35, 4]}>
      {/* <Cube position-x={4} newCamPos={[-2, -1, 3]} />
      <Cube position-x={-4} newCamPos={[2, 1, 3]} /> */}
      <Spaceship scale={0.35} />
      <EnvironmentHandler />
    </group>
  );
}
