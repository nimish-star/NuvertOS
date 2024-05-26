const express = require('express');
const bodyParser = require('body-parser');
const { Compound } = require('./models');  // Import the Compound model
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:4200' // Replace with your frontend URL in production
};
app.use(cors(corsOptions));

// CRUD operations

// Create a new compound
app.post('/compounds', async (req, res) => {
  try {
    const compound = await Compound.create(req.body);
    res.status(201).json(compound);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all compounds
app.get('/compounds', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 30;
    const offset = (page - 1) * pageSize;

    const { count, rows } = await Compound.findAndCountAll({
      limit: pageSize,
      offset: offset
    });

    res.status(200).json({ compounds: rows, total: count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get a single compound by ID
app.get('/compounds/:id', async (req, res) => {
  try {
    const compound = await Compound.findByPk(req.params.id);
    if (!compound) {
      return res.status(404).json({ error: 'Compound not found' });
    }
    res.status(200).json(compound);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a compound
app.put('/compounds/:id', async (req, res) => {
  try {
    const [updated] = await Compound.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Compound not found' });
    }
    const updatedCompound = await Compound.findByPk(req.params.id);
    res.status(200).json(updatedCompound);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a compound
app.delete('/compounds/:id', async (req, res) => {
  try {
    const deleted = await Compound.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Compound not found' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
