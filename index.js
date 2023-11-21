const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const port = 1155;

const mongoUri = 'mongodb+srv://{username}:{password}@cluster0.koaxd.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'movieDatabase';
const collectionName = 'movies';

app.use(express.json());

let client;

app.get('/', (req, res) => {
    res.send('Welcome to the Movie Info Microservice!');
});

// Get all movies
app.get('/movies', async (req, res) => {
  try {
    client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const database = client.db(dbName);
    const moviesCollection = database.collection(collectionName);

    const movies = await moviesCollection.find().toArray();

    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (client) {
      await client.close();
    }
  }
});

// Get movie poster by title
app.get('/movies/:title/poster', async (req, res) => {
  const movieTitle = req.params.title.replace(/%20/g, ' '); // Replace %20 with space

  try {
    client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const database = client.db(dbName);
    const moviesCollection = database.collection(collectionName);

    const movie = await moviesCollection.findOne({ title: movieTitle });

    if (movie && movie.poster_url) {
      res.send(`<a href="${movie.poster_url}" target="_blank">${movie.poster_url}</a>`);
    } else {
      res.status(404).json({ error: 'Poster not found' });
    }
  } catch (error) {
    console.error('Error fetching poster:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (client) {
      await client.close();
    }
  }
});

// Get movie summary by title
app.get('/movies/:title/summary', async (req, res) => {
  const movieTitle = req.params.title.replace(/%20/g, ' '); // Replace %20 with space

  try {
    client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const database = client.db(dbName);
    const moviesCollection = database.collection(collectionName);

    const movie = await moviesCollection.findOne({ title: movieTitle });

    if (movie && movie.plot_summary) {
      res.send(movie.plot_summary);
    } else {
      res.status(404).json({ error: 'Summary not found' });
    }
  } catch (error) {
    console.error('Error fetching summary:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (client) {
      await client.close();
    }
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://flip3.engr.oregonstate.edu:${port}`);
});

