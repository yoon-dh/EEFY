import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        winter: {
          ...require('daisyui/src/theming/themes')['[data-theme=winter]'],
          info: '#057AFF',
          '.boxShadow': { 'box-shadow': '0px 2px 4px 0px rgba(0, 0, 0, 0.25)' },
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          '.boxShadow': { 'box-shadow': '0px 4px 4px 0px rgba(200, 200, 200, 0.25)' },
        },
      },
      'cupcake',
      'retro',
      'valentine',
    ],
  },
};
export default config;
