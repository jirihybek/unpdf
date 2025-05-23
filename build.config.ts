import { fileURLToPath } from 'node:url'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  clean: false,
  declaration: true,
  externals: [
    // Exclude canvas dependency
    '@napi-rs/canvas',
    // Exclude serverless PDF.js build
    fileURLToPath(new URL('pdfjs', import.meta.url)),
    // Don't follow type imports
    'pdfjs-dist',
  ],
  rollup: {
    emitCJS: true,
  },
})
