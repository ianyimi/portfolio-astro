import { Canvas, events } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Suspense } from 'react';
import Cube from './Cube';
import Spaceship from './Spaceship';

export default function LCanvas({ defaultCanvasProps }) {
  const hero = document.getElementById('hero');
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
      eventSource={hero}
      // @ts-ignore
      onCreated={({ gl, state }) => {
        if (state) state.events.connect(hero);
        // gl.setClearColor('#252934');
      }}
    >
      {/*<LControl/>*/}
      {/* <Preload all/> */}

      <pointLight intensity={1.0} position={[5, 3, 5]} />
      <Cube position-x={4} />
      <Cube position-x={-4} />
      <Suspense fallback={null}>
        <Preload all />
        <Spaceship />
      </Suspense>
    </Canvas>
  );
}
