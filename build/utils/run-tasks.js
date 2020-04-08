const shell = require('shelljs');
const signale = require('signale');

const { Signale } = signale;

module.exports = function runTasks(tasks) {
  tasks.forEach((task) => {
    signale.start(task);

    const interactive = new Signale({ interactive: true });
    interactive.pending(task);
    const result = shell.exec(`${task}`);
    if (result.code !== 0) {
      interactive.error(task);
    } else {
      interactive.success(task);
    }
  });
};
