/* Conteúdo didático original. Ordem: verificações simples → isolamento técnico. */
const cases = [];
const add = (title,category,symptom,steps,confirm,note='') => cases.push({id:cases.length+1,title,category,level:Math.floor(cases.length/10)+1,symptom,steps,confirm,note});

add('Computador não liga ao apertar Power','Energia','Nenhuma luz acende e nenhuma ventoinha gira ao pressionar o botão.',[
['Tomada sem energia','Teste a tomada com um aparelho que você sabe que funciona; não introduza objetos nela.','Use outra tomada comprovadamente energizada. Se houver defeito na instalação, chame o responsável.'],
['Cabo de força desconectado da tomada','Observe se o plugue está encaixado na tomada ou no filtro de linha.','Conecte o cabo corretamente; se usar filtro de linha, confira se ele está ligado.'],
['Cabo desconectado da fonte','Observe a conexão na parte traseira do gabinete.','Com a alimentação desligada, encaixe o cabo firmemente na fonte.'],
['Interruptor traseiro da fonte desligado','Se houver chave I/O, veja se está em O. I/O não é o seletor 115/230 V.','Coloque a chave I/O em I. Nunca mude o seletor de tensão por tentativa.'],
['Cabo de força danificado','Inspecione o cabo desligado. Se não houver dano visível, compare com outro compatível e comprovadamente bom.','Substitua o cabo danificado ou que falhou no teste.'],
['Fonte ausente ou conexões internas soltas','Com o professor e o PC fora da tomada, confirme a presença da fonte e os conectores da placa-mãe, conforme o manual.','Se faltar fonte, instale uma compatível. Se houver conexão solta, reconecte o conector correto.'],
['Falha da fonte, botão ou placa-mãe','Depois das etapas anteriores, o professor testa uma fonte compatível conhecida e verifica o cabo do botão no manual.','Substitua apenas a peça cuja falha foi isolada. Encaminhe a placa-mãe para diagnóstico se persistir.']
],'O computador volta a responder ao Power e começa a inicialização.','Abrir a fonte não faz parte do diagnóstico. Ventoinha da fonte parada, sozinha, não comprova defeito: alguns modelos têm modo sem rotação.');

add('Monitor não acende','Vídeo','O monitor não mostra imagem nem seu próprio menu.',[
['Monitor desligado','Aperte o botão do monitor e procure o LED de energia.','Ligue o monitor.'],
['Cabo de energia mal conectado','Inspecione os dois extremos do cabo e a tomada.','Reconecte o cabo e use tomada energizada.'],
['Fonte externa ou cabo defeituoso','Se o monitor usa adaptador, compare apenas com modelo de tensão, polaridade e corrente compatíveis.','Substitua o cabo ou adaptador cuja falha foi confirmada.'],
['Falha no monitor','Teste o monitor em outro computador e tente abrir o menu sem o cabo de vídeo.','Se continuar sem menu nem alimentação, encaminhe para reparo ou substitua.']
],'O menu próprio do monitor aparece e o LED indica alimentação.','Não abra o monitor: há circuitos com tensão perigosa.');

add('PC liga, mas o monitor mostra “sem sinal”','Vídeo','Há luzes ou ventoinhas no gabinete, mas o monitor não recebe vídeo.',[
['Entrada de vídeo incorreta','Abra o menu do monitor e compare a entrada selecionada com o cabo usado.','Selecione HDMI, DisplayPort ou outra entrada realmente conectada.'],
['Cabo de vídeo solto ou defeituoso','Confira as duas pontas; teste outro cabo compatível.','Reconecte ou substitua o cabo que falhou.'],
['Cabo na saída de vídeo errada','Se há placa de vídeo dedicada, confira se o cabo está ligado nela. A saída da placa-mãe depende de vídeo integrado e configuração.','Conecte à saída adequada ao conjunto instalado.'],
['Falha do monitor ou ausência de POST','Teste outro monitor. Se nenhum recebe imagem, observe LEDs e bipes de diagnóstico e consulte o caso 41.','Isole primeiro monitor/cabo; com o professor, investigue memória e vídeo se o PC não concluir o autoteste.']
],'A imagem de inicialização aparece e o sistema pode ser exibido.','Ventoinhas girando não garantem que o computador concluiu o POST.');

add('Imagem pisca ou some durante o uso','Vídeo','A tela perde a imagem por instantes, embora o computador continue funcionando.',[
['Conexão frouxa','Confira se o cabo está firme nas duas pontas, sem puxá-lo lateralmente.','Reconecte e deixe folga no cabo.'],
['Cabo ou adaptador com defeito','Teste conexão direta e outro cabo compatível com a resolução usada.','Troque o cabo/adaptador que reproduz a falha.'],
['Resolução ou frequência inadequada','Compare os ajustes de tela com as especificações do monitor.','Use uma resolução e frequência suportadas.'],
['Driver ou hardware de vídeo instável','Observe se começou após atualização; compare com outro monitor e consulte os casos 37 e 44.','Reinstale ou reverta o driver oficial se houver relação. Se persistir, peça diagnóstico da GPU.']
],'A imagem permanece estável no mesmo período e tarefa que antes provocavam a falha.');

add('Imagem esticada, grande ou pouco nítida','Vídeo','O sistema aparece, mas letras e proporções estão incorretas.',[
['Resolução diferente da nativa','Consulte a resolução recomendada nas configurações de tela e no manual.','Ajuste para a resolução nativa suportada pelo monitor.'],
['Escala de interface inadequada','Confira o ajuste de escala do sistema.','Escolha uma escala confortável; compare sem mudar várias opções ao mesmo tempo.'],
['Configuração do monitor incorreta','Confira proporção da imagem e ajustes do próprio monitor.','Restaure a proporção correta; para VGA, use o ajuste automático do monitor se disponível.'],
['Driver de vídeo ausente ou incorreto','Veja se o sistema usa um driver básico e se faltam opções de resolução.','Instale o driver oficial compatível com a GPU e o sistema.']
],'Texto fica legível, círculos ficam circulares e a resolução correta está disponível.');

add('Teclado não responde','Periféricos','As teclas não produzem resposta no sistema.',[
['Conexão ou alimentação ausente','Confira USB; se for sem fio, verifique pilhas, chave e receptor.','Reconecte, ligue ou substitua as pilhas.'],
['Porta ou intermediário com problema','Teste uma porta USB traseira, diretamente no PC, sem hub.','Use a porta funcional e retire o hub defeituoso.'],
['Falha do próprio teclado','Teste o teclado em outro PC e outro teclado neste PC.','Substitua o teclado se a falha acompanhá-lo.'],
['Problema no sistema ou controlador USB','Compare a resposta na BIOS/UEFI e no sistema, com apoio do professor.','Se funciona antes do sistema, revise drivers e configurações. Se várias portas falham, encaminhe o controlador para diagnóstico.']
],'O teclado digita corretamente e responde após uma nova inicialização.','Conectores PS/2 devem ser reconectados com o computador desligado.');

