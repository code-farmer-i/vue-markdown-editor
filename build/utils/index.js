const semver = require('semver');

module.exports.isBetaVersion = function (version) {
  const res = semver.prerelease(version);

  return !!res && res[0] === 'beta';
};
