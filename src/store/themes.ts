import Color from 'color';
import { map } from 'nanostores';

import { COLOR_ROLE, CUSTOM_THEME, floralWhiteFlameHSL, spaceCadetRedHSL } from '~/utils/themes';

export interface ThemeStore {
  activeTheme: CUSTOM_THEME;
  light: Record<string, string>;
  dark: Record<string, string>;
  spaceCadetRed?: {
    className: string;
    theme: Record<string, string>;
  };
  floralWhiteFlame?: {
    className: string;
    theme: Record<string, string>;
  };
}

export const spaceCadetRedHexColors = {
  primary: '#2b2d42',
  secondary: '#8d99ae',
  accent: '#ef233c',
  neutral: '#edf2f4',
  'base-100': '#ffffff',
  info: '#3abff8',
  success: '#36d399',
  warning: '#fbbd23',
  error: '#d90429',
};

export const floralWhiteFlameHexColors = {
  primary: '#fffcf2',
  secondary: '#2b2d42',
  accent: '#eb5e28',
  neutral: '#403d39',
  'base-100': '#252422',
  info: '#3abff8',
  success: '#36d399',
  warning: '#eb5e28',
  error: '#d90429',
};

export const CustomThemes = map<ThemeStore>({
  activeTheme: 'light',
  light: spaceCadetRedHSL,
  dark: floralWhiteFlameHSL,
  // spaceCadetRed: {
  //   className: 'space-cadet-red',
  //   theme: convertToHsl(spaceCadetRedHexColors),
  // },
  // floralWhiteFlame: {
  //   className: 'floral-white-flame',
  //   theme: convertToHsl(floralWhiteFlameHexColors),
  // },
});

function convertToHsl(input: Record<COLOR_ROLE, string>) {
  const resultObj: Record<string, string> = {};
  if (typeof input === 'object' && input !== null) {
    Object.entries(input).forEach(([rule, value]) => {
      if (Object.keys(COLOR_NAMES).includes(rule)) {
        const hslArray = Color(value).hsl().array();
        resultObj[COLOR_NAMES[rule as COLOR_ROLE]] =
          hslArray[0].toPrecision(5).replace(/\.?0+$/, '') +
          ' ' +
          hslArray[1].toPrecision(5).replace(/\.?0+$/, '') +
          '%' +
          ' ' +
          hslArray[2].toPrecision(5).replace(/\.?0+$/, '') +
          '%';
      } else {
        resultObj[rule] = value;
      }

      // auto generate focus colors
      if (!Object.keys(input).includes('primary-focus')) {
        const darkerHslArray = Color(input['primary']).darken(0.2).hsl().array();
        resultObj['--pf'] =
          darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, '') +
          ' ' +
          darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, '') +
          '%' +
          ' ' +
          darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, '') +
          '%';
      }

      if (!Object.keys(input).includes('secondary-focus')) {
        const darkerHslArray = Color(input['secondary']).darken(0.2).hsl().array();
        resultObj['--sf'] =
          darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, '') +
          ' ' +
          darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, '') +
          '%' +
          ' ' +
          darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, '') +
          '%';
      }

      if (!Object.keys(input).includes('accent-focus')) {
        const darkerHslArray = Color(input['accent']).darken(0.2).hsl().array();
        resultObj['--af'] =
          darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, '') +
          ' ' +
          darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, '') +
          '%' +
          ' ' +
          darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, '') +
          '%';
      }

      if (!Object.keys(input).includes('neutral-focus')) {
        const darkerHslArray = Color(input['neutral']).darken(0.2).hsl().array();
        resultObj['--nf'] =
          darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, '') +
          ' ' +
          darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, '') +
          '%' +
          ' ' +
          darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, '') +
          '%';
      }

      // auto generate base colors
      if (!Object.keys(input).includes('base-100')) {
        resultObj['--b1'] = 0 + ' ' + 0 + '%' + ' ' + 100 + '%';
      }

      if (!Object.keys(input).includes('base-200')) {
        const darkerHslArray = Color(input['base-100']).darken(0.1).hsl().array();
        resultObj['--b2'] =
          darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, '') +
          ' ' +
          darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, '') +
          '%' +
          ' ' +
          darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, '') +
          '%';
      }

      if (!Object.keys(input).includes('base-300')) {
        if (Object.keys(input).includes('base-200')) {
          const darkerHslArray = Color(input['base-200']).darken(0.1).hsl().array();
          resultObj['--b3'] =
            darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, '') +
            ' ' +
            darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, '') +
            '%' +
            ' ' +
            darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, '') +
            '%';
        } else {
          const darkerHslArray = Color(input['base-100']).darken(0.1).darken(0.1).hsl().array();
          resultObj['--b3'] =
            darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, '') +
            ' ' +
            darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, '') +
            '%' +
            ' ' +
            darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, '') +
            '%';
        }
      }

      // auto generate state colors
      if (!Object.keys(input).includes('info')) {
        resultObj['--in'] = 198 + ' ' + 93 + '%' + ' ' + 60 + '%';
      }
      if (!Object.keys(input).includes('success')) {
        resultObj['--su'] = 158 + ' ' + 64 + '%' + ' ' + 52 + '%';
      }
      if (!Object.keys(input).includes('warning')) {
        resultObj['--wa'] = 43 + ' ' + 96 + '%' + ' ' + 56 + '%';
      }
      if (!Object.keys(input).includes('error')) {
        resultObj['--er'] = 0 + ' ' + 91 + '%' + ' ' + 71 + '%';
      }

      // auto generate content colors
      if (!Object.keys(input).includes('base-content')) {
        resultObj['--bc'] = generateForegroundColorFrom(input['base-100']);
      }
      if (!Object.keys(input).includes('primary-content')) {
        resultObj['--pc'] = generateForegroundColorFrom(input['primary']);
      }

      if (!Object.keys(input).includes('secondary-content')) {
        resultObj['--sc'] = generateForegroundColorFrom(input['secondary']);
      }

      if (!Object.keys(input).includes('accent-content')) {
        resultObj['--ac'] = generateForegroundColorFrom(input['accent']);
      }

      if (!Object.keys(input).includes('neutral-content')) {
        resultObj['--nc'] = generateForegroundColorFrom(input['neutral']);
      }

      if (!Object.keys(input).includes('info-content')) {
        if (Object.keys(input).includes('info')) {
          resultObj['--inc'] = generateForegroundColorFrom(input['info']);
        } else {
          resultObj['--inc'] = 198 + ' ' + 100 + '%' + ' ' + 12 + '%';
        }
      }

      if (!Object.keys(input).includes('success-content')) {
        if (Object.keys(input).includes('success')) {
          resultObj['--suc'] = generateForegroundColorFrom(input['success']);
        } else {
          resultObj['--suc'] = 158 + ' ' + 100 + '%' + ' ' + 10 + '%';
        }
      }

      if (!Object.keys(input).includes('warning-content')) {
        if (Object.keys(input).includes('warning')) {
          resultObj['--wac'] = generateForegroundColorFrom(input['warning']);
        } else {
          resultObj['--wac'] = 43 + ' ' + 100 + '%' + ' ' + 11 + '%';
        }
      }

      if (!Object.keys(input).includes('error-content')) {
        if (Object.keys(input).includes('error')) {
          resultObj['--erc'] = generateForegroundColorFrom(input['error']);
        } else {
          resultObj['--erc'] = 0 + ' ' + 100 + '%' + ' ' + 14 + '%';
        }
      }

      // auto generate css variables
      if (!Object.keys(input).includes('--rounded-box')) {
        resultObj['--rounded-box'] = '1rem';
      }
      if (!Object.keys(input).includes('--rounded-btn')) {
        resultObj['--rounded-btn'] = '0.5rem';
      }
      if (!Object.keys(input).includes('--rounded-badge')) {
        resultObj['--rounded-badge'] = '1.9rem';
      }
      if (!Object.keys(input).includes('--animation-btn')) {
        resultObj['--animation-btn'] = '0.25s';
      }
      if (!Object.keys(input).includes('--animation-input')) {
        resultObj['--animation-input'] = '.2s';
      }
      if (!Object.keys(input).includes('--btn-text-case')) {
        resultObj['--btn-text-case'] = 'uppercase';
      }
      if (!Object.keys(input).includes('--btn-focus-scale')) {
        resultObj['--btn-focus-scale'] = '0.95';
      }
      if (!Object.keys(input).includes('--border-btn')) {
        resultObj['--border-btn'] = '1px';
      }
      if (!Object.keys(input).includes('--tab-border')) {
        resultObj['--tab-border'] = '1px';
      }
      if (!Object.keys(input).includes('--tab-radius')) {
        resultObj['--tab-radius'] = '0.5rem';
      }
    });
    return resultObj;
  }
  return input;
}

