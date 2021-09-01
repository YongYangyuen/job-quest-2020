const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jokeSchema = new Schema({
    name: String,
    like: Number,
    dislike: Number
});

const JokeModel = mongoose.model('Joke', jokeSchema);

module.exports = JokeModel;