# Publicação do MELAYANE

Este documento reúne verificações mínimas antes de disponibilizar publicamente uma implementação do MELAYANE.

## Antes de publicar

- Confirmar que não existem palavras-passe, tokens, chaves de API ou outros segredos no repositório.
- Confirmar que o Web App do Google Apps Script aplica autenticação e autorização adequadas no lado do servidor.
- Confirmar que utilizadores não autorizados não conseguem ler, criar, alterar ou apagar dados por manipulação directa de parâmetros.
- Confirmar que dados pessoais, financeiros ou operacionais da CASA LINO não ficam acessíveis sem autenticação.
- Rever permissões da folha de cálculo e de outros recursos usados pela aplicação.
- Testar a aplicação numa janela anónima, sem sessão Google iniciada.
- Testar com um utilizador sem privilégios administrativos.
- Confirmar que mensagens de erro não expõem identificadores, dados internos ou detalhes desnecessários da infraestrutura.
- Criar cópia de segurança antes da publicação.

## Nota sobre o endereço do Apps Script

O endereço público de um Web App do Google Apps Script não deve ser tratado como segredo. A segurança deve depender de controlos de autenticação, autorização e validação implementados no servidor, e não da ocultação do URL.

## GitHub Pages

O repositório contém a camada web/PWA que incorpora a aplicação através de `index.html`. A activação do GitHub Pages torna essa camada facilmente acessível por um endereço público. Antes de o fazer, deve ser concluída a verificação de segurança do Web App e dos dados associados.

## Critério para publicação

A aplicação pode ser considerada pronta para publicação pública quando um utilizador não autenticado não conseguir aceder a informação protegida nem executar operações reservadas, e quando as permissões forem validadas em todos os fluxos críticos.
