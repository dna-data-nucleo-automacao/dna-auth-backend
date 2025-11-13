export function validarApiKey(req, res, next){
  const chave = req.headers["x-api-key"];
  const chaveCorreta = process.env.DNA_API_KEY;

  if(!chave || chave !== chaveCorreta){
    return res.status(401).json({error: "Acesso negado. API key inválida."})
  }

  next();
}