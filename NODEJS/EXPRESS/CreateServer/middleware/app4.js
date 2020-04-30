const express = require('express');
const morgan = require('morgan');
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

//Passing data obtained from request body
const bodyParser = (req, res, next) => {
  let bodyData = '';
  req.on('data', (data) => {
    bodyData += data;
  });

  req.on('end', () => {
    if (bodyData) {
      req.body = JSON.parse(bodyData);
    }
    next();
  })
};

// Logging Middleware
app.use(morgan('dev'));


//Failiure message in case beanName not present
app.use('/beans/:beanName', (req, res, next) => {
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    return res.status(404).send('Bean with that name does not exist');
  };
  req.bean = jellybeanBag[beanName];
  req.beanName = beanName;
  next();
});




//GET ALL
app.get('/beans/', (req, res, next) => {
  res.send(jellybeanBag);
});


//PPOST new bean
app.post('/beans/', bodyParser, (req, res, next) => {
  const beanName = req.body.name;
  if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0) {
    return res.status(404).send('Bean with that name already exists!');
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
app.post('/beans/:beanName/add', bodyParser, (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  req.bean.number += numberOfBeans;
  res.send(req.bean);
});

//POST decrease bean number
app.post('/beans/:beanName/remove', bodyParser, (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  if (req.bean.number < numberOfBeans) {
    return res.status(400).send('Not enough beans in the jar to remove!');
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
app.put('/beans/:beanName/name', bodyParser, (req, res, next) => {
  const newName = req.body.name;
  jellybeanBag[newName] = req.bean;
  req.bean = null;
  res.send(jellybeanBag[newName]);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});