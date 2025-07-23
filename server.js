import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./server/routes/auth.routes.js";
import educationRoutes from "./server/routes/education.routes.js";
import contactRoutes from "./server/routes/contact.routes.js";
import projectRoutes from "./server/routes/project.routes.js";
import qualificationRoutes from "./server/routes/qualification.routes.js";

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

app.listen(config.port, (err) => {
  console.info(`🚀 Server started at http://localhost:${config.port}`);
});
