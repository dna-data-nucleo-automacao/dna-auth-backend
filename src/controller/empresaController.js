import Empresa from '../models/EmpresaModel.js';

class EmpresaController{
  async show(req, res){
    try{
      const {id} = req.params;

      if(!id){
        return res.status(400).json({
          errors: ['id não informado.']
        })
      }

      const empresa = await new Empresa().getById(id);

      if(!empresa){
        return res.status(204).json({
          errors: ['empresa não existe']
        })
      }

      return res.json(empresa);
    } catch(e){
      const errors = Array.isArray(e.errors)
        ? e.errors.map(err => err.message)
        : [e.message || 'Erro inesperado'];
      return res.status(400).json({ errors });
    }
  }
}

export default new EmpresaController;