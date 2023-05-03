import { isMobile } from 'react-device-detect';
import EnvironmentHandler from './EnvironmentHandler';
import { useWindowSize } from 'usehooks-ts';
import { Vector3 } from 'three';

import Cube from './Cube';
import Spaceship from './Spaceship';


export default function Landing() {
  const { width } = useWindowSize();
  const isTablet = width < 950
  const spaceshipPos = isMobile ? [0, -0.3, 0.25] : isTablet ? [0, 0, 0.2] : [0.25, 0, 0.2];
  return (
    <group position={[0, -0.25, 4]}>
      {/* <Cube position-x={4} newCamPos={[-2, -1, 3]} />
      <Cube position-x={-4} newCamPos={[2, 1, 3]} /> */}
      <Spaceship scale={(isMobile || isTablet) ? 0.25 : 0.35} position={new Vector3(...spaceshipPos)} />
      <EnvironmentHandler />
    </group>
  );
}
