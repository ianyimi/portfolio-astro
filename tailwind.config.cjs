const defaultTheme = require('tailwindcss/defaultTheme');
const colorFunctions = require('daisyui/src/colors/functions');

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

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // primary: 'var(--aw-color-primary)',
        // secondary: 'var(--aw-color-secondary)',
        // accent: 'var(--aw-color-accent)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        // https://coolors.co/2b2d42-8d99ae-edf2f4-ef233c-d90429
        spaceCadetRed: {
          primary: '#2b2d42',
          secondary: '#8d99ae',
          accent: '#ef233c',
          neutral: '#edf2f4',
          'base-100': '#ffffff',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#d90429',
        },
        // https://coolors.co/fffcf2-ccc5b9-403d39-252422-eb5e28
        floralWhiteFlame: {
          primary: '#fffcf2',
          secondary: '#2b2d42',
          accent: '#EB5E28',
          neutral: '#403D39',
          'base-100': '#252422',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#EB5E28',
          error: '#D90429',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  darkMode: ['class', '[data-theme="floralWhiteFlame"]'],
};
