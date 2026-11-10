# Avaliação de proporções

Estas notas são autoavaliações de direção visual, não avaliações de usuários nem certificação de semelhança com Roblox. A referência é a linguagem clássica de personagens em blocos, com identidade própria do campus.

Critérios fixos: silhueta e proporções do avatar (30%); escala entre avatar e cenário (25%); enquadramento no computador e celular (20%); acabamento e leitura (15%); funcionamento dos controles e missões (10%). A nota global é a média ponderada desses critérios.

As pranchas são produzidas a partir da geometria e das câmeras reais do código usando o SVGRenderer do Three.js. Não mostram a interface HTML, texturas, sombras, luz hemisférica nem o acabamento do WebGL. A iluminação da prancha é simplificada para permitir avaliar as formas. A verificação do navegador não estava disponível nesta sessão.

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

## Referências

- [Roblox Creator Hub · Character body specifications](https://create.roblox.com/docs/avatar/character-bodies/specifications): padrões de escala de personagens.
- [Roblox · Avatar settings](https://github.com/Roblox/creator-docs/blob/main/content/en-us/studio/avatar-settings.md): referência de altura para o estilo clássico. As unidades e dimensões deste projeto são próprias e não representam um rig oficial Roblox.

## Reproduzir a prancha

```powershell
npm.cmd run review:proportions -- generation-01
```

O comando renderiza o código da versão atualmente aberta. Para reproduzir uma geração anterior, use uma cópia de trabalho na tag correspondente.
