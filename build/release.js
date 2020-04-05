const runTasks = require('./utils/run-tasks');
const selectVersion = require('./utils/select-version');
const checkNpmPermission = require('./utils/check-npm-permission');

const packageJson = require('../package.json');
const currentVersion = packageJson.version;

async function release() {
  const hasPublishPackagePermission = await checkNpmPermission(
    packageJson.name
  );

  const { version: releaseVersion, isBeta } = await selectVersion(
    currentVersion
  );

  // set version
  await runTasks([`npm version ${releaseVersion} --no-git-tag-version`]);

  try {
    // build
    await runTasks(['npm run build:entry', 'npm run build:pkg']);

    //commit
    await runTasks([
      'git add .',
      `git tag v${releaseVersion}`,
      `git commit -m "chore: release ${releaseVersion}"`,
    ]);

    // push
    await runTasks([
      'git push',
      `git push origin refs/tags/v${releaseVersion}`,
    ]);

    // publish
    if (isBeta) {
      runTasks(['npm publish --tag beta']);
    } else {
      runTasks(['npm publish']);
    }
  } catch (e) {
    // rollback version and delete local tag
    runTasks([
      `npm version ${currentVersion} --no-git-tag-version`,
      `git tag -d v${releaseVersion}`,
    ]);
  }
}

release();