add('Mouse não move o ponteiro','Periféricos','O ponteiro fica parado ou o mouse não é reconhecido.',[
['Mouse sem energia ou desconectado','Confira cabo, receptor USB, pilha e botão liga/desliga.','Conecte e ligue o mouse; troque a pilha se necessário.'],
['Sensor obstruído ou superfície inadequada','Observe a base e teste em superfície opaca uniforme.','Limpe externamente o sensor com cuidado e use um mousepad adequado.'],
['Porta USB ou hub com falha','Teste diretamente numa USB traseira.','Use uma porta funcional ou substitua o hub confirmado como defeituoso.'],
['Defeito no mouse ou falha de software','Compare com outro mouse e teste este em outro computador.','Troque o mouse se a falha o acompanhar; se só ocorre neste sistema, revise o driver e as opções de acessibilidade.']
],'O ponteiro se move de forma contínua e os cliques funcionam.');

add('Computador não emite som','Áudio','Um áudio está sendo reproduzido, mas não é ouvido.',[
['Volume zerado ou silenciado','Confira o volume do sistema, do aplicativo e da caixa de som.','Remova o silêncio e aumente gradualmente o volume.'],
['Caixa ou fone desconectado','Confira energia da caixa e conexão na saída de áudio correta.','Ligue a caixa e conecte ao conector de saída indicado no manual.'],
['Dispositivo de saída errado','Observe se o sistema envia áudio ao monitor HDMI, Bluetooth ou outra saída.','Selecione a saída onde está seu fone ou caixa.'],
['Falha do acessório ou driver','Teste outro fone e observe o dispositivo no gerenciador do sistema.','Troque o acessório que falhou; instale o driver oficial se o dispositivo não estiver corretamente reconhecido.']
],'Um som de teste é ouvido no dispositivo escolhido.');

add('Fone ou microfone do painel frontal não funciona','Áudio','As conexões frontais falham, mas as traseiras podem funcionar.',[
['Plugue ou conector inadequado','Confira se está na entrada correta e se o fone combinado precisa de adaptador compatível.','Use a conexão adequada; entrada de microfone não é saída de fone.'],
['Entrada/saída frontal não selecionada','Confira as opções de áudio e a detecção do conector.','Selecione o dispositivo frontal correto e ajuste a detecção conforme o software oficial.'],
['Defeito no fone ou no conector frontal','Teste o mesmo fone atrás e outro fone na frente.','Substitua o acessório defeituoso ou encaminhe o conector frontal se só ele falhar.'],
['Cabo interno HD AUDIO solto','Com o professor, PC fora da tomada, localize o cabo e o header pelo manual.','Reconecte no header de áudio correto. Não use por tentativa os headers USB.']
],'As conexões frontais reproduzem ou capturam áudio conforme sua função.');

add('Sem acesso à rede pelo cabo','Rede','O computador não acessa a rede usando Ethernet.',[
['Cabo de rede desconectado','Confira as duas pontas e os indicadores de link, quando existirem.','Encaixe o cabo na porta do PC e do switch/roteador.'],
['Cabo ou porta de rede com defeito','Teste cabo conhecido e outra porta do switch.','Troque o cabo ou use a porta funcional.'],
['Adaptador desativado','Confira se a interface Ethernet está habilitada no sistema.','Habilite o adaptador; se não for reconhecido, instale o driver oficial.'],
['Falha na rede ou na configuração IP','Compare com outro computador na mesma rede e consulte o caso 22.','Use configuração automática se a rede fornece DHCP; encaminhe falhas gerais ao responsável pela rede.']
],'O computador obtém uma configuração de rede válida e acessa os recursos autorizados.');

add('Wi-Fi não aparece ou não conecta','Rede','O desktop não mostra redes sem fio ou não consegue entrar na rede.',[
['Desktop sem adaptador Wi-Fi','Confira se há adaptador instalado; muitos desktops têm apenas Ethernet.','Use Ethernet ou instale um adaptador Wi-Fi compatível.'],
['Wi-Fi desligado ou antena ausente','Confira modo avião, Wi-Fi e antenas externas do adaptador.','Ative o Wi-Fi e conecte as antenas previstas pelo fabricante.'],
['Senha errada ou sinal fraco','Confirme a rede, digite novamente a senha autorizada e teste mais perto do roteador.','Corrija a credencial e reposicione o computador ou ponto de acesso.'],
['Driver ou incompatibilidade de banda','Veja se o adaptador aparece no sistema e suporta a banda da rede.','Instale o driver oficial; escolha uma rede/banda compatível ou encaminhe o roteador ao responsável.']
],'A rede conecta e permanece estável em um teste de navegação.');

add('Pendrive não aparece no explorador','Armazenamento','O pendrive está conectado, mas não aparece entre as unidades.',[
['Conexão inadequada','Retire com segurança se detectado e teste numa USB traseira sem hub.','Reconecte numa porta funcional.'],
['Falha do pendrive','Teste em outro PC e compare com outro pendrive na mesma porta.','Substitua a unidade se a falha a acompanhar; se houver arquivos importantes, priorize recuperação.'],
['Unidade sem letra','Com o professor, localize a unidade pelo tamanho no gerenciamento de discos.','Se há partição saudável sem letra, atribua uma letra livre. Não inicialize nem formate uma unidade com dados.'],
['Sistema de arquivos danificado ou incompatível','Observe se aparece RAW, não alocado ou com sistema de arquivos não suportado.','Não aceite formatação automática. Faça backup/recuperação; só depois prepare a unidade para o sistema correto.']
],'A unidade aparece e arquivos de teste podem ser lidos; a remoção segura funciona.','Se o conteúdo for importante, interrompa tentativas de escrita na unidade defeituosa.');

add('Impressora não imprime a partir do desktop','Periféricos','O trabalho é enviado, mas a impressão não sai.',[
['Impressora sem condições de imprimir','Confira energia, papel, tampa e avisos no painel.','Ligue e resolva o aviso físico indicado, conforme o manual.'],
['Impressora errada ou conexão ausente','Confira a impressora escolhida e o cabo USB ou rede.','Selecione a impressora correta e restaure a conexão.'],
['Fila pausada ou trabalho travado','Veja a fila de impressão e o estado offline/pausado.','Retome a fila; cancele somente os trabalhos de teste travados e reenvie uma página.'],
['Driver ou serviço com falha','Teste uma página interna da impressora e uma página pelo sistema.','Se a página interna sai, revise driver oficial, porta e serviço de impressão com o professor.']
],'Uma página de teste enviada pelo computador é impressa.');

