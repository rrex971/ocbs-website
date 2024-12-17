/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'carnation-pink': {
        '50': '#fdf2f6',
        '100': '#fce7ef',
        '200': '#fbcfe0',
        '300': '#f99cbd',
        '400': '#f5719d',
        '500': '#ed477a',
        '600': '#dd2554',
        '700': '#bf173d',
        '800': '#9e1633',
        '900': '#84172e',
        '950': '#510616',
    },
    'logan': {
        '50': '#f7f7fb',
        '100': '#f1f1f6',
        '200': '#e5e5ef',
        '300': '#d1d0e2',
        '400': '#b6b4d1',
        '500': '#a29dc2',
        '600': '#857cab',
        '700': '#736998',
        '800': '#60587f',
        '900': '#514969',
        '950': '#332f46',
    },
    'banana-mania': {
        '50': '#fef9ec',
        '100': '#f8e5b0',
        '200': '#f5db92',
        '300': '#f0c359',
        '400': '#edad32',
        '500': '#e68d1a',
        '600': '#cb6a14',
        '700': '#a94b14',
        '800': '#893b17',
        '900': '#713116',
        '950': '#411707',
    },
    'lilac': {
        '50': '#fbf8fc',
        '100': '#f5f0f7',
        '200': '#eee3f1',
        '300': '#e0cde5',
        '400': '#cbadd3',
        '500': '#bf9bc8',
        '600': '#a171ac',
        '700': '#8a5d93',
        '800': '#734f7a',
        '900': '#5e4063',
        '950': '#3f2744',
    },
    'white': {
        '50': '#ffffff',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
    },
    },
    fontFamily : {
      head: ["DelaSuko", "sans-serif"],
      body: ["Satoshi", "sans-serif"]
    },
    extend: {
      backgroundImage:{
        'navbar-bg': "url('/public/navbar.svg')",
        'info-bg': "url('/public/infobg.svg')",
        'home-bg': "url('/public/homebg.svg')",
        'home-bg-sm': "url('/public/homebg_sm.svg')",
        'register-bg': "url('/public/registerbg.svg')",
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
       },
       animation: {
         appear: "appear 0.5s ease-in-out"
       }
    }
  },
  plugins: [],
}}
