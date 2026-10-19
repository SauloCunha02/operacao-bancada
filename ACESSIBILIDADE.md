# Acessibilidade · Operação Bancada

O botão **Acessibilidade**, integrado discretamente ao menu superior, abre ajustes que também estão disponíveis na biblioteca e no guia visual. Dentro dos chamados e roteiros em janela modal, ele fica no cabeçalho da janela. Use Tab para navegar, Enter ou Espaço para ativar e Esc para fechar.

Ao lado dele, o botão **Tema claro / Tema escuro** alterna a aparência de toda a plataforma: fundos, texto, cartões, campos, bordas, avisos e janelas. A escolha fica salva neste navegador e é compartilhada entre as páginas e abas abertas. O alto contraste escolhido no painel tem prioridade sobre as cores do tema. Restaurar a acessibilidade mantém o tema e o progresso. Sem permissão de armazenamento, o botão continua funcionando durante a sessão da página.

## Ajustes disponíveis

- Paletas de apoio para protanopia/protanomalia, deuteranopia/deuteranomalia, tritanopia/tritanomalia e acromatopsia. São alternativas de contraste e organização cromática, não correções da visão ou simulações de deficiência visual. Estados continuam identificados por texto e sinais.
- Alto contraste com fundo claro ou escuro. Ele prevalece sobre a paleta de apoio selecionada.
- Tamanho de texto de 100% a 200%, em passos de 25%, sem desativar o zoom próprio do navegador.
- Fonte simples e maior espaçamento entre letras, palavras, linhas e parágrafos.
- Destaque de links, títulos e foco de teclado.
- Guia de leitura que acompanha o ponteiro ou o foco.
- Redução de sombras e efeitos; desativação de animações e transições; ocultação apenas das ilustrações decorativas; ponteiro do mouse ampliado.
- Leitura em voz alta do conteúdo visível da tela ou do chamado, ou de um trecho selecionado antes de abrir o painel. Inclui voz em português, velocidade, pausa, continuidade e parada.
- VLibras, carregado somente quando solicitado, para tradução automática de português para Libras.

As preferências visuais e de voz usam uma chave própria (`amc-accessibility-v1`) no armazenamento local. Restaurá-las não modifica o progresso pedagógico, a seleção da biblioteca ou o portfólio. Se o navegador impedir o salvamento, os controles continuam funcionando durante a sessão e uma mensagem explica o limite.

## Voz

A leitura usa a API de síntese de voz do navegador, sem microfone ou gravação. A interface oferece as vozes em português disponibilizadas pelo dispositivo e identifica vozes locais e online. Prioriza uma voz local em português brasileiro quando disponível. Vozes online podem exigir rede e usar serviços do navegador ou sistema.

O texto lido vem somente dos elementos visíveis do conteúdo ativo, sem o painel de ajustes, conteúdo oculto ou código-fonte. A leitura é interrompida quando o conteúdo muda ou o chamado é fechado, evitando narrar uma versão anterior. Textos longos são divididos em trechos para permitir controle de pausa e parada. A leitura nunca inicia automaticamente.

Esse apoio não substitui um leitor de tela. O sistema continua usando controles HTML nativos, foco visível, títulos e mensagens textuais para navegação com tecnologias como NVDA, VoiceOver e TalkBack. Não foi feita uma auditoria formal com todas essas tecnologias.

## Libras e conexão

O botão **Ativar VLibras online** carrega o script oficial `https://vlibras.gov.br/app/vlibras-plugin.js`. Depois do carregamento, feche o painel, abra o botão do VLibras e selecione o texto que deseja traduzir. A ferramenta externa inicializa o seu próprio tradutor e avatar.

O serviço precisa de internet. Ao usá-lo, o navegador se conecta aos servidores do VLibras e o texto solicitado pode ser processado pelo serviço. Não é carregado automaticamente nem ao restaurar preferências. Falhas de rede mostram uma orientação e mantêm os demais recursos utilizáveis.

“Desativar VLibras” esconde e desativa a interface da sessão; como se trata de uma aplicação externa já carregada, recarregue a página se quiser remover também essa sessão da memória. A página recarregada não carrega o serviço novamente sem nova ativação. A mensagem do painel informa esse comportamento.

A tradução é automática, pode ter limitações para conceitos técnicos e não substitui interpretação humana ou validação de conteúdo em Libras por pessoas qualificadas. A integração foi conferida com o carregador e a aplicação oficiais; a adequação linguística dos sinais não foi certificada.

## Uso sem internet

Os ajustes visuais e o painel estão incorporados aos três arquivos HTML independentes. A voz funciona offline quando o dispositivo oferece uma voz local compatível; o VLibras depende de internet. O suporte da síntese de voz em arquivos locais varia entre navegadores.

Atalhos adicionais: **Alt + Shift + A** abre os ajustes; **Alt + Shift + L** inicia a leitura do conteúdo. Conflitos com atalhos do sistema ou do navegador podem exigir o uso dos botões.

## Desenvolvimento e verificação

Módulo compartilhado: `dist/accessibility.js` e `dist/accessibility.css`, incluídos depois dos estilos e scripts principais. O painel não interfere no estado das atividades. `node make-offline.cjs` atualiza os três HTMLs independentes com o módulo incorporado.

Verificações realizadas:

- `node tests/accessibility.cjs`: paletas, contraste, controles, persistência, reabertura dentro do chamado, foco, texto 200%, seleção, voz/velocidade/pausa/parada via simulador da API, interrupção ao mudar conteúdo, progresso preservado, três páginas e HTMLs independentes, ausência de rede antes de ativar Libras e tratamento de falhas.
- `node tests/flow.cjs`: os 50 casos e o desafio integrador continuam funcionando.
- `node tests/storage.cjs`: persistência do percurso sem acesso ao armazenamento e recuperação de dados corrompidos.
- Navegador real: vozes locais Microsoft Daniel e Maria em pt-BR detectadas, e leitura curta com eventos reais de início e término. A disponibilidade varia por dispositivo.
- Rede real: carregador oficial e aplicação do VLibras inicializados. O carregamento do avatar é um recurso externo e pode depender de desempenho, navegador e serviços remotos.

Os ajustes são recursos de apoio e não equivalem, por si só, à conformidade integral com WCAG. Recomenda-se validar a experiência com estudantes que utilizam esses recursos.

## Referências

- [W3C — Uso de cor](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).
- [W3C — Espaçamento do texto](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html).
- [MDN — SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance).
- [VLibras — Integração oficial](https://vlibras.gov.br/doc/widget/installation/webpageintegration.html).
- [VLibras — Tradução de texto](https://vlibras.gov.br/doc/widget/functionalities/text-translation.html).
