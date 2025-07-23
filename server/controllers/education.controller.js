// server/controllers/education.controller.js
import Education from '../models/education.model.js';

// GET all education entries
export const list = async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch education data.' });
  }
};

// GET single education entry by ID
export const read = async (req, res) => {
  try {
    const edu = await Education.findById(req.params.id);
    if (!edu) return res.status(404).json({ error: 'Education not found' });
    res.json(edu);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch education' });
  }
};

// POST new education entry
export const create = async (req, res) => {
  try {
    const { school, degree, year } = req.body;
    const newEducation = new Education({ school, degree, year });
    await newEducation.save();
    res.status(201).json(newEducation);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create education entry.' });
  }
};

// PUT update an education entry
export const update = async (req, res) => {
  try {
    const updated = await Education.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update education' });
  }
};

// DELETE an education entry
export const remove = async (req, res) => {
  try {
    const deleted = await Education.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete education' });
  }
};

// DELETE all education entries
export const removeAll = async (req, res) => {
  try {
    await Education.deleteMany();
    res.json({ message: 'All education entries deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete all entries' });
  }
};
