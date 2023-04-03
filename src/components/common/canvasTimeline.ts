import { map } from 'nanostores';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export interface CanvasTimelineStore {
  canvasTimeline: unknown;
}

gsap.registerPlugin(ScrollTrigger);
const content = document.getElementById('content');

export const canvasTimelineState = map<CanvasTimelineStore>({
  canvasTimeline: gsap.timeline({
    scrollTrigger: {
      trigger: '#content',
      pin: true,
      scrub: 1,
      start: () => 'top top',
      end: () => 'bottom bottom',
      onUpdate: (self) => {
        console.log(
          'progress:',
          self.progress.toFixed(3),
          'direction:',
          self.direction,
          'velocity',
          self.getVelocity()
        );
      },
    },
  }),
});
