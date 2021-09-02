const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Joke = require('./models/joke');

mongoose.connect('mongodb://localhost:27017/node-api-101', { useNewUrlParser: true })
mongoose.connection.on('error', err => {
    console.error('MongoDB error', err);
});

app.use(express.json());

app.get('/', async(req, res) => {
    const jokes = await Joke.find({});
    res.json(jokes);
});

app.post('/', async(req, res) => {
    const payload = req.body;
    const joke = new Joke(payload);
    await joke.save();
    res.status(201).end();
});

app.get('/:id', async(req, res) => {
    const { id } = req.params;
    const joke = await Joke.findById(id);
    res.json(joke);
});

app.delete('/:id', async(req, res) => {
    const { id } = req.params;
    await Joke.findByIdAndDelete(id);
    res.status(204).end();
});

app.post('/:id/like', async(req, res) => {
    const { id } = req.params;
    await Joke.findByIdAndUpdate(id, { $inc: { like: 1 } });
    res.status(201).end();
});

app.post('/:id/dislike', async(req, res) => {
    const { id } = req.params;
    await Joke.findByIdAndUpdate(id, { $inc: { dislike: 1 } });
    res.status(201).end();
});

app.listen(9000, () => {
    console.log('Application is running on port 9000');
});