module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        void: {
          'bg01': 'var(--color-bg01)',
          'bg02': 'var(--color-bg02)',
          'bg03': 'var(--color-bg03)',
          'bg04': 'var(--color-bg04)',

          'fg01': 'var(--color-fg01)',
          'fg02': 'var(--color-fg02)',
          'fg03': 'var(--color-fg03)',
          'fg04': 'var(--color-fg04)',

          'hd01': 'var(--color-hd01)',
          'hd02': 'var(--color-hd02)',
          'hd03': 'var(--color-hd03)',
          'hd04': 'var(--color-hd04)',
          'hd05': 'var(--color-hd05)',

          'sts': 'var(--color-st-success)',
          'ste': 'var(--color-st-error)',
          'stw': 'var(--color-st-warning)',

          'ascent': 'var(--color-ascent)',
          'ascenth': 'var(--color-ascenth)',

          'btn01': 'var(--color-btn01)',
          'btn01h': 'var(--color-btn01h)',

          'btn02': 'var(--color-btn02)',
          'btn02h': 'var(--color-btn02h)',

        }
      }    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  
  ]
}
