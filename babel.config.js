module.exports = {
  presets: [
    ['@babel/env', {
      modules: process.env.BABEL_ENV === 'cjs' ? 'commonjs' : false,
    }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
}
