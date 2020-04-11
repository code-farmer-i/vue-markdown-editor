module.exports = function (api) {
  if (api) {
    api.cache.never();
  }

  const { BABEL_MODULE, USE_BABEL_RESOLVE } = process.env;
  const useESModules = BABEL_MODULE !== 'commonjs';

  const config = {
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

  if (USE_BABEL_RESOLVE) {
    config.plugins.push([
      'module-resolver',
      {
        alias: {
          '@': './lib',
        },
      },
    ]);
  }

  return config;
};
