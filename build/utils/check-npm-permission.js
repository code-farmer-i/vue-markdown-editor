const exec = require('./exec');
const signale = require('signale');

// 检查npm 是否登录
async function checkNpmLogin() {
  try {
    const npmUserName = await exec('npm whoami');

    return npmUserName.replace(/[\r\n]/g, '');
  } catch (e) {
    signale.error('请检查npm 登录状态');
  }
}

// 检查是否有当前包的发布权限
async function checkPackagePermission(userName, packageName) {
  try {
    const packagePermissionInfo = JSON.parse(
      await exec(`npm access ls-collaborators ${packageName}`)
    );

    return (
      Object.keys(packagePermissionInfo).includes(userName) &&
      packagePermissionInfo[userName].includes('write')
    );
  } catch (e) {
    signale.error('确认包发布权限失败');
  }
}

module.exports = async function checkNpmPermission(packageName) {
  const userName = await checkNpmLogin();

  const hasPublishPackagePermission = await checkPackagePermission(userName, packageName);

  return hasPublishPackagePermission;
};
