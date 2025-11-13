# DNA Auth Backend — Uso das Rotas

Base URL (Vercel)
`dna-auth-backend.vercel.app`

Rotas disponíveis
- **GET `/empresa/:id`**: retorna os dados da empresa com o ID informado. (Requer API key)
- **GET `/usuario/:id`**: retorna os dados do usuário com o ID informado. (Requer API key)
- **GET `/usuario/cpf/:cpf`**: busca usuário(s) pelo CPF e retorna também empresas relacionadas. (Requer API key)

Parâmetros
- **id**: ID do documento no Firestore (string).
- **cpf**: CPF do usuário (string).

API Key
- Adicionar no header da requisição uma chave **[x-api-key]** e informar a key.
