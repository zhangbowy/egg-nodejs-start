'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};

exports.mongo = {
  enable: true,
  package: 'egg-mongo',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};