add('Webcam não mostra imagem','Periféricos','O aplicativo abre, mas a imagem da câmera não aparece.',[
['Tampa de privacidade ou conexão','Confira a tampa física e o cabo USB.','Abra a tampa e conecte a câmera diretamente ao PC.'],
['Câmera errada selecionada','Observe o dispositivo escolhido no aplicativo.','Selecione a webcam correta.'],
['Permissão bloqueada ou câmera ocupada','Confira as permissões de câmera e feche outro aplicativo que esteja usando-a.','Autorize o aplicativo necessário e deixe a câmera livre para o teste.'],
['Driver ou câmera defeituosa','Teste outro aplicativo, porta USB e outro PC.','Atualize o driver oficial se necessário; substitua a câmera se a falha a acompanhar.']
],'A câmera mostra uma imagem no aplicativo autorizado.');

add('Microfone não capta voz','Áudio','A pessoa fala, mas o indicador de entrada não se move.',[
['Microfone silenciado ou desconectado','Confira botão de mute, plugue e alimentação quando aplicável.','Remova o mute e conecte à entrada correta.'],
['Entrada ou nível de captura incorreto','Confira o dispositivo selecionado e o nível de entrada.','Escolha o microfone correto e ajuste o nível sem saturar.'],
['Permissão ou configuração do aplicativo','Teste a gravação do sistema e confira a permissão do aplicativo.','Autorize o uso e selecione a entrada no aplicativo.'],
['Plugue incompatível, driver ou defeito','Compare um microfone conhecido; headsets combinados podem precisar de adaptador adequado.','Use adaptador compatível, revise o driver oficial ou substitua o acessório cuja falha foi confirmada.']
],'Uma gravação curta reproduz a voz com clareza.');

add('Segundo monitor não é reconhecido','Vídeo','Só um monitor funciona num desktop com dois monitores conectados.',[
['Monitor ou entrada desligada','Confira energia e entrada do segundo monitor.','Ligue e selecione a entrada conectada.'],
['Modo de exibição inadequado','Abra as opções de múltiplos monitores do sistema.','Escolha estender ou duplicar e use a opção de detectar.'],
['Cabo, adaptador ou porta inadequados','Teste o segundo monitor sozinho e confira o sentido de conversão do adaptador.','Use cabo/adaptador apropriado. Um divisor simples não cria duas telas independentes.'],
['Limite de GPU ou saída da placa-mãe indisponível','Consulte o número de telas suportadas e a disponibilidade do vídeo integrado.','Conecte a saídas suportadas; revise driver e configuração conforme o manual.']
],'As duas telas aparecem nas configurações e operam no modo escolhido.');

add('Data e hora ficam incorretas','Sistema','O relógio mostra horário errado ou perde o ajuste depois de desligar.',[
['Fuso horário incorreto','Confira fuso e hora automática no sistema.','Selecione o fuso correto e sincronize a hora.'],
['Sincronização indisponível','Confira a conexão e o serviço de hora; compare com relógio confiável.','Restaure a sincronização autorizada ou ajuste temporariamente a hora.'],
['Hora perdida também na BIOS/UEFI','Com o professor, confira a hora da BIOS depois de o PC ficar sem energia.','Se a hora do firmware permanece correta, investigue o sistema; se é perdida, avance para a bateria.'],
['Bateria da placa-mãe esgotada','Confirme o tipo no manual e registre as configurações antes da intervenção.','Com supervisão e PC desconectado, substitua por bateria correta, respeitando polaridade; reconfigure data e opções necessárias.']
],'O relógio permanece correto após desligar e religar, inclusive depois do teste sem energia.');

add('Computador demora muito para iniciar','Sistema','A inicialização chega ao sistema, mas leva tempo excessivo.',[
['Periférico atrasando a partida','Compare a inicialização sem pendrives e acessórios não essenciais.','Remova o acessório problemático e revise sua configuração.'],
['Muitos aplicativos iniciando juntos','Observe aplicativos de inicialização e seu impacto.','Desative apenas os desnecessários; mantenha proteção e serviços essenciais.'],
['Pouco espaço ou atualização em andamento','Confira espaço livre e estado das atualizações.','Libere espaço com ferramentas do sistema e deixe a atualização terminar.'],
['Armazenamento lento ou falhando','Faça backup e compare saúde da unidade e uso de disco após iniciar.','Se a unidade falha, substitua após preservar os dados; se é apenas limitação de HDD, avalie SSD compatível.']
],'O tempo de partida melhora em duas inicializações comparáveis, sem remover serviços essenciais.');

add('Computador fica lento durante o uso','Sistema','Programas abrem devagar e o sistema responde com atraso.',[
['Excesso de tarefas abertas','Observe CPU, memória e disco no monitor de tarefas.','Feche tarefas não utilizadas e compare o desempenho.'],
['Armazenamento quase cheio','Confira espaço disponível no disco do sistema.','Remova arquivos temporários com ferramenta do sistema e mova arquivos próprios após backup.'],
['Aplicativo consumindo recursos ou malware','Identifique o processo de maior consumo e faça uma verificação com proteção confiável.','Atualize ou corrija o aplicativo; siga o caso 26 se houver infecção.'],
['Limite de hardware, calor ou unidade com falha','Compare o consumo com os requisitos dos programas, temperaturas e saúde do disco.','Corrija a causa confirmada; amplie RAM/SSD se houver limitação, ou siga os casos de calor e armazenamento.']
],'A tarefa usada como referência volta a responder bem; registre qual recurso causava a lentidão.');

add('Um programa trava ou fecha sozinho','Sistema','Um aplicativo específico para de responder, enquanto outros podem continuar funcionando.',[
['Arquivo ou operação específica com erro','Teste um arquivo novo e registre a ação que provoca o travamento.','Recupere o arquivo de backup ou evite a operação até corrigir o problema identificado.'],
['Recursos insuficientes','Confira espaço, memória e os requisitos do aplicativo.','Feche tarefas desnecessárias e libere espaço; ajuste a carga ao hardware.'],
['Versão, extensão ou instalação com problema','Teste sem extensões opcionais e veja se começou após uma mudança.','Atualize pelo fornecedor ou repare/reinstale o aplicativo após salvar dados e configurações.'],
['Problema geral de sistema ou hardware','Observe se vários programas também travam e consulte registros de erros.','Se a falha é geral, siga os casos 36, 43 e 46 com o professor.']
],'A mesma ação que antes travava funciona em testes repetidos, sem perda dos arquivos.');

