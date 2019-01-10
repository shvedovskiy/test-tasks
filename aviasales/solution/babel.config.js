module.exports = api => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-flow',
  ];

  const plugins = [
    'react-hot-loader/babel',
    'flow-react-proptypes',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-optional-catch-binding',
    '@babel/plugin-proposal-do-expressions',
    [
      'babel-plugin-styled-components',
      {
        minify: false,
        ssr: false,
      },
    ],
    ['inline-json-import', {}],
  ];

  return {
    presets,
    plugins,
  };
};
