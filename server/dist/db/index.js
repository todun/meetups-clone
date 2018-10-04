'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { db_username, db_password, db_host, db_port, db_name } = _config2.default;

const db_url = `mongodb://${db_username}:${db_password}@${db_host}.mlab.com:${db_port}/${db_name}`;

// DB Config
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(db_url, {
  useNewUrlParser: true
}).then(() => console.log('Successful DB connection')).catch(error => console.log(`Connection error: ${error}`));
//# sourceMappingURL=index.js.map