// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date", function(req,res,next){
  var dates = new Date(req.params.date.toString());
  console.log("req.params.date, is",req.params.date," type is", typeof req.params.date);
  console.log("dates is",dates," type is", typeof dates*1);
  console.log(dates.toString());
    if(!(dates.toString() ==="Invalid Date"))
        {console.log(dates ==="Invalid Date");
        res.json({unix: dates.getTime(), utc: dates.toUTCString()});}
    else{
        var dates = new Date(Number(req.params.date));
            if(!(dates.toString() ==="Invalid Date"))
            {console.log(dates ==="Invalid Date");
            res.json({unix: dates.getTime(), utc: dates.toUTCString()});}
            else  {
              res.json({error: 'Invalid Date'});}
          }
})


// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
