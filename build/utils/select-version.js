const semver = require('semver');
const inquirer = require('inquirer');
const { isBetaVersion } = require('./index');
const getReleaseVersion = require('./get-release-version');

const customVersionOption = '自定义版本号';

module.exports = async function selectVersion(curVersion) {
  const releaseVersions = getReleaseVersion(curVersion);

  const question = [
    {
      type: 'list',
      message: `请选择要发布的版本号（当前版本：${curVersion}）:`,
      name: 'version',
      choices: [...releaseVersions, customVersionOption],
    },
    {
      type: 'input',
      message: '请输入要发布的版本号：',
      name: 'customVersion',
      when(answers) {
        return answers.version === customVersionOption;
      },
      validate(releaseVersion) {
        if (!semver.valid(releaseVersion)) {
          return '请按照Semantic Version规范定义版本号';
        }

        if (semver.lt(releaseVersion, curVersion)) {
          return '发布的版本号应该是递增的';
        }

        return true;
      },
    },
    {
      type: 'confirm',
      name: 'confirm',
      message({ version, customVersion }) {
        return `确认发布版本 ${customVersion || version} ?`;
      },
      when(answers) {
        return answers.version || answers.customVersion;
      },
    },
  ];

  const answers = await inquirer.prompt(question);
  const selectedVersion = answers.customVersion || answers.version;

  if (answers.confirm && selectedVersion) {
    return {
      version: selectedVersion,
      isBeta: isBetaVersion(selectedVersion),
    };
  }
};