add('Windows chega a uma tela de recuperação','Inicialização','O computador liga, mas não carrega normalmente o Windows.',[
['Dispositivo externo interferindo','Retire mídias removíveis e registre a mensagem completa.','Reinicie sem mídias não essenciais; se resolver, revise a ordem de boot.'],
['Falha na inicialização do sistema','Confira se a unidade do sistema é detectada e use as opções oficiais de recuperação.','Com o professor, tente Reparo de Inicialização. Se o disco não é detectado, siga o caso 29.'],
['Atualização ou driver recente','Veja se o problema começou logo após uma mudança. Tenha a chave de recuperação se houver criptografia.','Use as opções apropriadas de desinstalar atualização ou Restauração do Sistema, após avaliar o backup.'],
['Sistema corrompido ou disco defeituoso','Preserve dados e verifique a saúde da unidade antes de reinstalar.','Se o disco estiver saudável, repare/reinstale o sistema após backup. Se falha, substitua a unidade antes da instalação.']
],'O sistema inicia, os arquivos preservados estão acessíveis e a falha não reaparece.','Opções de recuperação podem alterar dados e aplicativos. Obtenha backup e chave de recuperação antes de procedimentos invasivos.');

add('Rede conecta, mas não abre a internet','Rede','A interface tem link ou Wi-Fi conectado, mas os sites não abrem.',[
['Falha geral da rede','Teste outro dispositivo na mesma rede e mais de um site.','Se todos falham, encaminhe o roteador/provedor ao responsável; se só um site falha, não altere todo o PC.'],
['Endereço IP ou gateway inválido','Com o professor, veja IP, máscara e gateway; 169.254.x.x costuma indicar que o DHCP não forneceu endereço.','Use DHCP se previsto pela rede e renove a conexão; corrija IP fixo somente com os dados do administrador.'],
['Falha na resolução de nomes (DNS)','Compare conectividade com o gateway e resolução de nomes, usando testes orientados.','Restaure o DNS previsto pela rede; não coloque servidores aleatórios numa rede escolar.'],
['Proxy, VPN ou bloqueio de segurança','Confira se começou após ativar VPN/proxy e verifique as regras da rede.','Corrija a configuração autorizada ou encaminhe ao administrador. Não desative a proteção como solução permanente.']
],'Sites e serviços autorizados abrem; o aluno diferencia link, IP e DNS.');

add('Conexão de rede cai frequentemente','Rede','O acesso funciona por um tempo e depois é interrompido.',[
['Mau contato ou sinal fraco','Em Ethernet, confira encaixes; no Wi-Fi, compare perto do roteador.','Troque cabo comprovadamente ruim ou melhore o posicionamento das antenas.'],
['Falha no equipamento de rede','Compare outros dispositivos e outra porta do switch.','Use a porta funcional e informe quedas gerais ao responsável pela rede.'],
['Economia de energia ou driver do adaptador','Observe se a queda ocorre após inatividade e confira o driver oficial.','Atualize o driver e ajuste a economia de energia conforme a orientação do fabricante.'],
['Defeito no adaptador','Teste um adaptador compatível conhecido sob as mesmas condições.','Substitua o adaptador apenas se o teste isolar a falha nele.']
],'A conexão permanece estável no intervalo e atividade que antes causavam a queda.');

add('Bluetooth não encontra ou não conecta o acessório','Periféricos','Um fone, teclado ou mouse Bluetooth não aparece ou falha ao parear.',[
['Desktop sem Bluetooth ou rádio desligado','Confira se o PC tem adaptador e se Bluetooth está ativado.','Ative o recurso ou instale adaptador compatível.'],
['Acessório fora do modo de pareamento','Confira carga e siga o procedimento do fabricante.','Carregue e coloque o acessório em modo de pareamento perto do PC.'],
['Pareamento antigo ou ligação a outro dispositivo','Veja se o acessório está conectado a outro aparelho.','Desconecte do outro aparelho e refaça apenas o pareamento desse acessório.'],
['Driver, antena ou adaptador com falha','Teste outro acessório e confira driver e antenas compartilhadas, se previstas.','Instale o driver oficial, conecte antenas ou substitua o adaptador cuja falha foi confirmada.']
],'O acessório pareia e executa sua função após uma reconexão.');

add('Disco do sistema está quase cheio','Armazenamento','O sistema avisa falta de espaço e pode falhar ao instalar programas.',[
['Lixeira e arquivos temporários acumulados','Confira o uso de armazenamento e revise a lixeira antes de apagar.','Use a limpeza do sistema e exclua apenas itens dispensáveis.'],
['Arquivos pessoais grandes','Identifique vídeos, downloads e outros arquivos próprios.','Faça backup e mova o que não precisa ficar no disco principal.'],
['Programas desnecessários','Confira programas instalados e tamanho ocupado.','Desinstale pelos recursos do sistema o que não será usado, preservando dados necessários.'],
['Capacidade insuficiente para a rotina','Compare o espaço exigido pela turma com o disponível após a limpeza.','Planeje unidade maior compatível e migração com backup. Não apague pastas do sistema manualmente.']
],'Há espaço para o uso e as atualizações previstas, e os arquivos necessários continuam acessíveis.');

add('Propagandas estranhas e programas desconhecidos','Sistema','Aparecem redirecionamentos, extensões desconhecidas ou alertas suspeitos.',[
['Notificações autorizadas por engano','Identifique se o alerta vem do navegador e de qual site.','Revogue a permissão do site desconhecido; não clique no alerta.'],
['Extensão ou programa indesejado','Revise extensões e instalações recentes com o professor.','Remova itens indesejados pelos mecanismos oficiais.'],
['Possível infecção','Atualize a proteção confiável e execute uma verificação completa; isole da rede se houver comportamento ativo suspeito.','Siga as ações de quarentena da proteção e a política do laboratório.'],
['Comprometimento persistente','Se retorna, preserve documentos com cuidado e avalie a integridade do sistema.','Encaminhe ao responsável; uma reinstalação limpa pode ser necessária após backup verificado. Troque senhas num dispositivo confiável se houve exposição.']
],'A proteção conclui a verificação e os sintomas não retornam após reiniciar e testar o navegador.','Não instale “limpadores” anunciados pelos próprios alertas. Em máquinas da escola, informe o responsável pelo laboratório.');

add('Windows Update falha repetidamente','Sistema','Uma atualização não instala e mostra uma mensagem ou código de erro.',[
['Reinicialização pendente','Confira o aviso de reiniciar e registre o código de erro.','Salve o trabalho e reinicie pelo sistema.'],
['Internet, hora ou espaço inadequados','Confira rede, relógio e espaço livre.','Corrija conexão/hora e libere espaço com ferramentas do sistema.'],
['Erro detectável pelo solucionador oficial','Execute a ferramenta de solução de problemas de atualização disponível no sistema.','Aplique a correção indicada e tente novamente.'],
['Arquivos do sistema ou pacote com falha','Pesquise o código na documentação oficial com o professor e preserve os dados.','Faça o reparo recomendado pelo fornecedor. Se houver falha de disco, trate a unidade antes de insistir.']
],'A atualização prevista conclui e o sistema reinicia normalmente.','Não desligue à força enquanto a instalação estiver progredindo.');

