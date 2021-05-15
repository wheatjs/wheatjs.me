import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  attributify: true,
  darkMode: 'class',
  extract: {
    include: ['src/**/*.(vue|md|css)', 'pages/**/*.(vue|md|css)'],
  },
  plugins: [
    typography(),
    require('windicss/plugin/aspect-ratio'),
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              'textDecorationStyle': 'wavy',
              'textDecorationThickness': '0.1em',
              '&:hover': {
                opacity: 1,
                color: colors.pink[600],
                textDecorationColor: colors.pink[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
})
