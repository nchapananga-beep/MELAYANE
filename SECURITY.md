# Segurança do MELAYANE

A segurança do MELAYANE deve ser tratada em duas camadas distintas:

1. **Camada pública/PWA**, armazenada neste repositório.
2. **Camada de aplicação e dados**, executada no Google Apps Script e nos recursos associados.

## Princípios

- Nenhuma palavra-passe, token, chave de API ou outro segredo deve ser guardado no repositório.
- A autorização de operações deve ser feita no servidor. A interface do utilizador nunca deve ser considerada uma barreira de segurança suficiente.
- O URL do Web App não é um segredo e não deve ser usado como mecanismo de protecção.
- Dados pessoais, financeiros ou operacionais devem ser devolvidos apenas a utilizadores autorizados.
- Funções administrativas devem validar explicitamente a identidade e o perfil do utilizador antes de ler ou alterar dados.
- Mensagens de erro apresentadas ao utilizador não devem revelar detalhes internos desnecessários.

## Publicação

Antes de publicar uma implementação do MELAYANE para utilização geral, siga a lista de verificação em [`PUBLICACAO.md`](PUBLICACAO.md).

## Comunicação de problemas de segurança

Se for identificado um problema de segurança, não publique dados sensíveis numa issue pública. O problema deve ser comunicado directamente ao responsável pelo projecto para análise e correcção antes da divulgação.

## Âmbito desta política

Esta política cobre o código e os recursos públicos do repositório. A configuração e o código do Google Apps Script devem ser auditados separadamente sempre que não estiverem versionados neste repositório.
