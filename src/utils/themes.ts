export type CUSTOM_THEME = keyof typeof CUSTOM_THEME;
export type CUSTOM_COLOR = keyof typeof CUSTOM_COLOR;
export type BASE_COLOR = keyof typeof BASE_COLOR;
export type FOCUS_COLOR = keyof typeof FOCUS_COLOR;
export type STATE_COLOR = keyof typeof STATE_COLOR;
export type CONTENT_COLOR = keyof typeof CONTENT_COLOR;

export const spaceCadetRedHSL: Record<string, string> = {
  primary: '235 21% 21%',
  secondary: '218 17% 62%',
  accent: '353 86% 54%',
  neutral: '197 24% 94%',
  'base-100': '0 0% 100%',
  info: '198, 93% 60%',
  success: '158 64% 52%',
  warning: '43 96% 56%',
  error: '350 96% 43%',
};

export const floralWhiteFlameHSL = {
  primary: '46 100% 97%',
  secondary: '235 21% 21%',
  accent: '17 83% 54%',
  neutral: '34 6% 24%',
  'base-100': '40 4% 14%',
  info: '198 93% 60%',
  success: '158 64% 52%',
  warning: '17 83% 54%',
  error: '350 96% 43%',
};

export function handleThemeChange(event: InputEvent) {
  const { checked } = event.target as HTMLInputElement;
  console.log('🚀 ~ file: index.astro:51 ~ toggle.addEventListener ~ checked:', checked);
  localStorage.setItem('usehooks-ts-darkMode', `${checked}`);
  const themeChangeEvent = new CustomEvent('theme-change', { detail: checked });
  document.dispatchEvent(themeChangeEvent);
}

export function hexToHSL(hex: string): string {
  // Ensure the hex color starts with a '#'
  if (hex[0] !== '#') {
    hex = '#' + hex;
  }

  // Convert the hex color to RGB
  const rgb = parseInt(hex.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;

  // Normalize the RGB values
  const rNormalized = r / 255;
  const gNormalized = g / 255;
  const bNormalized = b / 255;

  // Find the min, max, and difference of the normalized RGB values
  const min = Math.min(rNormalized, gNormalized, bNormalized);
  const max = Math.max(rNormalized, gNormalized, bNormalized);
  const diff = max - min;

  // Calculate the Hue
  let h: number;
  if (diff === 0) {
    h = 0;
  } else if (max === rNormalized) {
    h = ((gNormalized - bNormalized) / diff) % 6;
  } else if (max === gNormalized) {
    h = (bNormalized - rNormalized) / diff + 2;
  } else {
    h = (rNormalized - gNormalized) / diff + 4;
  }
  h = Math.round(h * 60);
  if (h < 0) h += 360;

  // Calculate the Lightness
  const l = (max + min) / 2;

  // Calculate the Saturation
  const s = diff === 0 ? 0 : diff / (1 - Math.abs(2 * l - 1));

  // Convert HSL values to percentages
  const hPercentage = h;
  const sPercentage = Math.round(s * 100);
  const lPercentage = Math.round(l * 100);

  return `hsl(${hPercentage}, ${sPercentage}%, ${lPercentage}%)`;
}

const CUSTOM_THEME = {
  light: 'light',
  dark: 'dark',
  'space-cadet-red': 'space-cadet-red',
  'floral-white-flame': 'floral-white-flame',
} as const;

const CUSTOM_COLOR = {
  primary: 'primary',
  'primary-focus': 'primary-focus',
  'primary-content': 'primary-content',
  secondary: 'secondary',
  'secondary-focus': 'secondary-focus',
  'secondary-content': 'secondary-content',
  accent: 'accent',
  'accent-focus': 'accent-focus',
  'accent-content': 'accent-content',
  neutral: 'neutral',
  'neutral-focus': 'neutral-focus',
  'neutral-content': 'neutral-content',
  'base-100': 'base-100',
  'base-200': 'base-200',
  'base-300': 'base-300',
  'base-content': 'base-content',
  info: 'info',
  'info-content': 'info-content',
  success: 'success',
  'success-content': 'success-content',
  warning: 'warning',
  'warning-content': 'warning-content',
  error: 'error',
  'error-content': 'error-content',
} as const;
const FOCUS_COLOR = {
  'primary-focus': 'primary-focus',
  'secondary-focus': 'secondary-focus',
  'accent-focus': 'accent-focus',
  'neutral-focus': 'neutral-focus',
} as const;
const BASE_COLOR = {
  'base-100': 'base-100',
  'base-200': 'base-200',
  'base-300': 'base-300',
} as const;
const STATE_COLOR = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
} as const;
const CONTENT_COLOR = {
  'primary-content': 'primary-content',
  'secondary-content': 'secondary-content',
  'accent-content': 'accent-content',
  'neutral-content': 'neutral-content',
  'base-content': 'base-content',
  'warning-content': 'warning-content',
  'error-content': 'error-content',
  'success-content': 'success-content',
  'info-content': 'info-content',
} as const;
