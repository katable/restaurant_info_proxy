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

const restaurantInfoUrl = 'http://ec2-52-53-177-126.us-west-1.compute.amazonaws.com';
const resyUrl = 'http://ec2-54-153-45-179.us-west-1.compute.amazonaws.com';
const reviewsUrl = 'http://ec2-18-219-151-31.us-east-2.compute.amazonaws.com';
const menuUrl = 'http://ec2-18-212-129-29.compute-1.amazonaws.com';

app.get('/restaurant/profile/:restaurant_id', (req, res) => {
  rp(`${restaurantInfoUrl}/restaurant/profile/${req.params.restaurant_id}`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.get('/reservations/timesBookedToday/:restaurant_id', (req, res) => {
  rp(`${resyUrl}/reservations/timesBookedToday/${req.params.restaurant_id}`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.get('/reservations/inventory', (req, res) => {
  rp(`${resyUrl}/${req.originalUrl}`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
  
});

app.get('/restaurants/:restaurant_id/menu', (req, res) => {
  rp(`${menuUrl}/restaurants/${req.params.restaurant_id}/menu`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.get('/restaurant/:restaurant_id/reviews', (req, res) => {
  rp(`${reviewsUrl}/restaurant/${req.params.restaurant_id}/reviews`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.get('/reviews/:review_id', (req, res) => {
  rp(`${reviewsUrl}/reviews/${req.params.review_id}`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.get('/user/:user_id/reviews', (req, res) => {
  rp(`${reviewsUrl}/user/${req.params.user_id}/reviews`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.post('/reviews', (req, res) => {
  rp(`${reviewsUrl}/reviews`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.delete('/reviews/:review_id', (req, res) => {
  rp(`${reviewsUrl}/reviews/${req.params.review_id}`)
    .then((body) => {
      res.send(body);
    })
    .catch((e) => {
      throw(e);
  });
});

app.patch('/reviews/:review_id', (req, res) => {
  rp(`${reviewsUrl}/reviews/${req.params.review_id}`)
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
