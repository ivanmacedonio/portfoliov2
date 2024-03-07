/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'back' :'#0F172A',
        'main':  '#E2E8F0',
        'stackback': '#122B39',
        'stack': '#39cfc8'
      },
      fontFamily : {
        'sans': ['inter']
      },
      fontSize: {
        'parraph' : ['1rem'],
        'description': ['1rem']
      },
      width: {
        'image': ['2.3rem'],
        '65%' : ['65%'],
        '80%' :['80%']
      },
      borderWidth: {
        'cv': '1.9px'
      },
      screens: {
        'mobiles': '1px'
      }
    },
  },
  plugins: [],
};
