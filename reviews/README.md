# Avaliação de proporções

Estas notas são autoavaliações de direção visual, não avaliações de usuários nem certificação de semelhança com Roblox. A referência é a linguagem clássica de personagens em blocos, com identidade própria do campus.

Critérios fixos: silhueta e proporções do avatar (30%); escala entre avatar e cenário (25%); enquadramento no computador e celular (20%); acabamento e leitura (15%); funcionamento dos controles e missões (10%). A nota global é a média ponderada desses critérios.

As pranchas são produzidas a partir da geometria e das câmeras reais do código. As gerações 0 e 1 usam SVGRenderer; a partir da geração 2, um renderizador de revisão com depth buffer evita artefatos de sobreposição do SVG em superfícies grandes. Não mostram a interface HTML, texturas, sombras nem o acabamento do WebGL. A iluminação da prancha é simplificada para permitir avaliar as formas. A verificação do navegador não estava disponível nesta sessão.

## Geração 1 · v1.2.0 · 8,30/10

| Critério | Nota |
| --- | ---: |
| Silhueta e proporções | 9,0 |
| Escala avatar/cenário | 8,0 |
| Enquadramento | 7,5 |
| Acabamento e leitura | 8,0 |
| Funcionamento | 9,0 |

Mudança: tronco largo, braços e pernas inteiros, cabeça cilíndrica menor, rosto com sorriso e uniforme com volume. A relação entre braço e torso deixa de parecer um boneco com braços finos.

Revisão visual: [prancha da geração 1](generation-01.png). Ainda há piso atravessando os pés, excesso de distância visual na bancada, paredes baixas e mobiliário estreito. A próxima geração precisa coordenar câmera, ambiente e avatar.

## Geração 2 · v1.2.1 · 9,10/10

| Critério | Nota |
| --- | ---: |
| Silhueta e proporções | 9,3 |
| Escala avatar/cenário | 9,2 |
| Enquadramento | 9,0 |
| Acabamento e leitura | 8,7 |
| Funcionamento | 9,0 |

Média ponderada: 9,095, apresentada com duas casas como 9,10.

Mudanças: câmera mais próxima e com foco no tronco, piso correspondente à altura dos pés, paredes mais altas, bancos largos e raio de colisão compatível com o tronco. O pórtico foi afastado para estabilizar a distância da câmera inicial. O acabamento WebGL passa a usar tone mapping e materiais plásticos.

Revisão visual: [prancha da geração 2](generation-02.png). A escala já é coerente e os pés aparecem sobre o piso. O acabamento dos equipamentos continua muito simples e a posição de atendimento ainda fica distante do teclado. A próxima geração refina o posto de trabalho, a leitura dos equipamentos e a apresentação em celular.

Testes de câmera e dez rotas entre estações passaram, incluindo joystick e rotação simultâneos.

## Geração 3 · v1.2.2 · 9,53/10

| Critério | Nota |
| --- | ---: |
| Silhueta e proporções | 9,6 |
| Escala avatar/cenário | 9,7 |
| Enquadramento | 9,5 |
| Acabamento e leitura | 9,5 |
| Funcionamento | 9,0 |

Média ponderada: 9,53. A meta de 9,5 foi atingida nesta autoavaliação.

Mudanças: posição de atendimento próxima do teclado; cadeira lateral com assento compatível com o tronco; indicadores geométricos nos monitores; uniforme de cor mais nítida e detalhes visíveis pelas costas; área do mundo maior e cartão de missão compacto no celular.

Revisão visual: [prancha da geração 3](generation-03.png). O corpo mantém leitura em blocos e volumes compatíveis, os pés apoiam no piso, a cadeira deixa livre a posição de atendimento e o personagem se destaca do cenário. A cabeça não domina o corpo, e o enquadramento preserva as mãos, os pés e os dois monitores no celular.

Validação: testes medem a altura real de 2,84 unidades, a largura de 2,04, solas no plano zero, relação dos braços e da cabeça com o tronco, altura de bancada e paredes, piso nas cinco estações e cobertura vertical do avatar entre 25% e 45% no enquadramento móvel. Os fluxos dos 50 chamados, controles e rotas são verificados pela suíte do projeto.

Limite da nota: a aparência final com interface e efeitos WebGL, o desempenho e a resposta de toque em aparelho real não foram observados. A nota não representa aprovação externa ou validação com alunos.

## Referências

- [Roblox Creator Hub · Character body specifications](https://create.roblox.com/docs/avatar/character-bodies/specifications): padrões de escala de personagens.
- [Roblox · Avatar settings](https://github.com/Roblox/creator-docs/blob/main/content/en-us/studio/avatar-settings.md): referência de altura para o estilo clássico. As unidades e dimensões deste projeto são próprias e não representam um rig oficial Roblox.

## Reproduzir a prancha

```powershell
npm.cmd run review:proportions -- generation-01
```

O comando renderiza o código da versão atualmente aberta. Para reproduzir uma geração anterior, use uma cópia de trabalho na tag correspondente.
