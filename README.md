# AMC · Operação Bancada — Educatech

Nova versão da oficina de diagnóstico com os **50 casos originais**, organizados em cinco estações. O aluno responde por botões, seletores e marcações; não há perguntas que exijam digitação.

## Executar

Com Node.js instalado, execute `node server.cjs` e abra [a oficina local](http://127.0.0.1:4173). O servidor atende apenas este computador.

Para usar sem servidor nem internet, abra `AMC-50-casos.html`. Mantenha `AMC-biblioteca.html` na mesma pasta para acessar também a biblioteca completa. A investigação principal funciona no arquivo independente, sem dependências externas.

## O que mudou

- Narrativa profissional: a equipe técnica júnior precisa devolver o laboratório escolar ao funcionamento, preservando os dados.
- Diagnóstico inicial de três decisões, com devolutiva e acesso a todos os casos mesmo quando todas as escolhas estiverem erradas.
- Cada chamado tem seis etapas: preparar, investigar, diagnosticar, corrigir, validar e comunicar.
- Os testes revelam resultados didáticos. O aluno relaciona a evidência à hipótese, escolhe uma ação e monta uma ordem de serviço por seleção.
- Feedback com potência, ajuste e próximo passo. Erros mantêm o acesso e permitem novas tentativas.
- Duas cartas de pista por chamado; modelo, cuidados, mentoria e revisão sempre acessíveis.
- Papéis de operador e revisor para duplas, com troca de funções e alternativa individual.
- 10 XP por etapa validada, no máximo 60 por chamado. Retomar não gera pontos adicionais. Não há ranking ou conversão automática em nota.
- Desafio integrador com três computadores, cinco critérios conhecidos antes da entrega, histórico de versões e reentrega.
- Portfólio local em Markdown e JSON. O JSON exportado pode ser restaurado em outro navegador.
- Guia docente dentro da plataforma: hipótese pedagógica, objetivos, alinhamento, roteiro de 50 minutos, rubrica, recuperação e alternativa sem dispositivos.

## Uso pedagógico

Comece por **Visão da oficina → Começar pelo diagnóstico**. Depois escolha um chamado em **Missões**. Na investigação, consulte os resultados de testes e selecione decisões coerentes. Ao concluir, a ordem de serviço fica disponível em **Meu percurso**.

Em uma aula de 50 minutos, trabalhe 1–2 chamados por dupla, o plano integrado e a revisão. Os 50 casos formam um banco para uma sequência de aulas; não uma tarefa para ser completada de uma vez.

Os resultados são simplificados: cada chamado tem uma hipótese designada no cenário. Não são medições de hardware, diagnóstico automático, treinamento suficiente de bancada ou prova de competência profissional. Causas reais podem coexistir e exigir outros testes.

A atividade é uma experiência de gamificação educacional com cenários didáticos. Os objetivos precedem a narrativa e as mecânicas; XP torna o percurso visível. Consulte o **Guia do professor** para a distinção entre gamificação, aprendizagem baseada em jogos, jogo sério e jogo educativo.

### Registros de avaliação

- `demonstrated`: decisões demonstradas na simulação de um chamado concluído. A execução real precisa ser observada pelo professor.
- `needs_review`: percurso incompleto ou plano integrado com critério a revisar.
- `submitted_for_review`: plano integrado coerente, preparado para revisão docente. Não significa aprovação, envio automático ou certificação.

A plataforma verifica a coerência das escolhas. Explicação, colaboração, procedimento real e avaliação final são de responsabilidade docente. Para demonstrar o raciocínio sem escrever, o aluno pode explicar, apontar os elos na ordem de serviço ou simular o fluxo com cartas.

## Biblioteca original

`dist/biblioteca.html` preserva filtros, seleção de casos, roteiros completos, exportações e impressão. O campo de busca é uma ferramenta de localização opcional, não uma resposta avaliativa. A biblioteca independente está em `AMC-biblioteca.html`.

A seleção antiga da biblioteca continua no mesmo armazenamento. O percurso Educatech usa uma chave separada. Cada navegador e endereço (inclusive arquivo local e servidor) possui dados independentes. Guarde o JSON antes de mudar de dispositivo ou recomeçar. Os arquivos exportados não são enviados a nenhum serviço.

## Conteúdo e cuidados

Os cinco textos de `educatech-materiais/` orientam o redesenho. O conteúdo disciplinar continua em `dist/cases.js`, sem alterações nos 50 casos. A [aplicação do curso](APLICACAO-EDUCATECH.md) documenta decisões e limites.

As configurações de software usam Windows como referência. Consulte o manual do modelo. Fonte e monitor não devem ser abertos; intervenções internas têm supervisão, desconexão elétrica e cuidados contra descarga eletrostática. Preserve os dados e a chave de recuperação antes de procedimentos que alterem o sistema ou armazenamento. Referências oficiais continuam disponíveis na biblioteca e no guia docente.

## Arquivos e desenvolvimento

- `dist/index.html`, `dist/journey.css`, `dist/journey.js`: experiência Educatech.
- `dist/cases.js`: 50 casos, cinco estações e referências originais.
- `dist/biblioteca.html`, `dist/styles.css`, `dist/app.js`: biblioteca de roteiros.
- `node make-offline.cjs`: atualiza os três arquivos HTML independentes.
- `.openai/hosting.json`: configuração de hospedagem existente. Esta atualização foi executada localmente.

## Verificação

A verificação de fluxos usa Playwright e Microsoft Edge em modo headless. Com o servidor ativo, execute `node tests/flow.cjs`. Para verificar o comportamento sem acesso ao armazenamento, execute `node tests/storage.cjs`. O teste procura o Playwright nas dependências do projeto ou no runtime local do Codex; a variável `AMC_PLAYWRIGHT_PATH` pode indicar outro caminho.

Foram verificados: 50 rotas completas; erro e recuperação em todas as decisões; diagnóstico inicial inteiramente errado sem bloqueio; limite de pistas e modelo gratuito; retomada; XP sem repetição; desafio com primeira versão incoerente e versão revisada; consultas sem submissão acidental; exportação e restauração; cancelamento e confirmação de reinício; filtros; largura de 390 px; fechamento com Escape; biblioteca; arquivos offline; ausência de erros JavaScript e requisições externas. A navegação de escolhas por teclado e o modo de armazenamento indisponível também foram conferidos. Essas verificações não equivalem a uma auditoria formal de acessibilidade nem a validação pedagógica com a turma.


## Identidade visual

A Operação Bancada tem marca própria, símbolo, favicon, paleta e ilustração vetorial. O sistema visual compartilhado fica em `dist/brand.css`; os SVGs e PNGs estão em `dist/assets/brand/`. Consulte [o guia de identidade](IDENTIDADE-VISUAL.md), a página `dist/identidade.html` ou o arquivo independente `AMC-identidade.html`. O link “Nossa identidade visual” também está no rodapé da oficina.

O arquivo `operacao-bancada-identidade.zip` reúne as marcas, versões para fundos claros e escuros, arquivos para impressão, prancha visual e guia de uso. Os três HTMLs independentes são atualizados por `node make-offline.cjs`, com os ativos visuais essenciais incorporados.

## Acessibilidade

O menu inclui o botão **Tema claro / Tema escuro**, que alterna fundos, textos, cartões, formulários, avisos e janelas em toda a plataforma. A preferência é salva no navegador, acompanha a navegação e sincroniza abas abertas. Os temas funcionam nos três HTMLs offline; as opções de alto contraste têm prioridade. Execute `node tests/theme.cjs` para verificar esses comportamentos.

O botão **Acessibilidade** oferece paletas de apoio ao daltonismo, alto contraste claro/escuro, texto até 200%, espaçamento, fonte simples, destaque de foco/links/títulos, guia de leitura, ponteiro maior e redução de efeitos e ilustrações decorativas. As preferências são locais e independentes do progresso.

Também há leitura em voz alta com controle de voz, velocidade, pausa e parada. As vozes dependem do navegador e do dispositivo; vozes online podem exigir internet. O **VLibras** só carrega ao ser ativado e usa serviço externo com conexão à internet. Não substitui interpretação humana. Os ajustes visuais estão incorporados às versões offline.

Consulte [o guia de acessibilidade](ACESSIBILIDADE.md). A verificação específica pode ser executada com `node tests/accessibility.cjs`.

## Revisão de estabilidade

A revisão de 15/10/2026 corrigiu importação e recuperação de registros, foco, rastreabilidade de versões e exportações, contexto da narração, redimensionamento de texto, contraste na biblioteca, navegação offline e tratamento de caminhos inválidos no servidor. Consulte [o relatório de revisão e validação](REVISAO-E-VALIDACAO.md).

Execute também `node tests/review.cjs` para as regressões, a matriz de 60 combinações de layout e a validação HTTP. O desafio preserva as últimas 100 entregas, mantendo sua numeração; o histórico de cada chamado retém as decisões corretas dentro do limite de 500 entradas.
