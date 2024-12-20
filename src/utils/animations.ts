import gsap, { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

interface AnimationProps {
  duration?: number;
  ease?: string;
  [key: string]: any;
}

interface ScrollProps {
  trigger?: string | Element;
  toggleActions?: string;
  start?: string;
  [key: string]: any;
}

export const animateWithGsap = (
  target: string | Element,
  animationProps: AnimationProps,
  scrollProps?: ScrollProps
): void => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  rotationRef: React.MutableRefObject<{ rotation: { y: number } }>,
  rotationState: number,
  firstTarget: string | Element,
  secondTarget: string | Element,
  animationProps: AnimationProps
): void => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<'
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<'
  );
};
