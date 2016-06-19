module.exports = () => {
  return {
    files: [
      'node_modules',
      'src/**/*.js'
    ],
    tests: [
      'test/**/*.Spec.js'
    ],
    env: {
      type: 'node'
    }
  };
};