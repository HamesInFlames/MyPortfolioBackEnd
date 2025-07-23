// server/routes/education.routes.js
import express from 'express';
import * as eduCtrl from '../controllers/education.controller.js';
import authCtrl from '../controllers/auth.controller.js';
import { isAdmin } from '../middleware/authorization.js';

const router = express.Router();

router
  .route('/')
  .get(eduCtrl.list)
  .post(eduCtrl.create)
  .delete(eduCtrl.removeAll); // optional mass delete

router
  .route('/:id')
  .get(eduCtrl.read)
  .put(eduCtrl.update)
  .delete(eduCtrl.remove);

// Optional admin-protected versions
router
  .route('/education/:educationId')
  .post(authCtrl.requireSignin, isAdmin, eduCtrl.create)
  .put(authCtrl.requireSignin, isAdmin, eduCtrl.update)
  .delete(authCtrl.requireSignin, isAdmin, eduCtrl.remove);

export default router;
