const mongoClient = require("mongodb").MongoClient;

const state = {
  db: null,
};

module.exports.connect = function (done) {
  const url =
  "mongodb+srv://aswindaspk10:A.S.W.I.N@cluster0.63xuwel.mongodb.net/?retryWrites=true&w=majority";
const dbname = "bluebuck";

  mongoClient.connect(url, { useUnifiedTopology: true }, (err, data) => {
    if (err) {
      return done(err);
    }
    state.db = data.db(dbname);

    done();
  });
};

module.exports.get = function () {
  return state.db;
};
