module.exports = {
  default: {
    paths: ['tests/feature/**/*.feature'],
    require: [
      'tests/step-definition/**/*.ts',
      'tests/hooks/**/*.ts',
      'tests/support/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    format: ['progress']
  }
}
