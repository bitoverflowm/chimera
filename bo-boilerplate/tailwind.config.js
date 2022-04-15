module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nft-blue': '#2F80ED',
        'nft-glow': '#B2FFDA',
        'nft-purple': '#737DFE',
        'nft-cotton': '#FFCAC9',
        'nft-sky': '#9055FF',
        'nft-aqua': '#13E2DA',
        'nft-orange': '#F06966',
        'nft-orange-light': '#FAD6A6'

      },
      keyframes: {
        fadeIn : {
          "0%" : { opacity: '0%'},
          "100%": { opacity: '100%'}
        },
        fadeOut : {
          "0%" : { opacity: '100%'},
          "100%": { opacity: '0%'}
        }
      },
      animation: {
        fadeIn: "fadeIn 100ms ease-in",
        fadeOut: "fadeOut 100ms ease-out",
      }
    },
  },
  plugins: [],
}
