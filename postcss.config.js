const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: {
    tailwindcss: {},
    ...(isProduction && {
      'postcss-remove-unused-css': {
        path: './src/contentScript',
        exts: ['.tsx'],
      },
    }),
  },
}
