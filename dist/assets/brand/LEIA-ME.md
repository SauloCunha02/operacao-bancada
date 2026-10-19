# Identidade visual · Operação Bancada

Versão 1.0 · AMC / Aprendizagem em ação.

A assinatura **“Evidência que vira solução.”** conecta a identidade ao método de diagnóstico. O B de Bancada é desenhado como trilha de circuito, com terminais de teste e um sinal de verificação. A forma externa usa cantos chanfrados inspirados em placas técnicas.

## Paleta

| Uso | Cor | Código |
| --- | --- | --- |
| Marca, estrutura e títulos | Azul-petróleo | `#102E38` |
| Ações, foco e progresso | Verde técnico | `#086B66` |
| Destaques em fundos escuros | Verde de sinal | `#D7EE77` |
| Traços e ilustrações em fundos escuros | Água de circuito | `#63D6CB` |
| Fundo de leitura | Superfície clara | `#F3F5EF` |
| Conteúdo em cartões | Branco | `#FFFFFF` |
| Texto secundário | Cinza técnico | `#52676C` |
| Atenção e revisão | Âmbar | `#805314` sobre `#FAF2DF` |
| Ação destrutiva | Terracota | `#9B4034` |

Verde de sinal e água de circuito são acentos. Para texto pequeno, prefira azul-petróleo ou verde técnico sobre fundo claro. Feedback sempre combina texto e sinal; a cor não comunica o estado sozinha.

## Tipografia

- Títulos: Bahnschrift, com Segoe UI e sans-serif como alternativas.
- Conteúdo: Segoe UI, com Arial e sans-serif como alternativas.
- Dados e etiquetas: Cascadia Code, com Consolas e monospace como alternativas.

A aplicação não baixa fontes nem depende de serviços externos. O desenho tipográfico pode variar conforme as fontes instaladas. Os PNGs mantêm a aparência exportada. Os textos dos SVGs são editáveis e usam as alternativas indicadas.

## Arquivos

Os ativos ficam em `dist/assets/brand/`:

- `simbolo.svg` e `simbolo.png`: ícone da marca; PNG de 640 × 640 px com transparência.
- `logo.svg` e `logo.png`: assinatura principal para fundo claro; PNG de 1560 × 300 px.
- `logo-inverso.svg` e `logo-inverso.png`: assinatura para fundo escuro; PNG de 1560 × 300 px, com transparência.
- `logo-monocromatico.svg` e `logo-monocromatico.png`: versão de uma cor para impressão.
- `bancada.svg`: ilustração vetorial da estação de diagnóstico.
- `painel-identidade.svg` e `painel-identidade.png`: prancha visual de 1600 × 1160 px.

Os SVGs são vetores e podem ser ampliados. A transparência da versão inversa permite aplicá-la sobre o azul-petróleo ou outro fundo escuro com contraste adequado.

## Aplicação

A identidade foi aplicada à abertura, navegação, cartões de progresso, cinco estações, missões, alternativas, feedback, modais, portfólio, guia docente e biblioteca de roteiros. O símbolo também funciona como favicon.

A interface usa uma assinatura compacta para preservar leitura em telas pequenas. Use a marca completa a partir de 280 px de largura; o símbolo isolado a partir de 32 px, exceto no favicon. Reserve respiro de pelo menos ¼ da altura do símbolo. Preserve cores, proporções e orientação.

O arquivo `dist/brand.css` concentra as cores e os estilos compartilhados. O guia visual pode ser aberto em `dist/identidade.html`, pelo link “Nossa identidade visual” no rodapé da aplicação ou em http://127.0.0.1:4173/identidade.html com o servidor local ativo.

Execute `node make-offline.cjs` para atualizar os três HTMLs independentes: oficina, biblioteca e guia visual. As marcas e ilustrações necessárias são incorporadas aos HTMLs para uso sem internet. O kit ZIP inclui os arquivos visuais e o guia independente.

## Verificação

Os 50 fluxos de chamados e a persistência passaram nas verificações existentes após a aplicação visual. Foram conferidas as páginas da oficina, guia e biblioteca nas larguras 1440, 768, 390 e 320 px: sem rolagem horizontal ou imagens ausentes. A oficina mantém suas respostas por seleção e seus registros locais.
