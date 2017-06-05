const reporters = require('jasmine-reporters');
const reporter = new reporters.JUnitXmlReporter({
  consolidateAll: false,
  filePrefix: 'jest-junit-result-',
  savePath: 'test-reports/unit'
});
jasmine.getEnv().addReporter(reporter);