add('Mensagem “No bootable device” ou “Boot device not found”','Inicialização','O firmware informa que não encontrou um sistema para iniciar.',[
['Mídia removível escolhida por engano','Confira se há pendrive ou disco externo conectado.','Remova a mídia de teste e tente iniciar novamente.'],
['Ordem de boot incorreta','Na BIOS/UEFI, veja se a unidade e o Windows Boot Manager aparecem.','Selecione a entrada de inicialização correta, conforme a instalação existente.'],
['Unidade do sistema não detectada','Confira a lista de armazenamento do firmware.','Se a unidade não aparece, siga o caso 29 para testar conexão e unidade.'],
['Carregador de boot danificado ou modo incompatível','Veja se o disco é detectado e se o modo UEFI/Legacy mudou; registre antes de alterar.','Restaure a configuração conhecida ou use Reparo de Inicialização com o professor, preservando dados.']
],'A entrada correta carrega o sistema após reiniciar.','Não formate por causa dessa mensagem; ela não prova que os arquivos foram perdidos.');

add('HD ou SSD não aparece na BIOS/UEFI','Armazenamento','O firmware não lista uma unidade que deveria estar instalada.',[
['Unidade ausente ou slot incorreto','Com o professor, compare a instalação com o manual e o tipo da unidade.','Instale no conector compatível; M.2 SATA e NVMe não são intercambiáveis em todo slot.'],
['Conexão frouxa','PC fora da tomada: confira dados e energia em SATA; em M.2, confira encaixe e fixação correta.','Reconecte com cuidado conforme o manual.'],
['Cabo, porta ou compartilhamento de pistas','Teste cabo/porta SATA conhecidos; confira se o uso de M.2 desabilita alguma porta SATA.','Substitua o cabo que falhou ou use porta/slot disponível e compatível.'],
['Defeito na unidade ou no controlador','Teste a unidade em equipamento compatível e outra unidade neste PC, sem formatar.','Se a falha acompanha a unidade, preserve/recupere dados e substitua; se acompanha a porta, encaminhe a placa-mãe.']
],'A unidade é identificada corretamente no firmware e seus dados podem ser verificados.');

add('HD ou SSD novo aparece na BIOS, mas não no sistema','Armazenamento','Uma unidade adicional é detectada pelo firmware, mas não aparece no explorador.',[
['Expectativa de aparecer antes de ser preparada','Confira se a unidade aparece no gerenciamento de discos e identifique pelo modelo/tamanho.','Se já tem dados, não inicialize. Se é nova e vazia, prossiga com o professor.'],
['Disco offline ou partição sem letra','Confira estado do disco e das partições existentes.','Coloque online se apropriado ou atribua letra livre à partição saudável.'],
['Unidade realmente nova, sem partição','Confirme que não contém dados e que é a unidade correta.','Com supervisão, inicialize no esquema adequado e crie/formate um volume; essas ações apagam ou alteram estruturas de dados.'],
['Driver, sistema de arquivos ou compatibilidade','Se nem o gerenciador a detecta, confira controlador e driver; se tem partição, confira compatibilidade.','Instale driver oficial ou use sistema compatível para recuperar dados antes de qualquer conversão/formatação.']
],'O volume esperado fica acessível e um arquivo de teste pode ser salvo e lido.','Preparar uma unidade nova exige confirmar o disco certo. Nunca aplique o procedimento automaticamente numa unidade usada.');

add('Portas USB frontais não funcionam','Periféricos','Um dispositivo funciona atrás, mas não nas portas da frente do gabinete.',[
['Problema no dispositivo ou cabo','Teste o acessório em USB traseira e outro acessório na frente.','Substitua o cabo/acessório se a falha o acompanhar.'],
['Dispositivo exige mais energia','Compare um dispositivo simples e o acessório de maior consumo.','Use porta adequada ou hub alimentado compatível; não sobrecarregue a porta.'],
['Cabo interno do painel solto','Com o professor e PC desligado da tomada, confira o header USB pelo manual.','Reconecte o cabo ao header correto, respeitando orientação e pinos.'],
['Conector frontal danificado','Inspecione portas e cabo com a alimentação desconectada.','Não use porta quebrada ou com pinos deformados; substitua o conjunto frontal se o defeito for confirmado.']
],'Um dispositivo conhecido funciona nas portas frontais reparadas.');

add('USB desconecta e reconecta sozinho','Periféricos','O sistema toca repetidamente o som de desconexão de um dispositivo USB.',[
['Cabo frouxo ou danificado','Observe se o problema acompanha um cabo específico e teste outro cabo adequado.','Substitua o cabo que falhou e elimine tensão sobre o conector.'],
['Hub ou extensão inadequados','Conecte o dispositivo diretamente a uma porta traseira.','Retire o intermediário defeituoso ou use hub alimentado apropriado.'],
['Energia ou driver do dispositivo','Compare com outra porta e revise driver e economia de energia, se a falha ocorre após inatividade.','Use alimentação prevista pelo fabricante e atualize/ajuste o driver oficial.'],
['Defeito do acessório ou controlador','Teste o acessório noutro PC e vários acessórios neste PC.','Troque o acessório se a falha o acompanhar; se várias portas falham, peça diagnóstico da placa-mãe.']
],'O dispositivo permanece conectado durante a tarefa que antes provocava a queda.');

add('Gabinete faz muito barulho','Refrigeração','Há ruído forte de ventoinha, vibração ou raspagem.',[
['Vibração externa','Confira se o gabinete está estável e se algum objeto vibra encostado nele.','Estabilize o gabinete e retire objetos em contato.'],
['Cabo encostando numa ventoinha','Desligue, retire da tomada e, com o professor, inspecione sem pôr a mão em ventoinha em movimento.','Prenda os cabos longe das hélices.'],
['Poeira ou fluxo de ar restrito','Confira filtros, entradas de ar e temperatura.','Limpe com método adequado ao manual e desobstrua a ventilação.'],
['Ventoinha desgastada ou unidade mecânica falhando','Identifique de onde vem o som; cliques de HDD com erros exigem preservação de dados.','Substitua a ventoinha confirmada como defeituosa. Se é HDD, siga o caso 46. Se é a fonte, encaminhe sem abri-la.']
],'O ruído anormal desaparece e temperaturas continuam adequadas.');

