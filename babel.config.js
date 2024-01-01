module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    'next/babel',
  ],
  plugins: [
    [
      '@locator/babel-jsx/dist',
      {
        env: 'development',
      },
    ],
  ],
}
