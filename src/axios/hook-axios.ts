module.exports = {
  ...module.exports,
  name: 'axios-startup-hook',
  platforms: ['browser'],
  after: ['load-modules'],
  synchronous: true,
  startup: () => {
    try {
      (
        globalThis as any
      ).axios = require('$:/plugins/Gk0Wk/axios/axios.min.js');
    } catch (e) {
      console.error(e);
    }
  },
};
