const { notEmpty } = require('../utils.js');

module.exports = {
  description: 'generate a store',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'store please',
    validate: notEmpty('name'),
  }],
  actions: () => {
    const name = '{{name}}';
    const actions = [{
      type: 'add',
      path: `src/store/modules/${name}.js`,
      templateFile: 'plop-templates/store/index.hbs',
    }];

    return actions;
  },
};