add('Computador fica muito quente','Refrigeração','Há temperaturas elevadas ou queda de desempenho durante o uso.',[
['Ambiente ou saídas de ar obstruídas','Observe posição, entradas/saídas e condições do ambiente.','Afaste de obstruções e melhore a circulação de ar.'],
['Carga de trabalho excessiva','Compare temperatura em repouso e em uso com ferramenta confiável e limites do fabricante.','Reduza tarefas desnecessárias e investigue a tarefa responsável.'],
['Poeira ou ventoinha com problema','Com PC desconectado e professor, inspecione filtros, dissipadores e conexões.','Limpe corretamente e substitua/reconecte ventoinha cujo defeito foi confirmado.'],
['Cooler mal instalado ou interface térmica inadequada','Verifique fixação e montagem conforme o manual, sem desmontar em máquina quente.','O professor reinstala o cooler e aplica interface térmica conforme o fabricante.']
],'As temperaturas ficam dentro dos limites do componente na tarefa de referência.','Não use um limite único para toda CPU/GPU. Não abra a fonte nem use líquidos ou aspirador doméstico nas placas.');

add('Computador desliga sozinho durante o uso','Energia','O PC apaga sem encerramento normal do sistema.',[
['Alimentação externa intermitente','Observe tomada, cabo e filtro; compare com ponto de energia confiável.','Corrija a conexão ou use alimentação estável. Defeito elétrico deve ser tratado pelo responsável.'],
['Aquecimento excessivo','Observe temperaturas antes da falha, sem forçar desligamentos repetidos.','Siga o caso 34 para corrigir refrigeração.'],
['Configuração ou comando de desligamento','Confira eventos, opções de energia e relação com um programa específico.','Corrija a configuração ou aplicativo identificado.'],
['Fonte ou hardware com falha','Com o professor, compare com fonte compatível conhecida; investigue componentes se persistir.','Substitua só a peça isolada no teste. Um evento de desligamento inesperado sozinho não identifica a fonte.']
],'O PC permanece ligado na tarefa que antes causava a falha, com temperatura e alimentação adequadas.');

add('Computador inteiro congela','Sistema','Mouse, teclado e programas deixam de responder; pode ser necessário reiniciar.',[
['Sobrecarga temporária','Aguarde um pouco e veja se o sistema ainda responde a atalhos; registre a tarefa.','Feche a tarefa problemática se conseguir e reduza a carga.'],
['Aplicativo ou driver recente','Confira se começou após instalação/atualização e consulte os registros.','Atualize ou reverta a mudança identificada, após salvar dados.'],
['Aquecimento ou armazenamento com falha','Verifique temperaturas e saúde da unidade; preserve arquivos antes de testes extensos.','Corrija refrigeração ou siga o caso 46 se houver sinais de falha no disco.'],
['Memória ou outro hardware instável','Com o professor, teste memória e parâmetros padrão; consulte o caso 43.','Isole o módulo/componente defeituoso e substitua apenas após confirmar.']
],'O sistema continua respondendo em repetição da atividade e em uso normal.','Reinicialização forçada pode perder trabalho não salvo; use apenas se o sistema realmente não responder.');

add('Tela preta depois que o Windows começa a carregar','Vídeo','A imagem de firmware aparece, mas some ao entrar no sistema.',[
['Saída ou modo de exibição incorreto','Confira o monitor escolhido, entrada e conexão; teste uma única tela.','Use a saída correta e um modo de exibição suportado.'],
['Driver de vídeo com falha','Com o professor, acesse o modo de segurança pelas opções oficiais de recuperação.','Se há imagem nesse modo, reverta/reinstale o driver oficial relacionado à falha.'],
['Aplicativo ou sessão do sistema com erro','Veja se aparece ponteiro ou se outro usuário consegue iniciar sessão.','Desative a inicialização do aplicativo identificado ou repare a sessão com backup das informações.'],
['Corrupção do sistema ou GPU instável','Compare outra saída/GPU compatível e opções de recuperação do sistema.','Repare o sistema após backup se hardware estiver saudável; encaminhe a GPU se a falha a acompanhar.']
],'A imagem permanece visível durante a entrada no Windows e o uso de aplicativos.');

add('Memória instalada não aparece por completo','Memória','O total informado difere dos módulos instalados ou a memória utilizável é menor.',[
['Confusão entre memória instalada e utilizável','Compare BIOS/UEFI, sistema e memória reservada ao hardware.','Explique a reserva para vídeo integrado e diferenças de unidades; não troque RAM por uma reserva normal.'],
['Limite do sistema ou da placa','Confira arquitetura do sistema, capacidade suportada e manual da placa-mãe.','Use sistema de 64 bits e módulos dentro dos limites, quando necessário e compatível.'],
['Módulo mal encaixado ou slot errado','Com PC desconectado e professor, confira travas e slots recomendados.','Reinstale os módulos nos slots previstos pelo fabricante.'],
['Módulo, slot ou canal com defeito','Teste um módulo por vez e compare slots permitidos, registrando resultados.','Substitua o módulo se a falha o acompanhar; se um canal/slot falha, encaminhe placa-mãe/CPU para diagnóstico.']
],'Firmware reconhece a capacidade esperada e o sistema informa uma reserva explicável.');

add('Computador deixa de iniciar após instalar RAM','Memória','A falha surge logo depois da troca ou ampliação da memória.',[
['Treinamento inicial de memória','Consulte o manual sobre o primeiro boot; alguns sistemas levam mais tempo após mudanças.','Aguarde o período indicado, sem reiniciar continuamente.'],
['Módulo mal encaixado ou posição incorreta','Com professor e alimentação desconectada, confira travas e slots indicados.','Reencaixe corretamente; não force um módulo de padrão diferente.'],
['Módulo incompatível ou mistura instável','Confira geração DDR, capacidade, tipo e especificações; teste a configuração anterior.','Use módulos compatíveis e preferencialmente um conjunto validado para a placa.'],
['Perfil de memória ou módulo defeituoso','Com o professor, teste um módulo por vez em parâmetros padrão; reset de CMOS somente conforme o manual.','Desative perfil instável ou substitua o módulo que falha também em condições padrão.']
],'O PC conclui o POST, reconhece a RAM e passa por teste orientado de memória.');

