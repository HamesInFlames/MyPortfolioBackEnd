import express from "express";
import projectCtrl from "../controllers/project.controller.js";
import authCtrl from "../controllers/auth.controller.js";
import { isAdmin } from "../middleware/authorization.js";

const router = express.Router();

router.route("/")
  .get(projectCtrl.list)
  .post(projectCtrl.create)
  .delete(projectCtrl.removeAll);

router.route("/:id")
  .get(projectCtrl.read)
  .put(projectCtrl.update)
  .delete(projectCtrl.remove);

router
  .route("/project/:projectId")
  .post(authCtrl.requireSignin, isAdmin, projectCtrl.create)
  .put(authCtrl.requireSignin, isAdmin, projectCtrl.update)
  .delete(authCtrl.requireSignin, isAdmin, projectCtrl.remove);

export default router;