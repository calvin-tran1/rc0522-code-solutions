const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.post('/api/grades', (req, res) => {
  const score = Number(req.body.score);
  const { name, course } = req.body;

  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'Score must be an integer value between 0 to 100' });
    return;
  }

  if (!name || !course || !score) {
    res.status(400).json({ error: 'Missing: "name", "course", and "score" are all required fields' });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
  `;
  const params = [name, course, score];

  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const score = Number(req.body.score);
  const { name, course } = req.body;

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
  }

  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'Score must be an integer value between 0 to 100' });
    return;
  }

  if (!name || !course || !score) {
    res.status(400).json({ error: 'Missing: "name", "course", and "score" are all required fields' });
    return;
  }

  const sql = `
    update "grades"
       set "name" = $1,
           "course" = $2,
           "score" = $3
     where "gradeId" = $4
  `;
  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(result => {
      const [grade] = result.rows;

      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
        return;
      }

      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const [grade] = result.rows;

      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
        return;
      }

      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
