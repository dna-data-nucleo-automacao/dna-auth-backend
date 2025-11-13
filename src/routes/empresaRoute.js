import { Router } from 'express';
import empresaController from '../controller/empresaController.js'

const router = new Router();

router.get('/:id', empresaController.show);

export default router;