import {cases} from './cases.js';

// Rótulos curtos escritos para cada teste; os procedimentos originais seguem em "Como fazer".
const rows=[];
const add=(kind,symptom,screen,check,actions)=>rows.push({kind,symptom,screen,check,actions:actions.trim().split('\n').map(row=>{const [test,fix,normal]=row.split('|');return {test,fix,normal};})});
add('power','O PC não dá nenhum sinal.','SEM ENERGIA','Ligar o computador',`
Testar tomada|Usar tomada com energia|A tomada fornece energia.
Ver plugue|Conectar na tomada|O plugue está bem conectado.
Ver cabo da fonte|Encaixar cabo da fonte|A conexão traseira está firme.
Ver chave I/O|Ligar chave I/O|A chave I/O está ligada.
Comparar cabo|Trocar cabo de energia|O cabo de energia funciona.
Ver conexões internas|Corrigir alimentação interna|A fonte e os conectores estão presentes.
Testar com o professor|Trocar peça confirmada|A comparação não aponta falha nessas peças.`);
add('monitor-off','O monitor não acende.','TELA APAGADA','Ligar o monitor',`
Ver botão do monitor|Ligar monitor|O botão está ligado.
Ver cabo de energia|Reconectar energia|O cabo e a tomada funcionam.
Comparar adaptador|Trocar adaptador confirmado|O adaptador compatível funciona.
Comparar monitor|Encaminhar monitor|O monitor funciona em outro PC.`);
add('signal','O PC liga, mas não aparece imagem.','SEM SINAL','Conferir a imagem',`
Ver entrada selecionada|Selecionar entrada correta|A entrada corresponde ao cabo.
Testar cabo de vídeo|Corrigir cabo de vídeo|O cabo de vídeo funciona.
Ver saída do gabinete|Conectar na saída correta|O cabo está na saída adequada.
Testar outro monitor|Isolar falha com professor|O monitor recebe imagem no teste.`);
add('flicker','A imagem pisca durante o uso.','IMAGEM INTERMITENTE','Observar a imagem',`
Ver encaixe do cabo|Firmar conexão de vídeo|As duas pontas estão firmes.
Comparar cabo e adaptador|Trocar cabo confirmado|A falha continua com outro cabo.
Ver resolução e frequência|Usar ajustes suportados|Os ajustes são suportados.
Ver histórico do driver|Corrigir driver de vídeo|O teste não relaciona a falha ao driver.`);
add('scale','Letras e proporções estão estranhas.','IMAGEM DISTORCIDA','Conferir as proporções',`
Ver resolução|Usar resolução nativa|A resolução já é a recomendada.
Ver escala do sistema|Ajustar escala|A escala está adequada.
Ver ajustes do monitor|Corrigir proporção do monitor|A proporção do monitor está correta.
Ver driver de vídeo|Instalar driver oficial|O driver correto está instalado.`);
add('keyboard','As teclas não respondem.','DIGITE AQUI: _','Testar as teclas',`
Ver conexão e pilhas|Conectar e ligar teclado|O teclado recebe energia.
Testar USB traseira|Usar porta funcional|A falha continua sem o hub.
Comparar outro teclado|Trocar teclado confirmado|O teclado responde em outro PC.
Comparar BIOS e sistema|Revisar USB com professor|A comparação não aponta falha no sistema.`);
add('mouse','O ponteiro fica parado.','PONTEIRO PARADO','Mover o ponteiro',`
Ver energia do mouse|Conectar e ligar mouse|O mouse recebe energia.
Ver sensor e superfície|Limpar sensor e usar mousepad|O sensor e a superfície estão adequados.
Testar USB traseira|Usar USB funcional|A falha continua na porta traseira.
Comparar outro mouse|Corrigir mouse ou driver|O mouse funciona no teste cruzado.`);
add('audio','Nenhum som sai do computador.','SEM ÁUDIO','Reproduzir som de teste',`
Ver volume|Ativar e ajustar volume|O volume está ativo.
Ver conexão da caixa|Ligar e conectar caixa|A caixa está ligada e conectada.
Ver saída selecionada|Selecionar saída de áudio|A saída selecionada é a correta.
Comparar fone e driver|Corrigir acessório ou driver|O acessório e o driver funcionam.`);
add('front-audio','O áudio frontal não funciona.','ÁUDIO FRONTAL AUSENTE','Testar áudio frontal',`
Ver plugue do fone|Usar conexão adequada|O plugue é compatível e está na entrada certa.
Ver dispositivo de áudio|Selecionar áudio frontal|O dispositivo frontal está selecionado.
Comparar frente e traseira|Corrigir acessório ou conector|O teste não isola falha no acessório ou conector.
Ver cabo HD AUDIO|Reconectar HD AUDIO|O cabo interno está conectado corretamente.`);
add('ethernet','O cabo está conectado, mas não há rede.','REDE DESCONECTADA','Testar conexão por cabo',`
Ver encaixes de rede|Conectar cabo de rede|As duas pontas estão conectadas.
Comparar cabo e porta|Usar cabo ou porta funcional|O cabo e a porta funcionam.
Ver adaptador Ethernet|Habilitar adaptador|O adaptador está habilitado.
Comparar outro PC|Corrigir rede autorizada|A configuração de rede está adequada.`);
add('wifi','O Wi-Fi não conecta.','WI-FI INDISPONÍVEL','Conectar ao Wi-Fi',`
Ver adaptador Wi-Fi|Usar conexão compatível|O PC tem adaptador Wi-Fi.
Ver rádio e antenas|Ativar Wi-Fi e antenas|O rádio e as antenas estão ativos.
Testar senha e sinal|Corrigir senha e posição|A senha e o sinal estão adequados.
Ver driver e banda|Corrigir driver ou banda|O driver e a banda são compatíveis.`);
add('usb','O pendrive não aparece.','UNIDADE NÃO EXIBIDA','Abrir unidade de teste',`
Testar USB traseira|Reconectar em porta funcional|A conexão USB funciona.
Comparar pendrive|Preservar dados e substituir|O pendrive funciona em outro PC.
Ver letra da unidade|Atribuir letra livre|A partição tem uma letra válida.
Ver sistema de arquivos|Recuperar dados primeiro|O sistema de arquivos é reconhecido.`);
add('printer','A página não sai da impressora.','IMPRESSÃO PARADA','Imprimir página de teste',`
Ver painel e papel|Resolver aviso da impressora|A impressora está pronta e tem papel.
Ver impressora escolhida|Selecionar e conectar impressora|A impressora correta está conectada.
Ver fila de impressão|Retomar fila de teste|A fila não está pausada ou travada.
Comparar página interna|Revisar driver e serviço|A comparação não aponta falha no driver.`);
add('camera','A webcam não mostra imagem.','CÂMERA SEM IMAGEM','Abrir câmera de teste',`
Ver tampa e cabo|Abrir tampa e conectar|A tampa está aberta e o cabo conectado.
Ver câmera selecionada|Selecionar webcam correta|A webcam correta está selecionada.
Ver permissões e uso|Autorizar aplicativo necessário|A câmera está liberada para o aplicativo.
Comparar câmera e porta|Corrigir driver ou câmera|A câmera funciona na comparação.`);
add('mic','A voz não é captada.','MICROFONE SEM SINAL','Gravar voz de teste',`
Ver mute e conexão|Ativar e conectar microfone|O microfone está ligado e conectado.
Ver entrada e nível|Ajustar entrada e nível|A entrada e o nível estão corretos.
Testar gravação do sistema|Autorizar e selecionar entrada|A gravação e a permissão funcionam.
Comparar microfone|Corrigir conexão ou acessório|O microfone funciona na comparação.`);
add('dual','A segunda tela não aparece.','SEGUNDA TELA AUSENTE','Detectar segunda tela',`
Ver energia e entrada|Ligar segunda tela|A segunda tela está ligada na entrada certa.
Ver modo de exibição|Estender ou duplicar telas|O modo de exibição está adequado.
Testar cabo e adaptador|Usar conexão apropriada|O cabo e o adaptador funcionam.
Ver limite de telas|Usar saídas suportadas|A montagem suporta as telas conectadas.`);
add('clock','A data e a hora estão erradas.','HORA INCORRETA','Conferir o relógio',`
Ver fuso horário|Corrigir fuso e sincronizar|O fuso horário está correto.
Testar sincronização|Restaurar sincronização|O serviço de hora sincroniza.
Comparar hora da BIOS|Investigar sistema ou bateria|A hora da BIOS não é perdida.
Ver bateria com professor|Trocar bateria correta|O teste não aponta bateria esgotada.`);
add('boot-slow','O computador demora para iniciar.','INICIANDO…','Reiniciar e comparar',`
Testar sem acessórios|Remover acessório problemático|A demora continua sem os acessórios.
Ver aplicativos iniciais|Desativar início desnecessário|Os aplicativos iniciais não explicam a demora.
Ver espaço e atualização|Liberar espaço e aguardar|Há espaço e nenhuma atualização em andamento.
Ver saúde da unidade|Preservar dados e avaliar SSD|A unidade não explica a demora neste cenário.`);
add('slow','O computador está muito lento.','SISTEMA LENTO','Repetir a tarefa',`
Ver tarefas abertas|Fechar tarefas não usadas|A carga de tarefas está adequada.
Ver espaço livre|Liberar espaço com backup|Há espaço livre suficiente.
Ver processos e proteção|Corrigir aplicativo identificado|Nenhum processo suspeito explica a lentidão.
Ver limites e temperatura|Corrigir causa confirmada|O teste não aponta calor ou limitação do hardware.`);
add('app','Um programa trava ou fecha.','APLICATIVO PAROU','Testar o programa',`
Testar arquivo novo|Recuperar arquivo de backup|O travamento não acompanha esse arquivo.
Ver recursos disponíveis|Reduzir carga e liberar espaço|Os recursos atendem ao aplicativo.
Testar sem extensões|Reparar aplicativo com backup|A falha não acompanha uma extensão ou mudança.
Comparar outros programas|Encaminhar falha geral|Os outros programas funcionam normalmente.`);
add('recovery','O Windows abre a recuperação.','RECUPERAÇÃO','Testar inicialização',`
Testar sem mídia externa|Retirar mídia não essencial|A recuperação continua sem a mídia externa.
Ver opções oficiais|Reparar inicialização|O teste não aponta falha na inicialização.
Ver mudança recente|Restaurar mudança identificada|Não há relação com atualização ou driver recente.
Ver dados e disco|Reparar após preservar dados|O teste não aponta corrupção ou disco com falha.`);
add('web','A rede conecta, mas os sites não abrem.','SEM INTERNET','Abrir site de teste',`
Comparar dispositivos|Encaminhar falha geral|Outros dispositivos acessam a internet.
Ver IP e gateway|Restaurar IP autorizado|IP e gateway estão corretos.
Testar nomes DNS|Restaurar DNS da rede|A resolução de nomes funciona.
Ver VPN e proxy|Corrigir configuração autorizada|VPN e proxy não explicam a falha.`);
add('network-drop','A conexão cai durante o uso.','CONEXÃO INTERMITENTE','Observar a conexão',`
Ver cabo e sinal|Corrigir cabo ou posição|O cabo e o sinal estão estáveis.
Comparar dispositivos|Usar porta de rede funcional|A rede está estável nos outros dispositivos.
Ver driver e energia|Ajustar driver e energia|Driver e economia de energia não explicam a queda.
Comparar adaptador|Trocar adaptador confirmado|A queda continua com outro adaptador.`);
add('bluetooth','O acessório não conecta por Bluetooth.','SEM PAREAMENTO','Conectar acessório',`
Ver rádio Bluetooth|Ativar ou instalar adaptador|O rádio Bluetooth está disponível e ativo.
Ver modo de pareamento|Carregar e parear acessório|O acessório está carregado e em pareamento.
Ver conexões anteriores|Refazer pareamento do acessório|Não há conexão anterior impedindo o pareamento.
Comparar acessório e driver|Corrigir driver ou adaptador|A comparação não aponta falha no driver ou adaptador.`);
add('storage-full','O disco está quase cheio.','POUCO ESPAÇO','Conferir espaço livre',`
Ver temporários e lixeira|Limpar itens dispensáveis|Temporários e lixeira não explicam o espaço ocupado.
Ver arquivos grandes|Mover arquivos com backup|Arquivos pessoais grandes não são a causa.
Ver programas instalados|Remover programas não usados|Os programas instalados não explicam o espaço ocupado.
Comparar capacidade e uso|Planejar unidade maior|A capacidade atende à rotina após a limpeza.`);
add('ads','Aparecem propagandas desconhecidas.','ALERTAS INDESEJADOS','Conferir sistema protegido',`
Ver origem do alerta|Revogar permissão do site|Os alertas não vêm de notificações autorizadas.
Ver extensões e programas|Remover itens indesejados|A revisão não encontra extensão indesejada.
Executar proteção confiável|Seguir quarentena autorizada|A verificação não aponta infecção neste cenário.
Ver persistência do problema|Encaminhar e preservar dados|O problema não retorna após a correção inicial.`);
add('update','A atualização falha repetidamente.','ATUALIZAÇÃO FALHOU','Tentar atualização oficial',`
Ver reinício pendente|Salvar e reiniciar|Não há reinicialização pendente.
Ver rede, hora e espaço|Corrigir condições básicas|Rede, hora e espaço estão adequados.
Executar solucionador oficial|Aplicar correção indicada|A ferramenta não aponta essa causa.
Ver código com professor|Aplicar reparo oficial|O código não aponta falha no pacote ou sistema.`);
add('boot-error','O PC não encontra como iniciar.','NO BOOTABLE DEVICE','Testar boot correto',`
Ver mídia externa|Retirar mídia de teste|A falha continua sem mídia externa.
Ver ordem de boot|Escolher boot correto|A entrada de boot está correta.
Ver unidade na BIOS|Investigar conexão da unidade|A BIOS detecta a unidade.
Ver modo UEFI e boot|Restaurar boot com professor|O modo e o carregador de boot estão corretos.`);
add('drive-missing','A BIOS não detecta o disco.','DISCO NÃO DETECTADO','Conferir unidade na BIOS',`
Ver slot e tipo da unidade|Usar conector compatível|A unidade usa um slot compatível.
Ver encaixes com professor|Reconectar unidade desligada|Os encaixes estão firmes.
Comparar cabo e porta|Usar cabo ou porta compatível|O cabo e a porta estão disponíveis e funcionam.
Comparar outra unidade|Preservar dados e isolar peça|A comparação não isola falha nessa peça.`);
add('new-drive','O disco novo não aparece no sistema.','NOVA UNIDADE AUSENTE','Conferir volume preparado',`
Identificar unidade no sistema|Confirmar unidade e dados|A unidade está identificada no gerenciamento.
Ver estado e letra|Colocar online ou dar letra|A partição está online e tem letra.
Confirmar disco vazio|Preparar disco vazio assistido|A unidade já tem uma partição utilizável.
Ver driver e compatibilidade|Recuperar antes de converter|O driver e o sistema de arquivos são compatíveis.`);
add('front-usb','As portas USB da frente não funcionam.','USB FRONTAL AUSENTE','Testar USB frontal',`
Comparar acessório e cabo|Trocar acessório confirmado|O acessório funciona em outra porta.
Comparar consumo de energia|Usar alimentação adequada|O consumo do dispositivo é adequado.
Ver cabo USB interno|Reconectar header correto|O cabo frontal está conectado corretamente.
Inspecionar porta desligada|Substituir conjunto confirmado|A porta não apresenta dano físico.`);
add('usb-drop','O USB desconecta sozinho.','USB INTERMITENTE','Repetir uso do USB',`
Comparar cabo USB|Trocar cabo confirmado|A falha continua com outro cabo.
Testar sem hub|Retirar intermediário defeituoso|A falha continua sem o hub.
Ver energia e driver|Ajustar energia e driver|Energia e driver não explicam a falha.
Comparar acessório e PC|Encaminhar peça confirmada|A comparação não aponta falha no acessório ou controlador.`);
add('noise','O gabinete faz muito barulho.','RUÍDO NO GABINETE','Observar ruído e funcionamento',`
Ver apoio do gabinete|Estabilizar gabinete|O gabinete está estável e livre de objetos.
Inspecionar cabos desligados|Prender cabos longe da hélice|Nenhum cabo encosta nas ventoinhas.
Ver filtros e ventilação|Limpar e liberar ventilação|Os filtros e as entradas estão livres.
Identificar origem do som|Tratar peça confirmada|O som não aponta falha nessas peças.`);
add('heat','O computador fica muito quente.','TEMPERATURA ALTA','Conferir temperatura em uso',`
Ver entradas de ar|Liberar circulação de ar|As entradas e saídas estão livres.
Comparar carga e repouso|Reduzir carga desnecessária|A carga de trabalho não explica o calor.
Ver filtros e ventoinhas|Limpar e corrigir ventilação|Os filtros e as ventoinhas funcionam.
Ver cooler com professor|Reinstalar cooler corretamente|A montagem do cooler está correta.`);
add('shutdown','O PC desliga durante o uso.','DESLIGAMENTO INESPERADO','Repetir tarefa sem desligar',`
Comparar alimentação externa|Usar alimentação estável|A alimentação externa está estável.
Ver temperaturas|Corrigir refrigeração|A temperatura está dentro do limite.
Ver eventos e energia|Corrigir comando identificado|Não há comando ou configuração causando a falha.
Comparar fonte com professor|Trocar apenas peça isolada|O teste não isola falha na fonte ou componente.`);
add('freeze','O computador inteiro congela.','SISTEMA CONGELADO','Repetir tarefa estável',`
Ver resposta e carga|Reduzir tarefa problemática|O congelamento não é sobrecarga temporária.
Ver mudança recente|Reverter mudança identificada|A falha não acompanha a mudança recente.
Ver calor e disco|Corrigir calor ou armazenamento|Temperatura e unidade não explicam a falha.
Testar memória com professor|Trocar componente confirmado|A comparação não aponta instabilidade nessas peças.`);
add('black','O Windows começa e a tela fica preta.','TELA PRETA','Conferir entrada no sistema',`
Testar uma tela|Corrigir saída e modo|A saída e o modo estão corretos.
Testar modo de segurança|Corrigir driver oficial|A comparação não relaciona a falha ao driver.
Comparar usuário e sessão|Reparar sessão com backup|A falha não acompanha aplicativo ou sessão.
Comparar vídeo e recuperação|Isolar sistema ou GPU|A comparação não isola falha no sistema ou GPU.`);
add('ram-size','A memória aparece incompleta.','RAM UTILIZÁVEL REDUZIDA','Conferir memória disponível',`
Comparar instalada e utilizável|Reconhecer reserva normal|A diferença não é apenas reserva normal.
Ver limites do conjunto|Usar sistema e RAM compatíveis|O conjunto suporta a memória instalada.
Ver travas e slots|Reencaixar RAM corretamente|Os módulos estão firmes nos slots corretos.
Comparar módulos e slots|Isolar módulo ou canal|A comparação não aponta falha no módulo ou canal.`);
add('ram-boot','O PC não inicia após trocar a RAM.','INICIALIZAÇÃO PARADA','Iniciar com RAM compatível',`
Ver tempo do primeiro boot|Aguardar período do manual|O período de treinamento já foi respeitado.
Ver travas e posições|Reencaixar RAM desligada|Os módulos estão bem encaixados.
Comparar especificações DDR|Usar conjunto compatível|Os módulos são compatíveis com a placa.
Testar parâmetros padrão|Corrigir perfil ou módulo|O teste padrão não aponta essa causa.`);
add('fan','Aparece um aviso da ventoinha.','CPU FAN ERROR','Conferir refrigeração e leitura',`
Ver manutenção recente|Parar e conferir refrigeração|O aviso não se relaciona à manutenção recente.
Ver header CPU_FAN|Conectar no header correto|O cooler usa o header previsto.
Ver cabo e obstáculos|Corrigir ventoinha confirmada|O cabo e a hélice estão livres.
Comparar leitura e manual|Ajustar monitoramento correto|A leitura está compatível com a montagem.`);
add('post','Há bipes ou LED de diagnóstico.','POST INTERROMPIDO','Conferir POST com orientação',`
Anotar código e modelo|Consultar manual do modelo|O código já foi identificado pelo manual.
Testar sem acessórios|Restaurar configuração anterior|A falha continua sem os acessórios.
Comparar RAM e vídeo|Corrigir peça indicada no código|A comparação não aponta falha em RAM ou vídeo.
Ver compatibilidade assistida|Encaminhar diagnóstico técnico|A comparação não aponta essa causa neste cenário.`);
add('short-power','O PC liga por segundos e desliga.','LIGA E DESLIGA','Ligar com montagem conferida',`
Testar sem periféricos|Retirar periférico confirmado|A falha continua sem periféricos.
Ver ATX e energia CPU|Conectar alimentação correta|Os conectores ATX e CPU estão completos.
Ver montagem do cooler|Reinstalar refrigeração|O cooler está presente e bem montado.
Inspecionar com professor|Corrigir montagem confirmada|O teste não isola curto ou falha nessas peças.`);
add('ram-errors','O teste de memória apresenta erros.','ERROS DE RAM','Repetir teste de memória',`
Ver perfil XMP/EXPO|Testar parâmetros padrão|O perfil não explica os erros.
Ver encaixe da RAM|Reencaixar pelas bordas|Os módulos estão bem encaixados.
Comparar módulos separados|Trocar módulo confirmado|O erro não acompanha esse módulo.
Comparar slots e conjunto|Corrigir conjunto ou canal|A comparação não aponta esse slot ou combinação.`);
add('artifacts','A imagem tem quadrados e cores estranhas.','FALHAS NA IMAGEM','Conferir imagem estável',`
Comparar cabo e monitor|Trocar cabo ou monitor isolado|A falha continua com outro cabo e monitor.
Comparar aplicativo e driver|Corrigir aplicativo ou driver|A comparação não relaciona a falha ao software.
Ver temperatura e ajustes|Restaurar ajustes e refrigeração|Temperatura e ajustes estão adequados.
Comparar GPU e RAM|Encaminhar peça isolada|A comparação não aponta falha na GPU ou RAM.`);
add('game','O programa 3D trava.','3D INTERROMPIDO','Repetir tarefa 3D',`
Comparar requisitos e ajustes|Reduzir ajustes ao hardware|Os ajustes atendem aos limites do hardware.
Comparar programas 3D|Corrigir programa e driver|A comparação não isola falha no programa ou driver.
Ver calor e perfis|Corrigir calor e parâmetros|Temperatura e perfis estão adequados.
Ver alimentação assistida|Corrigir componente confirmado|A comparação não aponta falha na alimentação ou GPU.`);
add('drive-risk','A unidade tem erros de leitura.','DADOS EM RISCO','Conferir acesso após proteção',`
Ver mensagens e ruído|Parar e priorizar recuperação|O teste não aponta sinal mecânico de falha.
Ver cabos com autorização|Corrigir cabo sem gravar dados|Os cabos e as conexões estão firmes.
Consultar saúde da unidade|Preservar dados e substituir|A leitura de saúde não aponta essa falha.
Comparar conexão confiável|Trocar unidade e restaurar backup|O erro não acompanha a unidade nesse teste.`);
add('bsod','O sistema para numa tela de erro.','ERRO DE PARADA','Conferir estabilidade do sistema',`
Registrar código e contexto|Guardar evidências do erro|O código e o contexto já estão registrados.
Comparar mudança recente|Corrigir item relacionado|A falha não acompanha uma mudança recente.
Ver registros, calor e disco|Corrigir causa confirmada|A verificação não aponta essa causa.
Testar hardware orientado|Isolar componente ou registro|O teste não aponta falha nesse hardware.`);
add('xmp','O PC ficou instável após ativar um perfil.','PERFIL INSTÁVEL','Testar configuração estável',`
Comparar com perfil anterior|Desativar perfil com professor|A instabilidade continua sem o perfil.
Ver limites de CPU e RAM|Usar configuração suportada|O perfil respeita os limites do conjunto.
Ver conjunto e slots|Usar conjunto nos slots certos|O conjunto e os slots estão adequados.
Testar RAM sem perfil|Encaminhar teste da memória|O teste padrão não aponta falha persistente.`);
add('upgrade','O PC não inicia após trocar uma peça.','BOOT APÓS TROCA FALHOU','Iniciar com montagem compatível',`
Ver cabos e montagem|Corrigir conexão esquecida|Os conectores necessários estão presentes.
Comparar modelos exatos|Instalar componente compatível|Os modelos e conectores são compatíveis.
Ver versão mínima de BIOS|Planejar atualização oficial|A BIOS suporta o modelo instalado.
Comparar configuração anterior|Trocar peça ou encaminhar dano|A comparação não isola falha na peça nova.`);
add('motherboard','Há suspeita de defeito na placa-mãe.','FALHA A ISOLAR','Conferir diagnóstico documentado',`
Revisar causas externas|Resolver causas externas|As causas externas já foram conferidas.
Ver montagem assistida|Corrigir montagem ou ajustes|A montagem e os ajustes estão corretos.
Testar peças boas assistido|Trocar peça comprovada|A comparação não isola outra peça como causa.
Revisar evidências restantes|Encaminhar bancada especializada|Os testes não sustentam essa hipótese neste cenário.`);

