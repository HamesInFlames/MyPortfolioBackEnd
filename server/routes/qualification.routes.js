import express from "express";
import qualificationCtrl from "../controllers/qualification.controller.js";

const router = express.Router();

router.route("/")
  .get(qualificationCtrl.list)
  .post(qualificationCtrl.create)
  .delete(qualificationCtrl.removeAll);

router.route("/:id")
  .get(qualificationCtrl.read)
  .put(qualificationCtrl.update)
  .delete(qualificationCtrl.remove);

export default router;
