module.exports = function (api) {
  if (api) {
    api.cache.never();
  }

  const { BABEL_MODULE } = process.env;
  const useESModules = BABEL_MODULE !== 'commonjs';

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: useESModules ? false : 'commonjs',
        },
      ],
      [
        '@vue/babel-preset-jsx',
        {
          functional: false,
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          useESModules,
        },
      ],
      '@babel/plugin-transform-object-assign',
    ],
  };
};
