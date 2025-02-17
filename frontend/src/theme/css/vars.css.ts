import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'
import { darken, transparentize } from 'polished'

const colors = {
  transparent: 'transparent',
  none: 'none',
  white: '#ffffff',
  black: '#000000',

  gray50: '#f7f7f7',
  gray950: '#06080A',
  gray900: '#0D1114',
  gray800: '#191B1D',
  gray500: '#828585',

  vibrantRed: '#ff003e',
  vibrantPurple: '#6E44FF',

  vibrantGradient: 'linear-gradient(120deg, #ff003e, #6E44FF)',
  disabledGradient: 'linear-gradient(120deg, #86797c, #9d9aa7)',
}

const fontSizes = {
  '0': '0',
  '14': '14px',
  '16': '16px',
  '18': '18px',
  '24': '24px',
  '32': '32px',
}

const times = {
  slow: '500ms',
  medium: '250ms',
  fast: '125ms',
}

const timings = {
  ease: 'ease',
  in: 'ease-in',
  out: 'ease-out',
  inOut: 'ease-in-out',
}

const opacities = {
  disabled: '0.5',
  enabled: '1',
}

const nullify = <T extends { [key: string]: string }>(obj: T) =>
  Object.keys(obj).reduce<{ [key in keyof typeof obj]: null }>((acc, key) => ({ ...acc, [key]: null }), {} as any)

const themeContractValues = {
  color: {
    ...nullify(colors),

    text1: null,
    text2: null,

    bg1: null,
    bg2: null,
    bg3: null,

    bg1Transparent: null,

    border1: null,

    accent: null,
    accent2: null,

    accentDark: null,
    accentDarker: null,
  },
  border: {
    light: null,
    none: null,
  },
  radii: {
    '10': null,
    round: null,
  },
  fontSize: nullify(fontSizes),
  fontWeight: {
    normal: null,
    medium: null,
    semibold: null,
    bold: null,
  },
  fonts: {
    body: null,
    heading: null,
  },
  shadows: {
    none: null,
  },
  opacity: nullify(opacities),
  time: nullify(times),
  timing: nullify(timings),
}

export const vars = createGlobalThemeContract(themeContractValues, (_, path) => `theme-${path.join('-')}`)

export const dimensions = {
  '0': '0',
  '2': '2',
  '4': '4px',
  '8': '8px',
  '12': '12px',
  '16': '16px',
  '18': '18px',
  '20': '20px',
  '24': '24px',
  '26': '26px',
  '28': '28px',
  '32': '32px',
  '42': '42px',
  '386': '386px',
  '480': '480px',
  half: '50%',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  viewHeight: '100vh',
  viewWidth: '100vw',
  auto: 'auto',
  inherit: 'inherit',
}

export const spacing = {
  '0': '0',
  '1': '1px',
  '2': '2px',
  '4': '4px',
  '6': '6px',
  '8': '8px',
  '10': '10px',
  '12': '12px',
  '14': '14px',
  '16': '16px',
  '18': '18px',
  '20': '20px',
  '24': '24px',
  '28': '28px',
  '32': '32px',
  '1/2': '50%',
  full: '100%',
  auto: 'auto',
  unset: 'unset',
}

export const zIndices = {
  auto: 'auto',
  '1': '1',
  '2': '2',
  '3': '3',
  sticky: '1020',
  fixed: '1030',
  modalBackdrop: '1040',
  modal: '1060',
  tooltip: '1080',
}

createGlobalTheme(':root', vars, {
  color: {
    ...colors,

    text1: colors.gray50,
    text2: colors.gray500,

    bg1: colors.gray950,
    bg2: colors.gray900,
    bg3: colors.black,

    bg1Transparent: transparentize(0.5, colors.gray950),

    border1: colors.gray800,

    accent: colors.vibrantRed,
    accent2: colors.vibrantPurple,

    accentDark: darken(0.05, colors.vibrantRed),
    accentDarker: darken(0.1, colors.vibrantRed),
  },
  border: {
    light: '1px solid rgba(0, 0, 0, 0.3)',
    none: 'none',
  },
  radii: {
    '10': '10px',
    round: '9999px',
  },
  fontSize: fontSizes,
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'montserrat, sans-serif',
  },
  shadows: {
    none: 'none',
  },
  time: times,
  timing: timings,
  opacity: opacities,
})
