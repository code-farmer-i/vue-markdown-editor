const runTasks = require('./utils/run-tasks');
const selectVersion = require('./utils/select-version');
const checkNpmPermission = require('./utils/check-npm-permission');

const packageJson = require('../package.json');

const currentVersion = packageJson.version;

async function release() {
  await checkNpmPermission(packageJson.name);

  const { version: releaseVersion, isBeta } = await selectVersion(currentVersion);

  // set version
  await runTasks([`npm version ${releaseVersion} --no-git-tag-version`]);

  try {
    // build
    await runTasks(['npm run build:pkg']);

    // commit
    await runTasks(['git add .', `git commit -m "chore: release ${releaseVersion}"`]);

    // changelog
    await runTasks(['npm run changelog']);

    // commit
    await runTasks(['git add .', `git commit -m "docs(changelog): ${releaseVersion}"`]);

    // tag
    await runTasks([`git tag v${releaseVersion}`]);

    // push
    await runTasks(['git push', `git push origin refs/tags/v${releaseVersion}`]);

    // publish
    if (isBeta) {
      runTasks(['npm publish --tag beta --access=public']);
    } else {
      runTasks(['npm publish --access=public']);
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
