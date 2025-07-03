import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  title: String,
  firstname: String,
  lastname: String,
  email: String,
  completion: Date,
  description: String,
});

const Contact = mongoose.model("Contact", ContactSchema);
export default Contact;
