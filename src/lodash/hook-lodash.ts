module.exports = {
  ...module.exports,
  name: 'lodash-startup-hook',
  platforms: ['browser'],
  after: ['load-modules'],
  synchronous: true,
  startup: () => {
    try {
      (globalThis as any)._ =
        require('$:/plugins/Gk0Wk/lodash/lodash.min.js')._;
    } catch (e) {
      console.error(e);
    }
  },
};
