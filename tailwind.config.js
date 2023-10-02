/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:['class'],
  theme: {
    extend: {
      colors:{
        system:'#49a2ff',
        success:"#00CA00",
        text:'#1d2129',
        nexttext:'4B596b',
        message:'#86809c',
        nextmessage:'#c9cdd4',
        background:'#F2F3F5',
        nextbackground:'#c9cdd4',
        Divider:'#e5e6ec'
      },
      fontFamily:{
        // 'sans':['ui-']
      }
    },
   
    
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

