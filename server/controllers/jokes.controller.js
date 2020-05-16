const Joke = require("../models/joke.model.js");

module.exports.findAllJokes = (req,res) => {
  Joke.find()
    .then(allJokes => res.json(allJokes))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.findRandomJoke = (req, res) => {
  Joke.aggregate([{ $sample: { size: 1} }])
    .then(randomJoke => res.json(randomJoke))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.findSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params._id })
    .then(singleJoke => res.json(singleJoke))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json(newlyCreatedJoke))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {new: true})
    .then(updatedJoke => res.json(updatedJoke))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params._id })
    .then(result => res.json(result))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};