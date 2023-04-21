import { Canvas } from '@react-three/fiber';
import { Preload, AdaptiveDpr, Bvh, PerformanceMonitor } from '@react-three/drei';
import { Suspense } from 'react';
import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import Work from './Work';
import CameraScroll from './CameraScroll';

export default function Scene({ defaultCanvasProps }) {
  const content = document.getElementById('content');
  const contentY = content?.getBoundingClientRect().top;
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
      eventPrefix="client"
      flat
    >
      <Bvh>
        <AdaptiveDpr />
        <Preload all />
        <CameraScroll />
        <pointLight intensity={1.0} position={[5, 3, 5]} />
        <Suspense fallback={null}>
          <Landing />
          <About />
          <Work />
          <Contact />
        </Suspense>
        <PerformanceMonitor />
      </Bvh>
    </Canvas>
  );
}
