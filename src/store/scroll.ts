import { map } from 'nanostores';

export interface ScrollStore {
  top: number;
  progress: number;
}

gsap.registerPlugin(ScrollTrigger);
export const timeline = gsap.timeline();

export const ScrollTimeline = map<{ timeline: gsap.core.Timeline }>({
  timeline: timeline,
});

export const ScrollState = map<ScrollStore>({
  top: 0,
  progress: 0,
});
