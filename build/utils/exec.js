const shell = require('shelljs');
const signale = require('signale');

module.exports = function (shellScript, options = { silent: true }) {
  signale.start(shellScript);
  signale.pending(shellScript);

  return new Promise((resolve, reject) => {
    shell.exec(shellScript, options, (code, stdout, stderr) => {
      if (code === 0) {
        signale.success(shellScript);
        resolve(stdout);
      } else {
        signale.error(shellScript);
        reject(stderr);
      }
    });
  });
};
