// server/models/education.model.js
import mongoose from 'mongoose';

const EducationSchema = new mongoose.Schema({
  school: { type: String, required: true },
  degree: { type: String, required: true },
  year: { type: String, required: true },
});

export default mongoose.model('Education', EducationSchema);
