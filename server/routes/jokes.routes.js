const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
  app.get("/api/jokes", JokeController.findAllJokes);
  app.get("/api/jokes/random", JokeController.findRandomJoke);
  app.get("/api/jokes/:_id", JokeController.findSingleJoke);
  app.post("/api/jokes/new", JokeController.createJoke);
  app.put("/api/jokes/update/:_id", JokeController.updateJoke);
  app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);
}