var apiServer;
var appServer;

module.exports = {
  before: function() {
    var exec = require('child_process').exec;

    // start fake API server
    console.log('Starting Fake API server...');
    apiServer = exec('node test/helper/dummy-api.js', function(error, stdout, stderr) {
      console.log('error', error);
      console.log('stdout', stdout);
      console.log('stderr', stderr);
    });

    console.log('Starting app server...');
    appServer = exec('npm start', function(error, stdout, stderr) {
      console.log('error', error);
      console.log('stdout', stdout);
      console.log('stderr', stderr);
    });
  },

  after: function() {
    console.log('Shutting down API server...');
    apiServer.kill();

    console.log('Shutting down app server...');
    appServer.kill();

    process.exit(0);
  },

  'Choosing a project': function(browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('.project-item', 1000)
      .click('h4:first-child')
      .pause(1000)
      .assert.containsText('.page-title h1', 'Activities Framework')
      .end();
  },

  'Selecting a task': function(browser) {
    browser
      .url('http://localhost:8080/projects/7')
      .waitForElementVisible('.milestone-task-toggler', 1000)
      .click('.milestone-task-toggler:first-child')
      .assert.containsText('.display:first-child', 'Action Bar Tweaks')
      .end();
  },

  'Starting a task': function(browser) {
    browser
      .url('http://localhost:8080/projects/7')
      .waitForElementVisible('.milestone-task-toggler', 1000)
      .click('.milestone-task-toggler')
      .waitForElementVisible('button.start:first-child', 500)
      .click('button.start:first-child')
      .waitForElementVisible('.task-126 .task-status button.finish', 500)
      .assert.containsText('.task-126 .task-status button:first-child', 'Finish')
      .assert.containsText('.task-126 .task-status button:last-child', 'Pause')
      .end();
  }
}
