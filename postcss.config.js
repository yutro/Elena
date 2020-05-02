// module.exports = {
//   plugins: [
//     require('tailwindcss'),
//     "postcss-remove-unused-css": {
//   "path": "./app",
//       "exts": [".js", ".html"]
// }
//   ]
// }

module.exports = {
  plugins: {
    tailwindcss: {},
    "postcss-remove-unused-css": {
      path: "./src/contentScript",
      exts: [".tsx"]
    }
  }
}