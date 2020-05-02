const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 4001;

const jellybeanBag = {
  mystery: {
    number: 4
  },
  lemon: {
    number: 5
  },
  rootBeer: {
    number: 25
  },
  cherry: {
    number: 3
  },
  licorice: {
    number: 1
  }
};


// Logging Middleware
// app.use(morgan('tiny'));
app.use(morgan('dev'));

//Body parser
app.use(bodyParser.json());

//Failiure message in case beanName not present
app.use('/beans/:beanName', (req, res, next) => {
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    const error = new Error('Bean with that name does not exist');
    error.status = 404;
    return next(error);
  };
  req.bean = jellybeanBag[beanName];
  req.beanName = beanName;
  next();
});

//GET ALL
app.get('/beans/', (req, res, next) => {
  res.send(jellybeanBag);
});


//POST new bean
app.post('/beans/', (req, res, next) => {
  const beanName = req.body.name;
  if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0) {
    const error = new Error('Bean with that name already exists!');
    error.status = 404;
    return next(error);
  }
  const numberOfBeans = Number(req.body.number) || 0;
  jellybeanBag[beanName] = {
    number: numberOfBeans
  };
  res.send(jellybeanBag[beanName]);
});

//GET indv bean
app.get('/beans/:beanName', (req, res, next) => {
  res.send(req.bean);
});

//POST add to bean number
app.post('/beans/:beanName/add', (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  req.bean.number += numberOfBeans;
  res.send(req.bean);
});

//POST decrease bean number
app.post('/beans/:beanName/remove', (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  if (req.bean.number < numberOfBeans) {
    const error = new Error('Not enough beans in the jar to remove!');
    error.status = 404;
    return next(error);
  }
  req.bean.number -= numberOfBeans;
  res.send(req.bean);
});

//DELETE bean
app.delete('/beans/:beanName', (req, res, next) => {
  req.bean = null;
  res.status(204).send();
});

//Update bean name
app.put('/beans/:beanName/name', (req, res, next) => {
  const newName = req.body.name;
  jellybeanBag[newName] = req.bean;
  req.bean = null;
  res.send(jellybeanBag[newName]);
});

app.use((err, req, res, next) => {
  let errStatus = err.status || 500;
  res.status(errStatus).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
