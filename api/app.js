var express = require('express');
var app = express();
var uuid = require('node-uuid');

var { Pool } = require('pg');
var pool = new Pool({
  connectionString: "postgres://postgres:postgres@db/postgres"
});

// Routes
app.get('/api/status', function(req, res) {
   console.log("Received request for /api/status");

   pool.connect(function(err, client, done) {
     if(err) {
       console.error("Error fetching client from pool:", err);
       return res.status(500).send('error fetching client from pool');
     }

     console.log("Connected to PostgreSQL, executing query");

     client.query('SELECT now() as time', [], function(err, result) {
       //call `done()` to release the client back to the pool
       done();

       if(err) {
         console.error("Error running query:", err);
         return res.status(500).send('error running query');
       }

       console.log("Query successful, returning result");

       return res.json({
         request_uuid: uuid.v4(),
         time: result.rows[0].time
       });
     });
   });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
