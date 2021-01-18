module.exports = {
  purge: {
    enabled: true,
    content: [
      './public/**/*.html',
      './public/**/*.js'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    filter : {
      'dropShadow' : 'drop-shadow(2px 4px 8px #585858)',
      'none' : 'none'
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#233446',
      'danger': '#e3342f'
     }),
     boxShadow : {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      dark : '-5px 10px 15px -3px rgba(248, 248, 255, 0.1), 0 4px 6px -2px rgba(248, 248, 255, 0.05)'
     }
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
