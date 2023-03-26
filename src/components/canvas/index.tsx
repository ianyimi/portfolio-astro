import { Canvas, events } from '@react-three/fiber';
import Cube from './Cube';

export default function LCanvas({ defaultCanvasProps }) {
  const hero = document.getElementById('hero');
  return (
    <Canvas
      {...defaultCanvasProps}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        overflow: 'hidden',
      }}
      // eventSource={hero}
      // @ts-ignore
      onCreated={({ gl, state }) => {
        if (state) state.events.connect(hero);
        // gl.setClearColor('#252934');
      }}
    >
      {/*<LControl/>*/}
      {/* <Preload all/> */}

      <pointLight intensity={1.0} position={[5, 3, 5]}></pointLight>
      <Cube />
    </Canvas>
  );
}
