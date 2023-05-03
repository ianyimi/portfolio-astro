import { map } from 'nanostores';
import type Lenis from '@studio-freight/lenis';

export interface ScrollStore {
  top: number;
  progress: number;
  lenis?: Lenis
}

export const timeline = gsap.timeline();

export const ScrollTimeline = map<{ timeline: gsap.core.Timeline }>({
  timeline: timeline,
});

export const ScrollState = map<ScrollStore>({
  top: 0,
  progress: 0,
  lenis: undefined,
});
