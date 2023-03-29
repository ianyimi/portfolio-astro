import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Suspense } from 'react';
import Cube from './Cube';
import Spaceship from './Spaceship';
import Camera from './Camera';
import AmbientParticles from './AmbientParticles';
import EnvironmentHandler from './EnvironmentHandler';
import { ScrollTicker } from '../dom/Scroll';
import { useScroll } from '@react-three/drei';

export default function Scene({ defaultCanvasProps }) {
  const content = document.getElementById('content');
  useScroll();
  return (
    <Canvas
      id="canvas"
      dpr={window.devicePixelRatio}
      {...defaultCanvasProps}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        overflow: 'hidden',
      }}
      eventSource={content}
      // @ts-ignore
      // onCreated={({ gl }) => {
      //   gl.setClearColor('#252934');
      // }}
    >
      {/*<LControl/>*/}
      <Preload all />
      <ScrollTicker />
      <pointLight intensity={1.0} position={[5, 3, 5]} />
      <Cube position-x={4} />
      <Cube position-x={-4} />
      <Suspense fallback={null}>
        <Spaceship position={[0, -1, 2]} />
        {/* <Camera /> */}
        <EnvironmentHandler />
      </Suspense>
    </Canvas>
  );
}
