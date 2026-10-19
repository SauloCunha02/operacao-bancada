# Revisão e validação · Operação Bancada

Data: 15/10/2026. Revisão realizada na versão local, com os arquivos independentes regenerados. Os 50 casos e suas orientações técnicas foram preservados.

## Falhas corrigidas

1. **Importação de percurso:** arquivos incompletos ou inconsistentes podiam substituir o percurso. A importação agora valida a estrutura e a coerência dos registros antes de modificar o estado atual; erros mantêm o percurso existente.
2. **Recuperação parcial:** um item inválido no histórico do desafio podia interromper toda a restauração. Itens corrompidos são tratados separadamente, preservando os registros válidos.
3. **Evidências e critérios:** a restauração passa a conferir a sequência de decisões e os testes consultados. Os critérios do desafio são recalculados a partir das escolhas, sem confiar em indicadores de aprovação armazenados no arquivo.
4. **Histórico longo de decisões:** o limite de 500 entradas de cada chamado não remove mais as decisões corretas necessárias à retomada.
5. **Foco de teclado:** filtros e seletores mantêm o foco após a atualização da lista, em vez de retornar ao início da página.
6. **Revisão do desafio:** as marcações de autoavaliação e discussão são preservadas ao consultar um roteiro. Alterar uma decisão exige conferir novamente a rubrica. O rascunho sinaliza mudanças ainda não entregues.
7. **Exportação:** o portfólio inclui prioridade, protocolo de segurança, comunicação e autodeclarações do desafio. As decisões dos chamados são exportadas com o texto escolhido, sem ambiguidade causada pela ordem embaralhada das alternativas.
8. **Numeração de versões:** o desafio mantém as últimas 100 entregas sem reciclar o número da versão; a versão 101 continua identificada como 101 depois de recarregar.
9. **Leitura em voz alta:** uma seleção antiga deixa de ser oferecida ao mudar de conteúdo. A narração para ao abrir outro diálogo ou ao trocar/fechar o conteúdo em leitura.
10. **Texto ampliado:** o tamanho é recalculado ao redimensionar a janela. Corrigida a rolagem horizontal encontrada com texto a 125% em tela de 320 px, inclusive ao combinar fonte simples, espaçamento e destaques.
11. **Contraste da biblioteca:** metadados, instruções e marcadores receberam contraste mais legível. Corrigidos fundos e controles selecionados que perdiam contraste nos temas claro/escuro.
12. **Servidor local:** caminhos com caracteres inválidos, incluindo byte nulo, são recusados sem derrubar o processo. Adicionados tratamento de métodos, resposta HEAD, tipos de conteúdo e mensagem clara para porta ocupada.
13. **Navegação offline:** a marca da biblioteca independente volta para a oficina, assim como na versão servida localmente.

## Verificações executadas

| Verificação | Resultado |
| --- | --- |
| `node tests/flow.cjs` | Passou: 50 chamados, erros e recuperação, diagnóstico, XP sem repetição, desafio revisado, exportação/restauração, reinício, biblioteca e HTMLs independentes. |
| `node tests/accessibility.cjs` | Passou: paletas, contraste, ajustes, persistência, painel dentro do chamado, texto 200%, seleção, voz/velocidade/pausa/parada, preservação do percurso e falhas de rede recuperáveis. |
| `node tests/storage.cjs` | Passou: armazenamento indisponível e dados corrompidos. |
| `node tests/review.cjs` | Passou: regressões de restauração/importação, critérios, histórico, foco, revisão/exportação do desafio, narração contextual, redimensionamento, contraste e servidor. |
| Matriz de layout | Passou nas 60 combinações: três páginas × cinco tamanhos de texto (100/125/150/175/200%) × quatro larguras (320/390/768/1280 px). |
| Impressão da biblioteca | PDF em A4 com 25 páginas e os 50 casos distintos, sem caso ausente. As configurações do diálogo de impressão e ampliações escolhidas pelo usuário podem alterar a paginação. |
| Sintaxe e integridade | Scripts verificados com `node --check`; `git diff --check` sem erros; conteúdo de `dist/cases.js` idêntico ao original. |
| Servidor em execução | Página inicial e SVG retornam 200; caminhos inválidos retornam 400; o processo continua atendendo após essas requisições. |

Os testes que alteram progresso, preferências e arquivos de exemplo usam contextos de navegador isolados. Não foram executados contra o percurso pessoal aberto no navegador do usuário. Artefatos de verificação ficam em `verification-artifacts/`, fora do controle de versão.

## Arquivos de entrega atualizados

- Oficina, biblioteca e guia em `dist/`.
- `AMC-50-casos.html`, `AMC-biblioteca.html` e `AMC-identidade.html`, regenerados com scripts, estilos e ativos incorporados.
- Kit de identidade visual com o guia independente atualizado.
- Testes de regressão em `tests/review.cjs`.

## Limites da validação

A revisão cobre os cenários descritos e as falhas reproduzidas; não constitui garantia de inexistência de defeitos em qualquer dispositivo. A síntese de voz depende do navegador e das vozes instaladas; seus controles são exercitados com um simulador da API. O VLibras depende da conexão e do serviço oficial. A correção linguística dos sinais e a experiência com todas as tecnologias assistivas exigem avaliação humana específica. O julgamento pedagógico e a observação de procedimentos reais continuam com o professor.
