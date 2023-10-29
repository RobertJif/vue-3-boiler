/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1280px'

      // 0 - 744 = mobile
      // 744 - 1280 = tablet
      // 1280 - xxx = desktop

      // 0 - 430 = default
      // 430 - 744 = mobile
      // 744 - 1280 = tablet
      // 1280 - xxx = desktop
    },
    fontSize: {
      '4xl': '38px',
      '3xl': '32px',
      '2xl': '28px',
      xl: '24px',
      lg: '18px',
      md: '16px',
      sm: '14px',
      xs: '12px'
    },
    colors: {
      'primary-100': 'var(--color-primary-100)',
      'primary-200': 'var(--color-primary-200)',
      'primary-300': 'var(--color-primary-300)',
      'secondary-100': 'var(--color-secondary-100)',
      'secondary-200': 'var(--color-secondary-200)',
      'secondary-300': 'var(--color-secondary-300)',
      'success-100': 'var(--color-success-100)',
      'success-200': 'var(--color-success-200)',
      'success-300': 'var(--color-success-300)',
      'info-100': 'var(--color-info-100)',
      'info-200': 'var(--color-info-200)',
      'info-300': 'var(--color-info-300)',
      'warning-100': 'var(--color-warning-100)',
      'warning-200': 'var(--color-warning-200)',
      'warning-300': 'var(--color-warning-300)',
      'error-100': 'var(--color-error-100)',
      'error-200': 'var(--color-error-200)',
      'error-300': 'var(--color-error-300)',
      'tint-100': 'var(--color-tint-100)',
      'tint-200': 'var(--color-tint-200)',
      'tint-300': 'var(--color-tint-300)',
      'neutral-100': 'var(--color-neutral-100)',
      'neutral-200': 'var(--color-neutral-200)',
      'neutral-300': 'var(--color-neutral-300)',
      'neutral-400': 'var(--color-neutral-400)',
      'neutral-500': 'var(--color-neutral-500)',
      'neutral-600': 'var(--color-neutral-600)',
      'neutral-700': 'var(--color-neutral-700)',
      'neutral-800': 'var(--color-neutral-800)',
      'neutral-900': 'var(--color-neutral-900)'
    }
  },
  plugins: []
}
