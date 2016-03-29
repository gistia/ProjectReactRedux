const _ = require('lodash');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.port || 3000;
const router = express.Router();
const logger = (req, res, next) => {
  console.log('->', `[${req.method}]`, req.path);
  next();
};
const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Request-Method", "*");
  res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET, OPTIONS");
  next();
};

function findMilestone(id) {
  const milestones = require('./milestones.json').milestones;
  return _.find(milestones, m => m.id === parseInt(id, 10));
}

function findTask(milestoneId, id) {
  const milestone = findMilestone(milestoneId);
  return _.find(milestone.tasks, t => t.id === parseInt(id, 10));
}

router.options('/*', (req, res, next) => {
  res.send('OK');
});

router.get('/projects', (req, res, next) => {
  const projects = require('./projects.json');
  res.json(projects);
});

router.get('/projects/:id', (req, res, next) => {
  const projects = require('./projects.json').projects;
  const project = _.find(projects, p => p.id === parseInt(req.params.id,10));
  res.json({ project });
});

router.get('/milestones/:id/tasks', (req, res, next) => {
  const milestones = require('./milestones.json').milestones;
  const milestone = _.find(milestones, m => m.id === parseInt(req.params.id, 10));
  if (!milestone) {
    res.status(404).send('Milestone not found');
    return;
  }
  const tasks = milestone.tasks;
  res.json({ tasks });
});

router.put('/milestones/:milestoneId/tasks/:id', (req, res, next) => {
  const receivedTask = req.body.task;
  const task = findTask(req.params.milestoneId, req.params.id);
  res.json({ task: Object.assign({}, task, receivedTask) });
});

app.use(cors);
app.use(logger);
app.use('/api/v1', router);
app.listen(port);
console.log('Running on port', port);
