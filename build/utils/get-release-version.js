const semver = require('semver');
const { isBetaVersion } = require('./index');

function getNextVersion(version) {
  const nextVersions = [];

  ['patch', 'minor', 'major'].forEach((type) =>
    nextVersions.push(
      semver.inc(version, type),
      semver.inc(version, `pre${type}`, 'beta')
    )
  );

  return nextVersions;
}

function getNextVersionFromBetaVersion(version) {
  return [
    semver.inc(version, 'patch'),
    semver.inc(version, 'prerelease', 'beta'),
  ];
}

function getReleaseVersion(version) {
  let releaseVersions;

  if (isBetaVersion(version)) {
    releaseVersions = getNextVersionFromBetaVersion(version);
  } else {
    releaseVersions = getNextVersion(version);
  }

  return releaseVersions;
}

module.exports = getReleaseVersion;
