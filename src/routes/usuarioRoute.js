import { Router } from 'express';
import usuarioController from '../controller/usuarioController.js'
import { validarApiKey } from '../middlewares/apiKeyMiddleware.js'

const router = new Router();

router.get('/:id', validarApiKey, usuarioController.show);
router.get('/cpf/:cpf', validarApiKey, usuarioController.buscarUsuarioComEmpresas);

export default router;