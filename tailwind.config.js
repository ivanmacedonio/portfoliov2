/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'back' :'#0F172A',
        'main':  '#E2E8F0'
      },
      fontFamily : {
        'sans': ['inter']
      },
      fontSize: {
        'parraph' : ['1rem'],
        'description': ['1.1rem']
      },
      width: {
        'image': ['2.3rem'],
        '65%' : ['65%'],
        '80%' :['80%']
      }
    },
  },
  plugins: [],
};
