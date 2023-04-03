import { map } from 'nanostores';

export interface TimelineStore {
  canvasTimeline: unknown;
}

export const canvasTimelineState = map<TimelineStore>({
  canvasTimeline: gsap.timeline({
    scrollTrigger: {
      trigger: '#content',
      // pin: true,
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
