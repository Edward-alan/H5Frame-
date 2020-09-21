const { notEmpty } = require('../utils.js');

module.exports = {
  description: 'generate a mock',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'mock please',
    validate: notEmpty('name'),
  }],
  actions: () => {
    const name = '{{name}}';
    const actions = [{
      type: 'add',
      path: `mock/modules/${name}.js`,
      templateFile: 'plop-templates/mock/index.hbs',
    }];

    return actions;
  },
};
