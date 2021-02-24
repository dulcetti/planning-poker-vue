module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['**/src/components/**/*.[jt]s?(x)'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
};
