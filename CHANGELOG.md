# Histórico de versões

## v2.0.0 · Bancada visual em três etapas

- Os 50 chamados agora seguem Testar → Consertar → Conferir. A investigação e o diagnóstico foram reunidos; preparação e comunicação deixam de exigir telas de quiz.
- Computador virtual ao lado das ações no desktop e acima delas no celular. O painel mostra o sintoma, destaca o componente consultado e reage à aplicação da ação e à conferência.
- 203 testes com nomes curtos, resultados próprios e acesso opcional ao procedimento original em Como fazer. As três primeiras ações ficam visíveis; Mais testes abre as demais.
- Cinquenta evidências observáveis escritas para os cenários. Três opções de conserto por chamado, sempre incluindo a ação correspondente à evidência; a seleção correta não depende da posição do botão.
- Conferência por ação direta, com resultado específico do atendimento. Chamados 12, 20, 32, 41, 44 e 48 encerram com encaminhamento documentado, sem afirmar que consultar um código ou encaminhar uma peça já resolveu o defeito.
- Registro do atendimento gerado automaticamente, preservando sintoma, procedimento, causa, ação, resultado e critério de validação. Cuidados de dados e supervisão aparecem junto das ações.
- Voltar e Continuar preservam progresso. XP, créditos e méritos são entregues uma única vez, após a conferência. Revisões permanecem disponíveis na mesma bancada.
- Migração automática dos progressos e arquivos exportados anteriores. Conclusões, saldo, compras, equipamentos e méritos são mantidos; cada etapa antiga é convertida para o ponto correspondente do novo fluxo.
- Testes dos 50 chamados, dos 203 resultados, de todos os pares etapa/cursor antigos, retomada, importação válida/inválida, economia, méritos e cena 3D. Prancha dos SVGs em reviews/bench-v2.0.0.md.

Conferência visual de layout em navegador e aparelho real pendente: o serviço de navegador está indisponível. A prancha verifica os desenhos SVG; os fluxos usam DOM simulado e a cena usa renderer substituído.


## v1.6.0 · Navegação explícita entre etapas

- Botões Voltar etapa e Passar etapa nas seis etapas de cada chamado, com rodapé fixo durante a rolagem, alvos de toque de pelo menos 46 px e suporte aos temas claro e escuro.
- Respostas corretas permanecem visíveis para leitura. A ação Passar etapa libera a próxima tela; na investigação, exige a evidência decisiva. A última etapa oferece Ver conclusão.
- Etapas já validadas destacam a resposta correta e permitem revisão. Voltar preserva o progresso, as evidências e as recompensas, inclusive após concluir a missão.
- A etapa consultada é salva, exportada e restaurada separadamente do progresso. Arquivos de versões anteriores continuam válidos e abrem na última etapa alcançada.
- Testes cobrem os 50 chamados, fechamento e reabertura em cada decisão validada, recarga do navegador, limites da navegação, bloqueio de saltos e de respostas em revisão, além da ausência de XP ou créditos repetidos.

Verificação visual em navegador/aparelho real pendente: o serviço de navegador está indisponível. Os testes de interface usam DOM simulado e os de cena usam renderer substituído.


## v1.5.0 · Objetivos guiados e recompensas de mérito

- Fixar uma medalha pendente como próximo objetivo. O painel do campus acompanha seu critério e o botão de missão abre um chamado adequado, incluindo revisão quando necessária.
- O objetivo é salvo e restaurado, pode ser retirado e é concluído automaticamente ao conquistar a medalha. Sem prazo ou perda de sequência.
- Três visuais exclusivos de mérito: Boné Pioneiro (primeiro chamado), Kit Guardião (um chamado em cada estação) e Aura Legado (50 chamados). São resgatados gratuitamente, sem consumir pontos, XP ou créditos.
- A galeria de méritos mostra a recompensa associada. O provador da loja permite experimentá-la antes de conquistar o requisito e oferece atalho ao objetivo correto.
- Validação dos resgates e da importação: uma recompensa sem o mérito correspondente não é equipada nem adicionada à coleção. Reequipar não gera crédito ou aquisição repetida.
- Catálogo com 17 itens individuais e três conjuntos completos; 20 miniaturas renderizadas a partir dos modelos do jogo.

O navegador de verificação continua indisponível. Foram verificados os fluxos DOM, as regras de progressão, as recompensas e a cena com o renderer de teste.

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
