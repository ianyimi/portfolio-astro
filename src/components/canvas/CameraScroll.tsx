import { useFrame, useThree } from '@react-three/fiber';
import { damp } from 'three/src/math/MathUtils';
import { useStore } from '@nanostores/react';
import { ScrollState, ScrollTimeline } from '~/store/scroll';
import { CustomThemes } from '~/store/themes';
import { useEffect, useRef } from 'react';
import { useDarkMode } from 'usehooks-ts';
// import resolveConfig from 'tailwindcss/resolveConfig';
// import tailwindConfig from 'tailwind.config.cjs';

const DELTA = 0.003;
const SMOOTH = 999999;

export default function CameraScroll() {
  const { progress } = useStore(ScrollState);
  const { timeline } = useStore(ScrollTimeline);
  const { light, dark } = useStore(CustomThemes);
  const { camera, viewport } = useThree();
  const { isDarkMode, enable, disable } = useDarkMode();

  // const tw = resolveConfig(tailwindConfig);
  function handleThemeChange(e: MutationRecord[]) {
    console.log(e);
    // console.log('theme change', e.detail);
    // if (e.detail) {
    //   enable();
    // } else {
    //   disable();
    // }
  }

  useEffect(() => {
    const root = document.querySelector(':root');
    if (!root) return;
    console.log(root);
    const observer = new MutationObserver((event) => handleThemeChange(event));

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['classList'],
      subtree: true,
      childList: false,
      characterData: false,
    });
    // window.addEventListener('theme-change', handleThemeChange as EventListener);

    // timeline.to(':root', {
    //   '--b1': `${light.secondary}`,
    //   duration: 1,
    //   ease: 'none',
    // });

    return () => {
      // window.removeEventListener('theme-change', handleThemeChange as EventListener);
    };
  }, []);
  // console.log('🚀 ~ file: CameraScroll.tsx:12 ~ CameraScroll ~ timeline:', timeline);
  useFrame(({ viewport, camera }) => {
    camera.position['y'] = -damp(camera.position['y'], progress * viewport.height, SMOOTH, DELTA);
  });

  return <group></group>;
}
