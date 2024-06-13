const express = require('express');
const bodyParser = require('body-parser');
const { Curriculum } = require('./models');

const app = express();
app.use(bodyParser.json());

// Endpoint para listar todos os currículos
app.get('/curriculum', async (req, res) => {
  const curriculums = await Curriculum.findAll();
  res.json(curriculums);
});

// Endpoint para criar um novo currículo
app.post('/curriculum', async (req, res) => {
  const curriculum = await Curriculum.create(req.body);
  res.json(curriculum);
});

// Endpoint para obter um currículo específico
app.get('/curriculum/:id', async (req, res) => {
  const curriculum = await Curriculum.findByPk(req.params.id);
  res.json(curriculum);
});

// Endpoint para atualizar um currículo
app.put('/curriculum/:id', async (req, res) => {
  const curriculum = await Curriculum.findByPk(req.params.id);
  await curriculum.update(req.body);
  res.json(curriculum);
});

// Endpoint para deletar um currículo
app.delete('/curriculum/:id', async (req, res) => {
  const curriculum = await Curriculum.findByPk(req.params.id);
  await curriculum.destroy();
  res.json({ message: 'Curriculum deleted' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
