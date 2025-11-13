import Usuario from '../models/UsuarioModel.js';
import Empresa from '../models/EmpresaModel.js';

class UsuarioController{
  async show(req, res){
    try{
      const {id} = req.params;

      if(!id){
        return res.status(400).json({
          errors: ['id não informado.']
        })
      }

      const usuario = await new Usuario().getById(id);

      if(!usuario){
        return res.status(204).json({
          errors: ['Usuario não existe']
        })
      }

      return res.json(usuario);
    } catch(e){
      const errors = Array.isArray(e.errors)
        ? e.errors.map(err => err.message)
        : [e.message || 'Erro inesperado'];
      return res.status(400).json({ errors });
    }
  }

  async index(req, res){
    try{
      const { cpf } = req.params;

      if(!cpf) {
        return res.status(400).json({
          errors: ['id não informado.']
        })
      }

      const usuario = await new Usuario().getByCPF(cpf);

      if(!usuario){
        return res.status(204).json({
          errors: ['Usuario não existe']
        })
      }

      return res.json(usuario);
    } catch(e){
      const errors = Array.isArray(e.errors)
        ? e.errors.map(err => err.message)
        : [e.message || 'Erro inesperado'];
      return res.status(400).json({ errors });
    }
  }

  async buscarUsuarioComEmpresas(req, res){
    try{
      const { cpf } = req.params;
      if(!cpf) return res.status(400).json({ error: "CPF é obrigatório." });

      // busca usuarios com cpf
      const usuarios = await new Usuario().getByCPF(cpf);
      if(usuarios.length === 0){
        return res.status(404).json({ error: "Usuário não encontrado." });
      }

      // extrai ids das empresas relacionadas
      const empresaIds = usuarios.map((u) => u.id_empresa).filter(Boolean);

      // busca as empresas correspondentes
      const empresas = await new Empresa().getByIds(empresaIds);

      const resposta = {
        usuarios,
        empresas,
      };

      return res.json(resposta);
    } catch(e){
      console.log(e);
      res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}

export default new UsuarioController;