# Operação Bancada · Mundo 3D

Jogo educativo individual para navegador e celular, inspirado na linguagem de avatares em blocos. Contém os 50 casos originais de [SauloCunha02/operacao-bancada](https://github.com/SauloCunha02/operacao-bancada), organizados em cinco estações.

## Executar

Com Node.js instalado:

```powershell
npm.cmd install
npm.cmd run build
npm.cmd start
```

Abra http://127.0.0.1:4173. Os arquivos prontos para hospedagem estática ficam em `dist/`. O servidor local aceita apenas conexões deste computador; para jogar pelo celular, use a URL hospedada.

## Jogar

- Câmera em terceira pessoa acompanha o avatar. Arraste com o mouse ou um dedo no cenário para olhar ao redor.
- WASD ou setas para caminhar na direção da câmera; E para interagir; M para o mapa; R para centralizar a câmera atrás do personagem.
- Roda do mouse ou pinça com dois dedos para aproximar e afastar a câmera.
- Celular: controle virtual à esquerda e botão de mão à direita. Você pode andar com um dedo no controle e girar a câmera com outro no cenário.
- Toque nas estações, use o mapa ou os cartões para navegar. Os menus também dão acesso direto às 50 missões, sem exigir navegação 3D.
- Cada missão tem seis etapas: preparar, investigar, diagnosticar, corrigir, validar e comunicar. É necessário consultar a evidência decisiva antes do diagnóstico.
- Concluir uma missão concede 100 XP uma única vez. Não há perda de XP por erro, cronômetro, ranking ou bloqueio de conteúdo. Uniformes adicionais em 200, 500 e 1000 XP.
- O progresso fica no navegador. Em Meu percurso é possível exportar/importar JSON e baixar um relatório Markdown. O JSON do jogo usa formato próprio, diferente do portfólio da oficina original.

## Estrutura

`src/game.js`: mundo Three.js, interação, controles e interface. `src/avatar.js`: modelo de corpo compartilhado entre aluno e mentora. `src/proportions.js`: escala e alturas de piso. `src/camera.js`: câmera em terceira pessoa, colisões e gestos de rotação/zoom. `src/rules.js`: regras e persistência validada. `src/cases.js`: cópia integral do conteúdo original com exportação ES adicionada. `dist/oficina/`: versão original da oficina, biblioteca, guia docente e acessibilidade preservados. O clone de referência está em `../conteudo-original/`.

O histórico local usa tags de versão. A câmera original está preservada em `v1.0.0`; a câmera em terceira pessoa corresponde à `v1.1.0`. As gerações de proporções estão em `v1.2.0`, `v1.2.1` e `v1.2.2`, com notas de autoavaliação 8,30, 9,10 e 9,53. Consulte [CHANGELOG.md](CHANGELOG.md) e [avaliações com pranchas](reviews/README.md).

O mundo utiliza geometria procedural, sem modelos externos. Three.js é empacotado localmente. As fontes Google são opcionais; na ausência de rede, o navegador usa fontes do sistema. O jogo requer WebGL para o ambiente 3D e oferece acesso às missões quando ele não está disponível. A qualidade pode ser reduzida em Configurações.

## Verificação

```powershell
npm.cmd test
npm.cmd run build
```

Os testes cobrem os 50 casos e sua interface DOM, erros e recuperação, necessidade de evidência, retomada, XP sem repetição e importação. A câmera é verificada com a matemática real do Three.js: perspectiva, acompanhamento, direção do movimento, limites, colisões, suavização, mouse e pinça. A cena usa um renderer substituído para verificar as rotas, o redimensionamento para celular e o uso simultâneo do joystick e da rotação. Os testes de proporções também medem corpo, cabeça, braços, apoio dos pés, altura da bancada e enquadramento móvel. A aparência e o desempenho WebGL precisam de conferência visual; a ferramenta de navegador não estava disponível nesta revisão.

## Limites pedagógicos

Cada cenário tem uma causa didática designada. O aluno investiga testes, interpreta evidências e escolhe intervenções; não há simulação elétrica ou execução real de comandos no sistema. A atividade é individual e não tem multiplayer, conta de aluno ou sincronização com professor. O progresso local pode ser editado pelo próprio usuário e não deve ser tratado como certificação ou nota. A execução prática exige observação do professor.

Preserve dados e a chave de recuperação quando aplicável. Não abra fonte ou monitor. Intervenções internas exigem supervisão, equipamento desligado e fora da tomada e cuidados contra descarga eletrostática. Siga o manual do modelo.

O jogo tem identidade própria e não é afiliado ao Roblox.
