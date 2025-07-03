import mongoose from "mongoose";

const QualificationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  year: Number,
  field: String,
});

const Qualification = mongoose.model("Qualification", QualificationSchema);
export default Qualification;
