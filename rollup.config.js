import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: {
    'react-is': 'react-is',
    'prop-types': 'prop-types'
  },
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}
