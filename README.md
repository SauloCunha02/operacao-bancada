# AMC · Oficina de diagnóstico

Página didática com 50 casos de desktops, organizados em 5 etapas. Cada caso contém sintoma, causas possíveis, verificação, solução e confirmação do reparo. São 203 verificações, ordenadas do simples ao complexo.

## Usar

- Abra `AMC-50-casos.html` no navegador para usar a versão independente, sem internet. Fontes de sistema substituem as fontes da versão hospedada.
- Ou abra `dist/index.html`, mantendo `styles.css`, `cases.js` e `app.js` na mesma pasta.
- Selecione os casos; use a busca e os filtros. Leia os roteiros em “Investigar caso”.
- “Baixar roteiros” exporta somente a seleção em Markdown. “Imprimir / salvar PDF” abre o diálogo de impressão do navegador com os casos escolhidos em pares: dois por folha A4, orientação retrato, margens de 10 mm. Use escala 100% e desative cabeçalhos/rodapés do navegador para aproveitar a página. Uma seleção ímpar deixa apenas um caso na última folha.
- “Copiar números” gera uma mensagem com os números dos casos para continuar a conversa com o professor. A página não envia mensagens automaticamente.
- “Salvar seleção .json” guarda números, cuidados e roteiros completos. Não há importação automática desse arquivo; ele pode ser consultado ou enviado nesta conversa.
- A seleção é guardada em localStorage por navegador/endereço, quando permitido. As versões offline, local e hospedada têm seleções independentes.

## Conteúdo e progressão

1. Casos 01–10: energia, vídeo e conexões externas.
2. Casos 11–20: periféricos, ajustes e desempenho.
3. Casos 21–30: sistema, rede, inicialização e armazenamento.
4. Casos 31–40: portas, refrigeração e memória.
5. Casos 41–50: isolamento de falhas com supervisão.

Os casos representam sintomas recorrentes, não um ranking estatístico de frequência. A etapa indica a posição do caso na trilha; as últimas hipóteses de um caso básico podem exigir apoio técnico. As configurações de software tomam Windows como referência. Códigos e procedimentos de hardware dependem do modelo: consulte seu manual.

O objetivo é escolher o conteúdo antes de produzir o material definitivo. Os roteiros não substituem manuais nem treinamento de bancada. Fonte e monitor não devem ser abertos; intervenções internas têm supervisão, desconexão da rede elétrica e cuidados contra descarga eletrostática. Dados são preservados antes de recuperação, inicialização, formatação ou reinstalação.

Referências oficiais estão no guia da página e nos roteiros exportados. O conteúdo é uma síntese didática original.

## Desenvolvimento

Sem dependências de JavaScript. Execute `node server.cjs` e abra `http://127.0.0.1:4173`. Gere a versão independente com `node make-offline.cjs`.

A versão hospedada usa `dist/` e `.openai/hosting.json`. A publicação inicial tem acesso privado do proprietário.
