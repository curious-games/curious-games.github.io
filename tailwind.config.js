// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '29': '6.95rem',
        '80': '20rem',
        '108': '27rem',
        '109': '30rem',
        '160': '40rem',
        'half' :'50vh',
        'mega' :'150vh',
        'landing' : '-90vh',
      },
      inset: {
        '-16': '-4rem',
      },
      fontSize: {
        xxs: '0.625rem'
      },
      boxShadow: {
        'outline-green': '0 0 0 3px rgba(5,202,160, 0.8)',
      },
      zIndex: {
        '1':'1',
        '5':'5',
        '-5': '-5',
        '-10': '-10',
      },
      colors: {
        'cur-pink': '#FF0099',
        'cur-blue': '#4CB7EB',
      },
      borderWidth: {
        '10': '10px',
        '11': '11px',
        '12': '12px',
      },
      fill: {
        none: 'none',
      },
      strokeWidth: {
        '15': '15',
      },
      animation: {
        scroll: "scroll ease 2s infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(60px)" }
        }
      }
    },
    linearBorderGradients: {
      directions: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: { // defaults to {}
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
        'curious': ['#FF0099', '#4CB7EB'],
      },
    },
    repeatingLinearBorderGradients: theme => ({
      directions: theme('linearBorderGradients.directions'), // defaults to the same values as linearBorderGradients’ directions
      colors: theme('linearBorderGradients.colors'), // defaults to {}
      lengths: { // defaults to {}
        'sm': '25px',
        'md': '50px',
        'lg': '100px',
      },
    }),
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'even', 'odd'],
    linearBorderGradients: ['responsive'], // defaults to ['responsive']
    repeatingLinearBorderGradients: ['responsive'], // defaults to ['responsive']
    extend: {
      transitionTimingFunction: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-border-gradients')(),
  ]
}
