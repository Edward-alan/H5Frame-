const viewGenerator = require('./plop-templates/view/prompt');
const componentGenerator = require('./plop-templates/component/prompt');
const storeGenerator = require('./plop-templates/store/prompt');
const routerGenerator = require('./plop-templates/router/prompt');
const mockGenerator = require('./plop-templates/mock/prompt');

module.exports = (plop) => {
  plop.setGenerator('view', viewGenerator);
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('store', storeGenerator);
  plop.setGenerator('router', routerGenerator);
  plop.setGenerator('mock', mockGenerator);
};
