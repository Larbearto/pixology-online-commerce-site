/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1140px',
      '2xl': '1440px'
    },
    colors: {
      Skybluecrayola: 'hsl(188, 64%, 60%)',
      Raisinblack90: 'hsla(240, 8%, 12%, 0.9)',
      Raisinblack1: 'hsl(240, 8%, 17%)',
      Raisinblack2: 'hsl(240, 8%, 12%)',
      Majorelleblue: 'hsl(241, 77%, 63%)',
      Blueryb80: 'hsla(241, 88%, 60%, 0.8)',
      Bittersweet: 'hsl(0, 100%, 69%)',
      Eerieblack: 'hsl(0, 0%, 13%)',
      Ghostwhite: 'hsl(230, 60%, 98%)',
      Lightgray: 'hsl(0, 0%, 80%)',
      Slategray: 'hsl(225, 8%, 48%)',
      Coolgray: 'hsl(225, 11%, 59%)',
      Gainsboro: 'hsl(217, 16%, 90%)',
      Mustard: 'hsl(47, 100%, 69%)',
      White: 'hsl(0, 0%, 100%)',
      Black: 'hsl(0, 0%, 0%)',
      Onyx: 'hsl(240, 5%, 26%)',
      Jet: 'hsl(0, 0%, 21%)'
    },
    fontFamily: {
      DM: ['DM Sans']
    },
    extend: {
      spacing: {
        fs1: '4rem',
        fs2: '3.5rem',
        fs3: '2.4rem',
        fs4: '2.2rem',
        fs5: '2rem',
        fs6: '1.8rem',
        fs7: '1.7rem',
        fs8: '1.5rem',
        fs9: '1.4rem',
        fw500: '500',
        fw700: '700',
        sectionPadding: '100px'
      },
      boxShadow: {
        shadow1: '0px 2px 50px hsla(223, 40%, 76%, 0.3)',
        shadow2: '0px -2px 12px hsl(252, 29%, 93%)',
        shadow3: '0px 4px 4px hsla(231, 20%, 49%, 0.06)',
        shadow4: '0px 15px 30px hsla(210, 30%, 32%, 0.05)',
        shadow5: '0px 15px hsla(241, 62%, 34%, 0.04)'
      },
      borderRadius: {
        radius8: '8px',
        radius10: '10px',
        radius15: '15px',
        radius20: '20px'
      },
      transition: {
        transition1: '0.25s ease',
        transition2: '.5s ease',
        cubicIn: 'cubic-bezier(0.51, 0.03, 0.64, 0.28)',
        cubicOut: 'cubic-bezier(0.33, 0.85, 0.6, 0.96)'
      }
    }
  },
  plugins: []
}
