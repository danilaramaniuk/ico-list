module.exports = {
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/src/$1',
    '(\\.less|\\.css)$': 'identity-obj-proxy',
  },
  testURL: 'http://localhost',
  moduleFileExtensions: ['js'],
  modulePaths: ['src'],
  testRegex: '__tests__/.*\\.spec\\.js?$',
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
};
