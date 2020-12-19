/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  /**
   * 跨域
   **/
  config.cors = {
    origin: '*', // 访问白名单,根据你自己的需要进行设置
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  // add your config here
  config.mongodb = {
    app: true,
    agent: false,
    username: '',
    password: '',
    hosts: '127.0.0.1:27017',
    db: 'test',
    query: '',
    // defalut: {
    //     username: '',
    //     password: '',
    //     hosts: '127.0.0.1:27017',
    //     db: 'test',
    //     query: ''
    // },
    // client: {
    //     username: '',
    //     password: '',
    //     hosts: '127.0.0.1:27017',
    //     db: 'test',
    //     query: ''
    // }

    
  };


  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585029041331_963';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',

  };
  return {
    ...config,
    ...userConfig,
  };
};
