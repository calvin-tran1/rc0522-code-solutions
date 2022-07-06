const fs = require('fs');
const data = require('./data.json');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const id in data.notes) {
    notesArr.push(data.notes[id]);
  }
  res.status(200).json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (id in data.notes) {
    res.status(200).json(data.notes[id]);
  } else {
    res.status(404).json({ error: `${id} not found` });
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'missing content property' });
  } else if (req.body.content !== undefined) {
    let id = data.nextId;
    data.notes[id] = req.body;
    data.notes[id].id = id;
    id++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (id in data.notes) {
    delete data.notes[id];
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  } else {
    res.status(404).json({ error: `${id} not found` });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (id < 0 || !req.body.content) {
    res.status(400).json({ error: 'id must be a positive integer and must contain content property' });
  } else if (id in data.notes === false && req.body.content !== undefined) {
    res.status(404).json({ error: `${id} not found` });
  } else if (id in data.notes && req.body.content !== undefined) {
    data.notes[id].content = req.body.content;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(data.notes[id]);
      }
    });
  }
});

app.listen(3000, () => {

});
