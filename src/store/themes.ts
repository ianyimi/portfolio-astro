import colorFunctions from 'daisyui/src/colors/function';
import { map } from 'nanostores';

// const colorFunctions = import("daisyui/src/colors/function");

const spaceCadetRed = colorFunctions.convertToHsl({
  primary: '#2b2d42',
  secondary: '#8d99ae',
  accent: '#ef233c',
  neutral: '#edf2f4',
  'base-100': '#ffffff',
  info: '#3abff8',
  success: '#36d399',
  warning: '#fbbd23',
  error: '#d90429',
});

const floralWhiteFlame = colorFunctions.convertToHsl({
  primary: '#fffcf2',
  secondary: '#2b2d42',
  accent: '#eb5e28',
  neutral: '#403d39',
  'base-100': '#252422',
  info: '#3abff8',
  success: '#36d399',
  warning: '#eb5e28',
  error: '#d90429',
});

export interface ScrollStore {
  top: number;
  progress: number;
}

export const timeline = gsap.timeline();

export const ScrollTimeline = map<{ timeline: gsap.core.Timeline }>({
  timeline: timeline,
});

export const ScrollState = map<ScrollStore>({
  top: 0,
  progress: 0,
});
