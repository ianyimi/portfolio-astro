// https://github.com/studio-freight/lenis
// yarn add @studio-freight/lenis
// 1 - wrap <Component {...pageProps} /> with <Scroll /> in _app.jsx
// 2 - add <ScrollTicker /> wherever in the canvas
// 3 - enjoy
import { addEffect, useFrame } from '@react-three/fiber';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import { useRef } from 'react';
import { MathUtils } from 'three';

export const ScrollState = {
  top: 0,
  progress: 0,
};

const { damp } = MathUtils;

export default function Scroll({ children }) {
  const content = useRef(null);
  const wrapper = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: wrapper.current,
      content: content.current,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical', // vertical, horizontal
      gestureOrientation: 'vertical', // vertical, horizontal, both
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ({ scroll, progress }) => {
      ScrollState.top = scroll;
      ScrollState.progress = progress;
    });
    const effectSub = addEffect((time) => lenis.raf(time));
    return () => {
      effectSub();
      lenis.destroy();
    };
  }, [wrapper.current, content.current]);

  return (
    <div
      id="wrapper"
      ref={wrapper}
      style={{
        position: 'absolute',
        overflowX: 'hidden',
        width: '100%',
        height: '100%',
        top: 0,
      }}
    >
      <div
        id="content"
        ref={content}
        style={{
          position: 'relative',
          minHeight: '200vh',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export const useScroll = () => {
  return { top: ScrollState.top, progress: ScrollState.progress };
};

const DELTA = 0.003;

export const ScrollTicker = ({ smooth = 9999999, axis = 'y', reverse = false }) => {
  useFrame(({ viewport, camera }) => {
    camera.position[axis] = damp(
      camera.position[axis],
      (reverse ? 1 : -1) * ScrollState.progress * (axis !== 'y' ? viewport.width : viewport.height),
      smooth,
      DELTA
    );
  });

  return null;
};
