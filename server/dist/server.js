'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { port } = _config2.default;

_http2.default.createServer(_app2.default).listen(port, () => {
  console.log(`Server running at ${port}`);
});
//# sourceMappingURL=server.js.map