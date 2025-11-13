import { Router } from 'express';
import empresaController from '../controller/empresaController.js'
import { validarApiKey } from '../middlewares/apiKeyMiddleware.js'

const router = new Router();

router.get('/:id', validarApiKey, empresaController.show);

export default router;