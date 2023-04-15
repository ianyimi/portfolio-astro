import { useFrame } from '@react-three/fiber';
import { damp } from 'three/src/math/MathUtils';
import { useStore } from '@nanostores/react';
import { ScrollState, ScrollTimeline } from '~/store/scroll';
import { CustomThemes } from '~/store/themes';
import { useEffect } from 'react';
import { useDarkMode } from 'usehooks-ts';
// import resolveConfig from 'tailwindcss/resolveConfig';
// import tailwindConfig from 'tailwind.config.cjs';

const DELTA = 0.003;
const SMOOTH = 999999;

export default function CameraScroll() {
  const { progress } = useStore(ScrollState);
  const { timeline } = useStore(ScrollTimeline);
  const { light, dark } = useStore(CustomThemes);
  const { isDarkMode, enable, disable } = useDarkMode();
  // const tw = resolveConfig(tailwindConfig);
  function handleThemeChange(e: ThemeChangeEvent) {
    console.log('theme change', e.detail);
    if (e.detail) {
      enable();
    } else {
      disable();
    }
  }

  useEffect(() => {
    window.addEventListener('theme-change', handleThemeChange as EventListener);

    timeline.to(':root', {
      '--b1': `${light.secondary}`,
      // backgroundColor: `#ff0000`,
      duration: 1,
      ease: 'none',
      // scrollTrigger: {
      //   trigger: '.section-2',
      //   start: 'top 50%',
      //   end: 'max',
      //   markers: true,
      // },
    });

    return () => {
      window.removeEventListener('theme-change', handleThemeChange as EventListener);
    };
  }, []);
  // console.log('🚀 ~ file: CameraScroll.tsx:12 ~ CameraScroll ~ timeline:', timeline);
  useFrame(({ viewport, camera }) => {
    camera.position['y'] = damp(camera.position['y'], progress * viewport.height, SMOOTH, DELTA);
  });

  return <group></group>;
}
