module.exports = {
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