add('Mensagem “CPU Fan Error” ou erro de ventoinha','Refrigeração','O firmware informa que não detectou corretamente a ventoinha do processador.',[
['Aviso após uma manutenção','Não ignore; desligue e confira o que foi alterado.','Interrompa o uso até confirmar a refrigeração do processador.'],
['Cooler conectado ao header errado','Com PC fora da tomada, o professor identifica CPU_FAN e demais headers pelo manual.','Conecte o cooler ao header previsto; bombas de water cooler seguem o manual específico.'],
['Cabo solto, hélice bloqueada ou ventoinha defeituosa','Inspecione conexões e obstáculos sem energizar partes expostas.','Reconecte, retire a obstrução ou substitua a ventoinha que falhou.'],
['Limite de leitura incompatível com a montagem','Se refrigeração está comprovadamente funcional, compare rotação mínima e leitura com o manual.','O professor ajusta o monitoramento ao conjunto correto. Não desative o alerta para esconder um cooler parado.']
],'A leitura de refrigeração é coerente, o alerta é resolvido e a temperatura permanece adequada.');

add('PC não conclui o POST: bipes ou LED de diagnóstico','Inicialização','O computador tem energia, mas não chega à imagem inicial ou sinaliza um erro.',[
['Código ainda não identificado','Anote padrão, duração, cor e modelo exato da placa/PC.','Consulte a tabela específica do fabricante; não use tabelas universais de bipes.'],
['Periférico ou mudança recente interferindo','Compare sem acessórios externos não essenciais e registre a última mudança.','Remova o acessório problemático ou restaure a configuração anterior.'],
['Memória ou vídeo indicados pelo código','Com professor e PC desconectado, confira encaixes e teste componente compatível conhecido.','Corrija a conexão ou substitua somente o módulo/placa que falhou no teste.'],
['CPU, placa-mãe ou firmware indicados pelo diagnóstico','Revise compatibilidade e siga os testes do manual; configuração mínima exige supervisão.','Encaminhe para diagnóstico técnico. Atualização de BIOS não deve ser feita por tentativa num PC instável.']
],'O POST é concluído e o código de erro deixa de aparecer.','POST é o autoteste de hardware executado antes de carregar o sistema operacional.');

add('Liga por poucos segundos e desliga','Energia','As ventoinhas começam a girar, mas o PC apaga antes de iniciar.',[
['Periférico externo causando proteção','Desconecte acessórios externos não essenciais com o PC desligado.','Retire o periférico/cabo que faz a falha retornar.'],
['Conector de energia interno incompleto','Professor, PC fora da tomada: confira ATX da placa e alimentação da CPU pelo manual.','Conecte os cabos corretos da fonte; não confunda EPS/CPU com PCIe/GPU.'],
['Cooler ausente, solto ou erro de montagem','Confira a presença, fixação e conexão da refrigeração.','Reinstale corretamente antes de voltar a ligar. Nunca teste CPU sem cooler.'],
['Curto, fonte ou placa-mãe defeituosos','Professor inspeciona parafusos soltos, espaçadores e testa fonte compatível com seus próprios cabos.','Corrija a montagem se confirmado; substitua fonte/placa só após isolamento técnico.']
],'O PC permanece ligado e conclui o POST sem aquecimento anormal.','Se houver cheiro de queimado, faísca ou líquido, desconecte e encaminhe: não repita testes de energização.');

add('Erros no teste de memória RAM','Memória','Uma ferramenta de diagnóstico acusa erros, ou falhas gerais apontam para a memória.',[
['Perfil de frequência instável','Registre os ajustes e confira se XMP/EXPO ou overclock está ativo.','Com o professor, teste nos parâmetros padrão suportados.'],
['Mau encaixe','PC fora da tomada: confira travas e slots recomendados.','Reencaixe segurando pelas bordas, com proteção contra descarga eletrostática.'],
['Módulo com falha','Teste um módulo por vez no slot recomendado e repita com módulo conhecido.','Substitua o módulo se o erro o acompanhar em configurações padrão.'],
['Slot, controlador ou combinação de módulos','Compare módulos bons em slots permitidos e consulte compatibilidade.','Use conjunto compatível; se o erro acompanha slot/canal, encaminhe placa-mãe/CPU para diagnóstico.']
],'A configuração final passa pelo teste completo escolhido e não reproduz as falhas observadas.','Um teste sem erros reduz suspeitas, mas não garante ausência de toda falha intermitente. Não esfregue borracha nem aplique produtos caseiros nos contatos.');

add('Quadrados, linhas ou cores estranhas na imagem','Vídeo','Aparecem artefatos gráficos, distorções ou blocos de cor.',[
['Cabo ou monitor','Compare outro cabo e outro monitor; observe se o defeito aparece no menu do monitor.','Substitua o cabo/monitor cuja falha foi isolada.'],
['Aplicativo ou driver','Veja se ocorre só num programa e se começou após atualização.','Atualize/corrija o aplicativo ou reinstale/reverta o driver oficial.'],
['Temperatura ou overclock','Confira temperatura e parâmetros da GPU e memória, sem forçar testes se estiver superaquecendo.','Restaure parâmetros padrão e corrija a refrigeração.'],
['Falha de GPU ou memória compartilhada','Compare imagem antes do sistema e teste GPU/RAM compatível conhecida com o professor.','Se acompanha a GPU, encaminhe/substitua a placa; com vídeo integrado, investigue também RAM e placa-mãe.']
],'A imagem permanece limpa no firmware e na tarefa que antes apresentava artefatos.');

add('Jogos ou programas 3D travam, mas o desktop funciona','Vídeo','A falha aparece com carga gráfica mais alta.',[
['Requisito ou configuração acima do hardware','Compare requisitos, resolução e ajustes do programa.','Use configurações compatíveis e teste uma carga menor.'],
['Programa ou driver com falha','Confira se outros programas 3D também falham e registre o erro.','Atualize/repare o programa e use driver oficial compatível.'],
['Aquecimento ou ajustes instáveis','Observe temperaturas e desative overclock/perfis instáveis com o professor.','Corrija a refrigeração e teste nos parâmetros padrão.'],
['GPU ou alimentação inadequada','Com PC desconectado, professor confere conectores e requisitos da GPU/fonte; compara componentes conhecidos.','Use alimentação prevista e substitua o componente cuja falha foi confirmada. Não continue forçando desligamentos.']
],'A tarefa gráfica de referência funciona com ajustes suportados, sem travamento nem desligamento.');

add('HD faz cliques ou unidade apresenta erros de leitura','Armazenamento','Arquivos falham ao abrir, a unidade desaparece ou um HDD produz cliques repetidos.',[
['Indício de risco aos dados','Confira mensagens e ruído; não confunda acesso normal de HDD com cliques repetitivos de falha.','Pare usos não essenciais. Se os dados são insubstituíveis ou há ruído anormal, desligue e busque recuperação especializada.'],
['Conexão com mau contato','Se não há dano mecânico aparente e o professor autoriza teste, confira cabos com PC desconectado.','Corrija cabo/porta confirmado como defeituoso, sem escrever na unidade.'],
['Alerta de saúde da unidade','Consulte indicadores SMART e diagnóstico oficial, priorizando backup e evitando teste extenso em disco degradado.','Copie dados acessíveis para outra unidade saudável; alertas de falha justificam substituição.'],
['Falha persistente da unidade','Se erros acompanham a unidade em conexão confiável, trate como falha de armazenamento.','Substitua e restaure backup. Para dados não recuperados, encaminhe a especialista.']
],'Os dados preservados são verificados e a unidade saudável opera sem os erros anteriores.','Não abra HDD, não use congelador e não execute reparos que escrevem na unidade antes de avaliar a preservação dos dados. SSD não tem peças móveis; ruído mecânico não vem dele.');

