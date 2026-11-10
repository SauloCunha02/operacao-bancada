# Histórico de versões

## v1.4.0 · Sistema de méritos e medalhas originais

- Doze conquistas com critérios públicos de jornada, investigação, revisão/mentoria e conclusão das cinco estações. Méritos derivados dos chamados validados, com até 1300 pontos e cinco títulos de percurso.
- Dez artes originais de medalhas geradas com `image_gen`, em PNG transparente e WebP otimizado. Originais e prompts completos em `assets/merit/`.
- Galeria com progresso por medalha, filtros, objetivos, missão sugerida e uma conquista em destaque no perfil e no uniforme do avatar.
- Totem interativo na praça, acesso pelo mapa e pelos menus do computador/celular, avisos de novas conquistas sem repetição.
- Revisão dos testes e orientações dos chamados concluídos. Permite conquistar méritos de método mesmo depois de terminar os 50 casos, sem perder progresso e sem repetir XP ou créditos.
- Méritos separados da economia da loja. O progresso anterior conta automaticamente e exportações incluem destaque e histórico de avisos.
- Testes de critérios, limites, migração, destaque, revisão, ausência de recompensas repetidas, galeria, notificações, rota ao totem e insígnia no avatar.

A conferência visual do conjunto da página no navegador e em aparelho real continua pendente. As artes das medalhas foram inspecionadas diretamente e as interações foram verificadas em testes DOM e de cena Three.js com renderer substituído.

## v1.3.1 · Conjuntos, favoritos e metas da loja

- Três looks completos para experimentar: Equipe de Campo, Circuito Azul e Tripulação Nova, combinando uniforme e três acessórios.
- Aquisição de conjuntos verifica saldo e XP antes de alterar a coleção e cobra apenas os acessórios ainda não adquiridos. Reequipar não consome créditos.
- Lista de favoritos persistida e filtro de desejos na galeria.
- Meta do item em quantidade de missões e botão para seguir diretamente ao próximo chamado.
- Testes de aquisições sem efeitos parciais, preço dos conjuntos, combinação no avatar, favoritos, metas e navegação entre loja e missão.

## v1.3.0 · Modo escuro e Galeria Shop

- Botão de tema no cabeçalho, preferência claro/escuro/sistema nas configurações e sincronização entre abas. A escolha é salva separadamente do progresso.
- Menus, missões, formulários, cartões e galeria adaptados ao modo escuro. O campus recebe iluminação noturna mantendo a leitura do avatar.
- Loja física no campus, acessível pelo mapa, por clique na vitrine, por proximidade e pelo menu no computador ou celular.
- Galeria com 14 itens: quatro uniformes e dez acessórios/efeitos. Filtros por categoria e coleção, miniaturas da geometria real e provador 3D com giro automático ou arraste.
- 100 créditos iniciais e 40 por nova missão concluída. Aquisições de acessórios usam créditos do jogo; alguns itens também exigem XP. Uniformes anteriores continuam liberados por XP.
- Acessórios equipados aparecem no avatar do campus. Um item por categoria: cabeça, mochila e efeito. Efeitos respeitam a preferência por redução de movimento.
- Migração automática do progresso anterior e exportação/importação da coleção. Saldo calculado a partir das missões e dos itens, sem recompensa repetida.
- Testes das regras de aquisição, temas, persistência, filtros, provador, equipamentos, rota até a loja e encerramento dos recursos 3D.

A conferência visual do conjunto da página em navegador e o desempenho em aparelho real continuam pendentes por indisponibilidade da ferramenta de navegador. As miniaturas são renderizadas diretamente da geometria do projeto.

## v1.2.2 · Geração 3 de proporções · 9,53/10

Posição de atendimento próxima da bancada, cadeira proporcionada e deslocada para o lado, leitura visual dos monitores, uniforme mais nítido e área de jogo maior. Testes de medidas do corpo, piso, escala de trabalho e enquadramento móvel. [Critérios e pranchas de avaliação](reviews/README.md).

## v1.2.1 · Geração 2 de proporções · 9,10/10

Pés apoiados no piso das estações e caminhos, paredes e bancos com escala coerente, câmera mais próxima e foco na altura do tronco, colisões ajustadas ao volume do corpo e materiais com acabamento plástico.

## v1.2.0 · Geração 1 de proporções · 8,30/10

Avatar com tronco largo, braços robustos, pernas proporcionais, cabeça cilíndrica menor e rosto amigável. Avatar compartilhado pelo aluno e pela mentora; o uniforme continua personalizável.

As notas são autoavaliações de direção visual. As versões anteriores foram preservadas em tags Git locais.

## v1.1.0 · Câmera em terceira pessoa

- Câmera com perspectiva acompanha o avatar, com suavização do movimento.
- Arraste com o mouse ou um dedo para girar a visão. Roda do mouse e pinça com dois dedos ajustam o zoom.
- WASD, setas e joystick movem o avatar em relação à direção da câmera.
- A câmera se aproxima quando há paredes e objetos entre ela e o avatar, voltando à distância escolhida ao sair do obstáculo.
- Tecla R ou botão de avatar centraliza a câmera atrás do personagem.
- O controle virtual pode ser usado com um dedo enquanto outro gira a câmera. Um toque curto continua selecionando uma estação.
- A câmera acompanha a posição de chegada ao trocar de bancada ou voltar à praça.

## v1.0.0 · Campus original

Versão preservada antes da alteração de câmera, no commit `d91f7d9` e na tag `v1.0.0`.

- Campus com câmera isométrica, cinco estações e avatar em blocos.
- Cinquenta missões com seis etapas, mentora, XP, uniformes e progresso local.
- Teclado e controles para celular, biblioteca e exportação do percurso.

## Consultar versões

```powershell
git log --oneline --decorate
git tag --list
git show v1.0.0:src/game.js
```

Para abrir uma cópia da versão original em outra pasta, sem alterar a versão atual:

```powershell
git worktree add --detach ../operacao-bancada-v1-original v1.0.0
```

O arquivo `../operacao-bancada-v1.0.0.bundle` guarda uma cópia do histórico existente antes da mudança. As tags desta pasta são locais; o repositório original `SauloCunha02/operacao-bancada` não é modificado automaticamente.
