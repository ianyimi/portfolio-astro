import { useFrame } from '@react-three/fiber';
import { damp } from 'three/src/math/MathUtils';
import { useStore } from '@nanostores/react';
import { ScrollState, ScrollTimeline } from '~/store/scroll';
import { CustomThemes } from '~/store/themes';
import { useEffect } from 'react';

const DELTA = 0.003;
const SMOOTH = 999999;

export default function CameraScroll() {
  const { progress } = useStore(ScrollState);
  const { timeline } = useStore(ScrollTimeline);
  const { light } = useStore(CustomThemes);

  useEffect(() => {
    timeline.to(':root', {
      '--b1': `${light.primary}`,
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
  }, [light]);
  // console.log('🚀 ~ file: CameraScroll.tsx:12 ~ CameraScroll ~ timeline:', timeline);
  useFrame(({ viewport, camera }) => {
    camera.position['y'] = -damp(camera.position['y'], progress * viewport.height, SMOOTH, DELTA);
  });

  return <group></group>;
}