export const benchCases=rows.map((row,i)=>({...row,id:i+1}));
// Evidência observada no cenário de cada chamado, revelada apenas pelo teste correspondente.
const findings=[
  'O aparelho de teste também não liga nessa tomada.',
  'O cabo de energia do monitor está mal conectado.',
  'O cabo está na placa-mãe; neste PC, a saída disponível é a da placa de vídeo.',
  'A falha começou após a mudança do driver; o monitor funciona na comparação.',
  'A resolução escolhida é diferente da resolução nativa do monitor.',
  'O teclado responde na USB traseira, mas não pelo intermediário usado.',
  'O mouse funciona na USB traseira; a conexão anterior falha.',
  'Outro fone funciona; o teste isola a falha no acessório usado.',
  'O plugue não corresponde ao conector usado no painel frontal.',
  'A rede funciona com outro cabo ou porta; a conexão original falha.',
  'A conexão funciona mais perto do roteador, com a senha autorizada conferida.',
  'A unidade é detectada, mas seu sistema de arquivos não pode ser acessado.',
  'O painel da impressora indica uma condição física que impede a impressão.',
  'O aplicativo está usando uma câmera diferente da webcam conectada.',
  'A gravação do sistema funciona, mas o aplicativo está sem permissão ou entrada correta.',
  'As saídas disponíveis não atendem à montagem atual das duas telas.',
  'O relógio usa um fuso diferente do local configurado para a turma.',
  'Vários aplicativos desnecessários começam junto com o sistema.',
  'Um processo concentra o consumo; a verificação orienta corrigir esse aplicativo.',
  'Outros programas também falham; o problema não se limita a um aplicativo.',
  'A inicialização funciona ao retirar a mídia externa que estava interferindo.',
  'O endereço IP ou gateway não corresponde à configuração prevista pela rede.',
  'As quedas após inatividade estão relacionadas ao driver ou à economia de energia.',
  'A comparação isola problema no driver, na antena ou no adaptador Bluetooth.',
  'A revisão encontra muitos arquivos temporários e itens dispensáveis na lixeira.',
  'A revisão encontra uma extensão ou um programa indesejado.',
  'O solucionador oficial identifica uma correção para a atualização.',
  'O disco é detectado, mas a configuração ou o carregador de boot precisa de reparo.',
  'A montagem usa um conector incompatível com o tipo da unidade.',
  'A unidade tem partição saudável, mas está offline ou sem uma letra livre.',
  'Os acessórios funcionam atrás; o cabo USB interno frontal está solto.',
  'A comparação isola a falha no acessório ou no controlador USB.',
  'Um objeto ou apoio externo faz o gabinete vibrar.',
  'A temperatura sobe com tarefas desnecessárias e cai ao reduzir essa carga.',
  'Os eventos relacionam o desligamento a uma configuração ou comando específico.',
  'Os testes orientados indicam instabilidade na memória ou em outro componente.',
  'A saída ou o modo de exibição escolhido não funciona com a tela conectada.',
  'O sistema ou a placa não suporta toda a memória nesta configuração.',
  'A RAM instalada não atende às especificações suportadas pelo conjunto.',
  'A refrigeração funciona, mas o limite de leitura não corresponde à montagem.',
  'O padrão de bipes ou LED foi registrado. Falta consultar o manual deste modelo.',
  'Um conector de alimentação ATX ou CPU está incompleto.',
  'O erro acompanha o mesmo módulo, mesmo em parâmetros padrão.',
  'A falha de imagem acompanha a GPU ou a memória na comparação orientada.',
  'Os requisitos e ajustes do programa ultrapassam os limites do hardware.',
  'Com autorização para testar, a comparação identifica mau contato no cabo ou porta.',
  'Os registros e testes apontam uma causa confirmável no sistema, calor ou disco.',
  'A instabilidade persiste sem o perfil; o teste padrão exige investigar a memória.',
  'Um cabo ou conector necessário ficou desconectado durante a troca.',
  'A revisão encontra montagem ou configuração inadequada; ainda não condene a placa.'
];
benchCases.forEach((b,i)=>b.finding=findings[i]);
// Alguns testes levam a um encaminhamento, não a um reparo já comprovado.
const referrals={
  12:['Conferir proteção dos dados','Dados preservados; a unidade segue para recuperação ou preparação assistida.'],
  20:['Conferir encaminhamento','Falha geral registrada; o professor recebe o encaminhamento para testes de sistema e hardware.'],
  32:['Conferir encaminhamento USB','Falha isolada no acessório ou controlador; o reparo foi encaminhado com o resultado da comparação.'],
  41:['Conferir registro do código','Código e modelo registrados; o manual foi consultado para orientar a continuação do diagnóstico.'],
  44:['Conferir peça encaminhada','Falha de imagem isolada na comparação; a peça segue para reparo ou substituição assistida.'],
  48:['Conferir teste encaminhado','Falha em parâmetros padrão registrada; o próximo atendimento fará o teste orientado da memória.']
};
for(const [id,[check,outcome]] of Object.entries(referrals))Object.assign(benchCases[Number(id)-1],{check,outcome,referral:true});
export const checkedOutcome=c=>benchFor(c).outcome||c.confirm;
export const actionSafety=c=>[12,21,25,28,29,30,46,47].includes(c.id)?'Preserve os dados antes de reparar ou preparar uma unidade.':c.level>=4||[1,9,17].includes(c.id)?'Intervenção interna: professor, PC desligado e fora da tomada.':'Use apenas configurações e conexões autorizadas pelo professor.';
export const benchFor=c=>benchCases[c.id-1];
export const candidateFixes=c=>[...new Set([(c.id-1)%c.steps.length,0,1,2])].slice(0,3);
export function focusPart(c,index){
  const text=(c.steps[index]?.slice(0,2).join(' ')||'').toLowerCase();
  if(/tomada|fonte|alimentação|atx/.test(text))return 'power';
  if(/\bram\b|memória|módulo|\bddr\b/.test(text))return 'ram';
  if(/cooler|ventoinha|calor|temperatura|refrigeração/.test(text))return 'fan';
  if(/cabo|conector|encaixe|header|porta/.test(text))return 'cable';
  if(/disco|unidade|armazenamento|backup/.test(text))return 'drive';
  if(/mouse|teclado|fone|microfone|câmera|impressora/.test(text))return 'peripheral';
  return 'screen';
}
// Falha de autoria é detectada no build/testes, sem substituir conteúdo por rótulos genéricos.
if(benchCases.length!==cases.length||benchCases.some((b,i)=>!b.finding||b.actions.length!==cases[i].steps.length||b.actions.some(a=>!a.test||!a.fix||!a.normal)))throw Error('Conteúdo da bancada incompleto.');
