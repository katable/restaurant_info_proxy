const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const cors = require('cors');
const Promise = require("bluebird");
const rp = require('request-promise');
const port = process.env.PORT || 1337;

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/restaurant/profile/:restaurant_id', (req, res) => {
  rp(`http://localhost:3001/restaurant/profile/${req.params.restaurant_id}`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.get('/reservations/timesBookedToday/:restaurant_id', (req, res) => {
  rp(`http://localhost:3002/reservations/timesBookedToday/${req.params.restaurant_id}`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.get('/reservations/inventory', (req, res) => {
  rp(`http://localhost:3002/${req.originalUrl}`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
  
});

app.get('/restaurants/:restaurant_id/menu', (req, res) => {
  rp(`http://localhost:3000/restaurants/${req.params.restaurant_id}/menu`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.get('/restaurant/:restaurant_id/reviews', (req, res) => {
  rp(`http://localhost:8080/restaurant/${req.params.restaurant_id}/reviews`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.get('/reviews/:review_id', (req, res) => {
  rp(`http://localhost:8080/reviews/${req.params.review_id}`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.get('/user/:user_id/reviews', (req, res) => {
  rp(`http://localhost:8080/user/${req.params.user_id}/reviews`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.post('/reviews', (req, res) => {
  rp(`http://localhost:8080/reviews`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.delete('/reviews/:review_id', (req, res) => {
  rp(`http://localhost:8080/reviews/${req.params.review_id}`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.patch('/reviews/:review_id', (req, res) => {
  rp(`http://localhost:8080/reviews/${req.params.review_id}`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
