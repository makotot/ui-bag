module.exports = {
  presets: [
    ['@babel/env', {
      modules: process.env.BABEL_ENV === 'cjs' ? 'commonjs' : false,
      loose: true,
    }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
}