add('Tela de erro de parada: BSOD','Sistema','O Windows mostra um erro grave e reinicia; a cor da tela pode variar pela versão.',[
['Código e contexto desconhecidos','Registre código de parada, horário, tarefa e mudança recente; um código sozinho não identifica uma peça.','Guarde as informações para comparar ocorrências antes de alterar o PC.'],
['Driver, atualização ou acessório recente','Compare sem o acessório recém-instalado e consulte histórico de erros.','Reverta ou atualize o item relacionado à falha com fonte oficial.'],
['Arquivos do sistema, temperatura ou disco','Faça backup, verifique registros, refrigeração e saúde da unidade.','Aplique reparo oficial se apropriado; corrija calor ou armazenamento confirmado como falho.'],
['RAM ou outro hardware instável','Com o professor, teste em parâmetros padrão, memória e componentes apontados pelos registros.','Substitua apenas o item cuja falha foi isolada; se necessário, encaminhe análise dos registros de falha.']
],'A atividade que provocava a falha e o uso normal ficam estáveis; registre se houve nova ocorrência.');

add('PC reinicia ou perde estabilidade após ativar XMP/EXPO','Memória','O defeito começa depois de alterar frequência ou temporizações da memória.',[
['Relação com o ajuste não confirmada','Registre o perfil ativado e compare com a configuração anterior.','Com o professor, desative o perfil e teste nos parâmetros padrão.'],
['Limite de compatibilidade do conjunto','Confira manual, lista de memória validada e capacidade/frequência suportadas pela CPU.','Use um perfil/configuração suportada e estável; o perfil anunciado não é garantia para todo conjunto.'],
['Mistura de módulos ou slots inadequados','Confira se os módulos são de um conjunto validado e ocupam os slots recomendados.','Teste o conjunto apropriado nos slots corretos.'],
['Falha persistente em parâmetros padrão','Execute teste orientado de memória se o erro continua sem perfil.','Siga o caso 43; encaminhe firmware/controlador se módulos bons também falham.']
],'O PC fica estável e passa no teste de memória com a configuração final documentada.','Reset de CMOS só conforme o manual, registrando ajustes e tendo a chave de recuperação do disco se necessária.');

add('Computador não inicia depois de uma troca de peças','Inicialização','A falha aparece logo após trocar CPU, GPU, fonte ou outro componente.',[
['Conexão esquecida durante a montagem','PC fora da tomada: professor compara cabos, vídeo e montagem com os manuais.','Corrija o encaixe/conector ausente sem forçar nem adaptar cabos indevidos.'],
['Peça nova incompatível','Confira modelo exato, socket, memória, potência e conectores necessários.','Instale componente compatível. Em fontes modulares, use apenas cabos aprovados para o modelo específico.'],
['CPU depende de versão de BIOS específica','Consulte a lista oficial de CPUs e a versão mínima de firmware.','Professor planeja atualização apenas pelo método oficial, com energia estável e hardware/método compatível.'],
['Peça nova defeituosa ou dano de montagem','Compare com a configuração anterior, se segura; examine socket e fixações sem tocar em pinos.','Se a falha acompanha a peça nova, substitua; se há dano físico, encaminhe para reparo especializado.']
],'O novo conjunto conclui o POST, reconhece as peças e fica estável no uso previsto.','Atualizar BIOS por tentativa pode inutilizar a placa. Não misture cabos modulares de fontes diferentes.');

add('Suspeita de defeito na placa-mãe','Inicialização','Falhas persistem mesmo após verificar alimentação, conexões e componentes básicos.',[
['Conclusão prematura','Revise o histórico e confirme tomada, fonte, monitor, cabos e código de POST.','Resolva causas externas e documente tudo antes de condenar a placa.'],
['Configuração ou montagem inadequada','Professor confere conectores, espaçadores, compatibilidade e parâmetros registrados.','Corrija montagem; restaure ajustes conforme o manual se houver evidência de configuração incorreta.'],
['Outra peça provoca o sintoma','Com professor, faça teste mínimo previsto no manual usando fonte, RAM e vídeo compatíveis conhecidos.','Troque uma variável por vez e substitua a peça que comprovadamente causa o erro.'],
['Falha da placa-mãe ou CPU ainda não isolada','Se a falha persiste com peças boas e montagem correta, são necessários testes técnicos adicionais.','Encaminhe para bancada especializada; substitua a placa somente com evidência suficiente. Reparos eletrônicos ficam fora desta prática.']
],'Há um diagnóstico documentado com testes comparativos ou encaminhamento justificado, seguido de validação do reparo.','Inspeção visual sem danos não prova que a placa está boa. Fonte conhecida e compatível é diferente de fonte apenas “nova”.');

const levels = [
{id:1,name:'Primeiros passos',short:'Básico',desc:'Energia, cabos e conexões externas.'},
{id:2,name:'Uso e configurações',short:'Básico +',desc:'Periféricos, ajustes e desempenho.'},
{id:3,name:'Sistema e armazenamento',short:'Intermediário',desc:'Boot, rede, arquivos e recuperação.'},
{id:4,name:'Dentro do gabinete',short:'Intermediário +',desc:'Refrigeração, memória e conexões internas.'},
{id:5,name:'Isolamento de falhas',short:'Avançado guiado',desc:'POST, testes comparativos e diagnóstico técnico.'}
];
const references = [
{title:'Dell · Energia, POST, boot e vídeo',url:'https://www.dell.com/support/kbdoc/en-us/000125609/resolve-no-power-no-post-no-boot-or-no-video-issues-with-your-dell-computer'},
{title:'Microsoft · Opções de recuperação do Windows',url:'https://support.microsoft.com/en-us/windows/experience/backup-recovery/recovery-options-in-windows'},
{title:'Microsoft · Erros de parada no Windows',url:'https://support.microsoft.com/en-US/windows/resolving-blue-screen-errors-in-windows-60b01860-58f2-be66-7516-5c45a66ae3c6'},
{title:'HP · Refrigeração de desktops',url:'https://support.hp.com/ie-en/document/ish_3900448-2964858-16'}
];
