/** @type {import('tailwindcss').Config} */
export const content = [
  './src/app/**/*.{ts,tsx}', 
  './src/components/**/*.{ts,tsx}'
];

export const presets = [require("nativewind/preset")];

export const theme = {
  extend: {
    fontFamily: {
      heading: 'Inter_600SemiBold',
      subtitle: 'Inter_500Medium',
      body: 'Inter_400Regular',
      bold: 'Inter_700Bold',
    },
  },
};

export const plugins = [];
