const chokidar = require('chokidar');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const path = require('path');
const Mock = require('mockjs');
const { mocks } = require('./index.js');

const mockDir = path.join(process.cwd(), 'mock');

const responseFake = (url, type, respond) => ({
  url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
  type: type || 'get',
  response(req, res) {
    console.log(`request invoke:${req.path}`);
    res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond));
  },
});

function registerRoutes(app) {
  let mockLastIndex;
  const mocksForServer = mocks.map((route) => responseFake(route.url, route.type, route.response));
  // eslint-disable-next-line no-restricted-syntax
  for (const mock of mocksForServer) {
    app[mock.type](mock.url, mock.response);
    // eslint-disable-next-line no-underscore-dangle
    mockLastIndex = app._router.stack.length;
  }
  const mockRoutesLength = Object.keys(mocksForServer).length;
  return {
    mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength,
  };
}

function unregisterRoutes() {
  Object.keys(require.cache).forEach((i) => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)];
    }
  });
}

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  const mockRoutes = registerRoutes(app);
  let { mockRoutesLength } = mockRoutes;
  let { mockStartIndex } = mockRoutes;

  chokidar.watch(mockDir, {
    ignored: /mock-server/,
    ignoreInitial: true,
  }).on('all', (event, p) => {
    if (event === 'change' || event === 'add') {
      try {
        // eslint-disable-next-line no-underscore-dangle
        app._router.stack.splice(mockStartIndex, mockRoutesLength);

        unregisterRoutes();

        // eslint-disable-next-line no-shadow
        const mockRoutes = registerRoutes(app);
        mockRoutesLength = mockRoutes.mockRoutesLength;
        mockStartIndex = mockRoutes.mockStartIndex;

        console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${p}`));
      } catch (error) {
        console.log(chalk.redBright(error));
      }
    }
  });
};
