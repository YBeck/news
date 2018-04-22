const express = require("express");
const app = express();
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";
let sources;

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://ybeck.auth0.com/.well-known/jwks.json"
  }),
  audience: "YBecknews.com",
  issuer: "https://ybeck.auth0.com/",
  algorithms: ["RS256"]
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.static(__dirname + "/public"));

app.get("/authors", jwtCheck, (req, res) => {
  sources.find().toArray((err, result) => {
    if (err) {
      return console.error;
    }
    // let header = `Bearer${getAccessToken()}`;
    // res.header(("Authorization", header));
    res.end(JSON.stringify(result));
  });
});

MongoClient.connect(url, function(err, client) {
  if (err) {
    throw err;
  }
  const thedb = client.db("authors");
  sources = thedb.collection("source");
  // console.log(sources);
});

app.listen("8080", () => {
  console.log("express listening on port 8080");
});