function generateForegroundColorFrom(input: string, percentage = 0.8) {
  let arr = [];
  if (Color(input).isDark()) {
    arr = Color(input).mix(Color('white'), percentage).saturate(10).hsl().array();
    return (
      arr[0].toPrecision(5).replace(/\.?0+$/, '') +
      ' ' +
      arr[1].toPrecision(5).replace(/\.?0+$/, '') +
      '%' +
      ' ' +
      arr[2].toPrecision(5).replace(/\.?0+$/, '') +
      '%'
    );
  } else {
    arr = Color(input).mix(Color('black'), percentage).saturate(10).hsl().array();
    return (
      arr[0].toPrecision(5).replace(/\.?0+$/, '') +
      ' ' +
      arr[1].toPrecision(5).replace(/\.?0+$/, '') +
      '%' +
      ' ' +
      arr[2].toPrecision(5).replace(/\.?0+$/, '') +
      '%'
    );
  }
}

const COLOR_NAMES: Record<COLOR_ROLE, string> = {
  primary: '--p',
  'primary-focus': '--pf',
  'primary-content': '--pc',

  secondary: '--s',
  'secondary-focus': '--sf',
  'secondary-content': '--sc',

  accent: '--a',
  'accent-focus': '--af',
  'accent-content': '--ac',

  neutral: '--n',
  'neutral-focus': '--nf',
  'neutral-content': '--nc',

  'base-100': '--b1',
  'base-200': '--b2',
  'base-300': '--b3',
  'base-content': '--bc',

  info: '--in',
  'info-content': '--inc',

  success: '--su',
  'success-content': '--suc',

  warning: '--wa',
  'warning-content': '--wac',

  error: '--er',
  'error-content': '--erc',
};
