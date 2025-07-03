import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  link: String,
  completion: Date,
});

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
