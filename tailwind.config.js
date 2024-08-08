/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'houschka-pro-bold-italic': ['Houschka Pro Bold Italic', 'sans-serif'],
        'houschka-pro-bold': ['Houschka Pro Bold', 'sans-serif'],
        'houschka-pro-demibold-italic': ['Houschka Pro DemiBold Italic', 'sans-serif'],
        'houschka-pro-demibold': ['Houschka Pro DemiBold', 'sans-serif'],
        'houschka-pro-extra-bold': ['Houschka Pro Extra Bold', 'sans-serif'],
        'houschka-pro-extrabold-italic': ['Houschka Pro ExtraBold Italic', 'sans-serif'],
        'houschka-pro-light-italic': ['Houschka Pro Light Italic', 'sans-serif'],
        'houschka-pro-light': ['Houschka Pro Light', 'sans-serif'],
        'houschka-pro-medium-italic': ['Houschka Pro Medium Italic', 'sans-serif'],
        'houschka-pro-medium': ['Houschka Pro Medium', 'sans-serif'],
        'houschka-pro-thin-italic': ['Houschka Pro Thin Italic', 'sans-serif'],
        'houschka-pro-thin': ['Houschka Pro Thin', 'sans-serif'],
        'houschka-rounded-bold-italic': ['Houschka Rounded Bold Italic', 'sans-serif'],
        'houschka-rounded-bold': ['Houschka Rounded Bold', 'sans-serif'],
        'houschka-rounded-demibold-italic': ['Houschka Rounded DemiBold Italic', 'sans-serif'],
        'houschka-rounded-demibold': ['Houschka Rounded DemiBold', 'sans-serif'],
        'houschka-rounded-extra-bold': ['Houschka Rounded Extra Bold', 'sans-serif'],
        'houschka-rounded-extrabold-italic': ['Houschka Rounded ExtraBold Italic', 'sans-serif'],
        'houschka-rounded-light-italic': ['Houschka Rounded Light Italic', 'sans-serif'],
        'houschka-rounded-light': ['Houschka Rounded Light', 'sans-serif'],
        'houschka-rounded-medium-italic': ['Houschka Rounded Medium Italic', 'sans-serif'],
        'houschka-rounded-medium': ['Houschka Rounded Medium', 'sans-serif'],
        'houschka-rounded-thin-italic': ['Houschka Rounded Thin Italic', 'sans-serif'],
        'houschka-rounded-thin': ['Houschka Rounded Thin', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
