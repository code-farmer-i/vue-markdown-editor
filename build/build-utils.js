const fs = require('fs-extra');
const path = require('path');
const babel = require('@babel/core');

const babelConfig = {
  configFile: path.join(__dirname, '../babel.config.js'),
};

const scriptRegExp = /\.(js)$/;
const isDir = (dir) => fs.lstatSync(dir).isDirectory();
const isScript = (path) => scriptRegExp.test(path);

function compile(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);

    // scan dir
    if (isDir(filePath)) {
      return compile(filePath);
    }

    // compile js
    if (isScript(file)) {
      const { code } = babel.transformFileSync(filePath, babelConfig);
      fs.removeSync(filePath);
      fs.outputFileSync(filePath.replace(scriptRegExp, '.js'), code);
    }
  });
}

['utils', 'plugins'].forEach((folderName) => {
  const libDir = path.join(__dirname, `../lib/${folderName}`);
  const srcDir = path.join(__dirname, `../src/${folderName}`);

  fs.emptyDirSync(libDir);
  fs.copySync(srcDir, libDir);

  process.env.BABEL_MODULE = 'commonjs';
  process.env.USE_BABEL_RESOLVE = true;
  compile(libDir);
});
