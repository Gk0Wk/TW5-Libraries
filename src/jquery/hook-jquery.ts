module.exports = {
  ...module.exports,
  name: 'jquery-startup-hook',
  platforms: ['browser'],
  after: ['load-modules'],
  synchronous: true,
  startup: () => {
    try {
      (globalThis as any).$ = require('$:/plugins/Gk0Wk/jquery/jquery.min.js');
    } catch (e) {
      console.error(e);
    }
  },
};
