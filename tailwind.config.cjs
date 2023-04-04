const defaultTheme = require('tailwindcss/defaultTheme');

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
          primary: '#2B2D42',
          secondary: '#8D99AE',
          accent: '#EF233C',
          neutral: '#EDF2F4',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#D90429',
        },
        // https://coolors.co/fffcf2-ccc5b9-403d39-252422-eb5e28
        floralWhiteFlame: {
          primary: '#FFFCF2',
          secondary: '#2B2D42',
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
