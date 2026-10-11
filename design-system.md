# Boom Design System

Versão 2.1 · Paleta Pantone (creme P 15-2 C, ameixa P 95-16 C, laranja P 30-8 C) · Rede social de círculos pequenos · Dark-first, com tema claro

Este documento reúne o contexto estratégico do Boom e o sistema visual em um só lugar. Ele serve de fonte única para produto, design e código: todo valor visual existe como token, e todo componente novo deve usar os tokens, nunca valores soltos.

**Stack assumida:** React 19 + TypeScript, CSS, shadcn/ui como base, Lucide React para ícones, Framer Motion para animação, React Hook Form + Zod para formulários. Interface em português do Brasil (pt-BR).

---

## 1. Produto e fundamentos

### 1.1 Missão

O Boom é uma plataforma social focada em **pertencimento, intimidade em escala e atenção respeitada**.

As redes atuais foram feitas para segurar a atenção o máximo possível, estimular exposição pública e comparação. Muita gente sai do feed mais isolada do que entrou. O Boom responde ao desejo de pertencimento sem barulho: círculos pequenos e intencionais onde as pessoas compartilham o processo, a presença e a vida real, não só os destaques. A ideia é trocar a pressão de postar para uma plateia pelo gosto simples de ser conhecido por poucas pessoas.

**Slogan:** "Boom boom".

### 1.2 Público e o que isso muda no design

**Persona principal: Alex, 28 a 38 anos.** Profissional criativo ou trabalhador do conhecimento (designer, escritor, professor, criador independente, trabalhador remoto). Interesses: fotografia, culinária, leitura, hobbies calmos, caminhadas no bairro e desenvolvimento pessoal. Alex quer menos conexões, mas melhores, e um espaço que respeite sua atenção e energia emocional.

| O que Alex sente | Decisão de design |
|---|---|
| Cansaço de feeds algorítmicos | Fogueira cronológica, sem recomendação, com fim de feed |
| Interações rasas | A reação principal é uma resposta curta em texto ou voz, sem contador de curtidas |
| Medo de mostrar trabalho imperfeito | Círculos pequenos, sem métricas públicas, sem filtros de desempenho, rascunho salvo automaticamente |
| Dificuldade de transformar conhecidos em apoio real | Círculos de 12 a 15 pessoas e a Brasa, que devolve ao autor como a contribuição foi recebida |
| Quer menos conexões, melhores | Limite de membros por círculo e plano gratuito com 2 círculos |

### 1.3 Produto e vocabulário

**Fogueiras de Círculo** são o diferencial do Boom. As pessoas entram em Círculos pequenos (máximo padrão de 12 a 15 pessoas), formados em torno de um interesse, um lugar ou uma intenção comum. Dentro de cada Círculo há uma Fogueira permanente: um espaço privado e cronológico com postagens visuais curtas, mensagens de voz assíncronas e, se quiserem, sessões de áudio ao vivo.

| Termo | O que é | Na interface |
|---|---|---|
| **Círculo** | Grupo pequeno em torno de interesse, lugar ou intenção. Privado, só por convite ou de visibilidade moderada (fácil de achar, mas não público). | Cabeçalho do Círculo, card em Descobrir |
| **Fogueira** | Espaço permanente, privado e cronológico dentro do Círculo. | Coluna central, lista de faíscas |
| **Faísca** | Postagem curta: foto com legenda ou mensagem de voz. | Item da Fogueira |
| **Calor** | Reação principal: uma resposta curta em texto ou voz. | Botão "Enviar calor" |
| **Brasa** | Resumo leve que o autor recebe depois, mostrando como a faísca mexeu com o círculo. | Card dispensável no topo da Fogueira |
| **Anfitrião** | Pessoa que cria e conduz um Círculo. | Selo no perfil, ferramentas opcionais |
| **Hearth+** | Assinatura do Boom. | Aviso de upgrade, Configurações |

**Ciclo de engajamento:** a pessoa compartilha uma faísca, os outros respondem com calor, as respostas e as novas faíscas formam um fio de história compartilhada, e a brasa devolve ao autor um resumo leve. Isso estimula o próximo compartilhamento autêntico. O ciclo valoriza presença e reciprocidade, não viralidade.

**Monetização e o que ela exige da interface**

| Plano | O que inclui | Regra de interface |
|---|---|---|
| Gratuito | 2 Círculos ativos e ferramentas básicas | O básico nunca é bloqueado nem escondido |
| Hearth+ | Círculos ilimitados, recursos avançados de voz, acesso offline, suporte prioritário | O convite aparece só ao atingir o limite e em Configurações |
| Ferramentas de Anfitrião (pago, opcional) | Agendamento, análises simples, micro-workshops pagos e encontros locais com divisão transparente de taxas | Ficam na área do Anfitrião, nunca na Fogueira |

Sem anúncios no feed e sem venda de dados pessoais. Nenhuma tela reserva espaço para anúncio.

### 1.4 Conceito visual: noite à luz da fogueira

O contexto original pedia minimalismo orgânico, tons quentes e táteis, superfícies que lembram papel e luz suave, e uma sensação calma e convidativa, nunca fria ou clínica. O sistema traduz isso assim:

| Conceito do contexto | Como aparece aqui |
|---|---|
| Calmo, convidativo, bastante espaço em branco | Espaçamento generoso e poucos elementos por tela |
| Papel e luz suave | Tema claro com fundo `#F8F0E2`. No tema escuro, o creme é a luz que ilumina uma noite ameixa |
| Cantos arredondados, sombras leves | `rounded-xl` e pílulas. Sombras só no tema claro e bem suaves |
| Microinterações lentas e deliberadas | Seção 9 |
| Ícones de traço fino, pontas suaves | Seção 6 |
| Tom de voz de amigo de confiança | Seção 11 |
| Paleta terracota, creme e sálvia, com Fraunces e Inter | **Substituída** pela paleta Pantone (ameixa P 95-16 C, laranja P 30-8 C, creme P 15-2 C) e pela Gloucester. Preservados: o verde-sálvia `#7A9E7E` como cor de sucesso, o Inter no corpo e a Fraunces como alternativa de display |

### 1.5 O que extraímos da imagem de referência

A referência é uma interface escura de três colunas, com navegação lateral, feed editorial e painel lateral de tendências.

| Na referência | Padrão | No Boom |
|---|---|---|
| Fundo quase preto, texto claro | Dark-first | Ameixa noturna, texto creme |
| Sidebar com item ativo em pílula colorida | Navegação em pílula | Pílula ameixa `#32004B` com texto creme |
| Botões pílula saturados ("Buy & Sell") | CTA arredondado total | Pílula laranja `#F37121` |
| Colunas separadas por linhas finas | Estrutura por hairline | Fogueira em linhas separadas por borda |
| Painel "Top Movers" com variação ▲ verde / ▼ vermelho | Lista com variação | **Não adotado como ranking.** Vira "Seus círculos", com ponto de novidade e sem comparação |
| Feed com miniatura 16:9 à esquerda, fonte, título, trecho de 3 linhas | Card editorial horizontal | Card de Círculo na tela Descobrir |
| Linha de ações com coração, contagem e compartilhar | Barra de ações | Enviar calor, sem contagem |
| Ilustrações chapadas, formas geométricas, pontos ligados por linhas finas | Ilustração flat | Capas de Círculo e estados vazios |
| Barra de progresso "2/4" e checklist | Onboarding | "Comece seu primeiro círculo" |
| Card de convite na base da sidebar | Promo discreta | "Convide alguém" para o Círculo |
| Rodapé mínimo com links e seletor de idioma | Footer utilitário | Mantido |

### 1.6 Princípios

1. **Pertencimento sem barulho.** Sem contadores públicos de reação, sem rankings, sem tendências, sem comparação entre pessoas.
2. **Noite à luz da fogueira.** Fundo ameixa, creme como luz, laranja como brasa.
3. **Uma brasa por tela.** O laranja é reservado à ação principal, ao Calor enviado e ao ponto de aviso. Se tudo é laranja, nada acende.
4. **Ritmo lento.** Movimento gradual e deliberado. Nada pisca, nada pressiona.
5. **Tipografia com voz.** A Gloucester aparece só em títulos grandes. A leitura do dia a dia acontece em uma sans legível.
6. **Atenção respeitada.** A Fogueira tem fim, as notificações não criam urgência e não há anúncios.

---

## 2. Cores

### 2.1 Paleta de marca

| Nome | Hex | Papel |
|---|---|---|
| **Ameixa Boom** | `#32004B` | Pantone P 95-16 C. Estrutura da marca: item ativo, avatar padrão, botão secundário, ring no tema claro, texto sobre o primário |
| **Laranja Boom** | `#F37121` | Pantone P 30-8 C. Ação principal, Calor enviado e ponto de aviso (a "brasa") |
| **Creme Boom** | `#EED9B7` | Pantone P 15-2 C. Texto no tema escuro, destaque e hover no tema claro, foco no tema escuro |

### 2.2 Escalas derivadas

Use as escalas para estados (hover, pressed) e ilustrações. Em interface, prefira sempre os tokens semânticos da seção 2.4.

**Ameixa**

| 50 | 100 | 200 | 300 | 400 | **500** | 600 | 700 | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|
| `#F1EDF2` | `#E0D9E4` | `#C6B8CD` | `#A38CAE` | `#7A598A` | **`#32004B`** | `#2C0041` | `#250038` | `#1F002E` | `#180025` | `#150020` |

**Laranja**

| 50 | 100 | 200 | 300 | 400 | **500** | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#FEF5EF` | `#FDEADE` | `#FBD4BC` | `#F9BB94` | `#F79C64` | **`#F37121`** | `#DD651B` | `#C95A15` | `#B04C0F` | `#983F08` |

**Creme**

| 50 | 100 | **200** | 300 | 400 | 500 |
|---|---|---|---|---|---|
| `#F8F0E2` | `#F4E6D0` | **`#EED9B7`** | `#DAC6A5` | `#C6B393` | `#B2A080` |

### 2.3 Superfícies do tema escuro

O fundo escuro é um ameixa mais profundo que a marca, para que o `#32004B` apareça como destaque sobre ele.

| Camada | Hex | Uso |
|---|---|---|
| Fundo | `#200031` | Página |
| Superfície | `#27003A` | Cards, composer, painéis |
| Elevada | `#2C0042` | Menus, popovers, hover de linha, chips |
| Borda | `#4B2F5E` | Divisores e contornos decorativos |
| Borda forte | `#7A598A` | Contorno de input e controles (3,3:1 sobre o fundo) |

### 2.4 Tokens semânticos

| Token | Escuro (padrão) | Claro | Uso |
|---|---|---|---|
| `background` | `#200031` | `#F8F0E2` | Fundo da página |
| `foreground` | `#EED9B7` | `#200031` | Texto principal |
| `card` | `#27003A` | `#FFFFFF` | Superfícies |
| `popover` | `#2C0042` | `#FFFFFF` | Menus, diálogos |
| `muted` | `#2C0042` | `#F4E6D0` | Hover, chips, skeleton |
| `muted-foreground` | `#DAC6A6` | `#5A4A68` | Texto secundário |
| `subtle` | `#C6B393` | `#7A598A` | Metadados (data, @handle) |
| `primary` | `#F37121` | `#F37121` | Botão principal, Calor enviado, ponto de aviso |
| `primary-hover` | `#DD651B` | `#DD651B` | Hover do primário |
| `primary-foreground` | `#32004B` | `#32004B` | Texto sobre o primário (ameixa sobre laranja: 5,8:1; branco reprova com 2,9:1) |
| `secondary` | `#32004B` | `#32004B` | Pílula ativa, botão secundário |
| `secondary-foreground` | `#EED9B7` | `#EED9B7` | Texto sobre o secundário |
| `accent` | `#EED9B7` | `#EED9B7` | Botão inverso, chip selecionado, progresso |
| `accent-foreground` | `#200031` | `#200031` | Texto sobre o accent |
| `border` | `#4B2F5E` | `#DAC6A5` | Divisores |
| `input` | `#7A598A` | `#8A7A5C` | Contorno de campos |
| `ring` | `#EED9B7` | `#32004B` | Anel de foco |
| `link` | `#F69458` | `#B04C0F` | Links e ações de texto |
| `destructive` | `#942626` | `#942626` | Fundo do botão destrutivo |
| `destructive-foreground` | `#FFFFFF` | `#FFFFFF` | Texto sobre o destrutivo |
| `danger` | `#E87979` | `#A8321F` | Texto e ícone de erro |
| `success` | `#7A9E7E` | `#3F6B47` | Sucesso, presença (ao vivo) |
| `warning` | `#F2B632` | `#8A5B00` | Aviso |

### 2.5 Regras de uso

**Proporção por tela (aproximada)**

- Tema escuro: ~85% camadas ameixa escuras, ~12% creme (texto e destaques), ≤3% laranja.
- Tema claro: ~60% creme claro e branco, ~30% ameixa (texto e estrutura), ≤10% laranja.

**Combinações aprovadas**

- Texto creme sobre qualquer superfície escura.
- Texto ameixa `#32004B` sobre laranja `#F37121` (5,8:1; 4,8:1 no hover). É a única combinação sobre o primário — branco sobre laranja reprova (2,9:1).
- Texto creme sobre ameixa `#32004B`.
- Texto ameixa-escuro `#200031` sobre creme.
- Laranja como texto no escuro: use `#F69458` (token `link`), nunca `#F37121`.

**Proibido**

- Ameixa `#32004B` como texto ou borda sobre o fundo escuro (contraste 1,7:1). Ela é sempre um preenchimento com texto creme por cima.
- Mais de um botão laranja preenchido visível por tela. O ponto de aviso de 10px e o ícone de Calor enviado não contam como botão.
- Laranja usado como cor de erro sozinho. Erro leva ícone, texto e borda, nunca só cor.
- Gradientes decorativos.

**Laranja de ação e laranja de erro**

Como o primário já é laranja, o botão destrutivo usa o tom avermelhado `#942626`, aparece só dentro de diálogo de confirmação e sempre leva o ícone `Trash2` ou equivalente e o verbo da ação ("Excluir faísca").

### 2.6 Contraste (WCAG 2.1)

| Par | Razão | Resultado |
|---|---|---|
| Creme `#EED9B7` sobre fundo `#200031` | 13,8:1 | AAA |
| Creme sobre superfície `#27003A` | 13,3:1 | AAA |
| Creme sobre elevada `#2C0042` | 12,9:1 | AAA |
| `muted-foreground` `#DAC6A6` sobre fundo | 11,4:1 | AAA |
| `subtle` `#C6B393` sobre superfície | 9,0:1 | AAA |
| Ameixa `#32004B` sobre laranja `#F37121` | 5,8:1 | AA |
| Ameixa sobre laranja hover `#DD651B` | 4,8:1 | AA |
| Creme sobre ameixa `#32004B` | 12,3:1 | AAA |
| Ameixa-escuro `#200031` sobre creme `#EED9B7` | 13,8:1 | AAA |
| `link` `#F69458` sobre fundo escuro | 8,4:1 | AA |
| `foreground` claro `#200031` sobre `#F8F0E2` | 16,8:1 | AAA |
| `muted-foreground` claro `#5A4A68` sobre `#F8F0E2` | 7,1:1 | AA |
| `link` claro `#B04C0F` sobre `#F8F0E2` | 4,8:1 | AA |
| Sálvia `#7A9E7E` sobre fundo escuro `#200031` | 6,4:1 | AA |
| Sálvia `#7A9E7E` sobre superfície `#27003A` | 5,8:1 | AA |
| `success` claro `#3F6B47` sobre `#F8F0E2` | 5,5:1 | AA |
| `input` escuro `#7A598A` sobre fundo | 3,3:1 | AA para componentes de UI |
| `input` claro `#8A7A5C` sobre `#F8F0E2` | 3,7:1 | AA para componentes de UI |

### 2.7 Status

Sálvia e âmbar não fazem parte da marca. Eles existem só para status, nunca para decoração, e vêm sempre com ícone ou texto. A sálvia `#7A9E7E` vem do contexto original do Boom.

- **Sucesso e presença:** `success` (sálvia), com `CheckCircle2` ou o texto "Ao vivo".
- **Erro:** `danger`, com `AlertCircle`.
- **Aviso:** `warning`, com `AlertTriangle`.

O Boom não mostra variações positivas ou negativas nem rankings, então não existe cor de "alta" ou de "queda".

---

## 3. Tipografia

### 3.1 Famílias

| Papel | Fonte | Observação |
|---|---|---|
| **Display** | Gloucester MT Extra Condensed | Serifada condensada, de alto impacto. Só em títulos grandes. |
| **Interface e texto** | Inter | Boa legibilidade em tamanhos pequenos, fonte variável e neutra o bastante para não competir com o conteúdo. |

**Licença.** A Gloucester MT Extra Condensed é uma fonte comercial da Monotype. Para uso na web, é preciso uma licença de webfont. Sem ela, o projeto usa o fallback abaixo e continua consistente.

**Pilha do display**

```
"Gloucester MT Extra Condensed", "Libre Caslon Condensed", Georgia, serif
```

**Alternativas gratuitas** (a Gloucester é opcional, o sistema não depende dela):

| Fonte | Quando escolher |
|---|---|
| **Libre Caslon Condensed** (700) | Fallback padrão. Mantém o espírito de serifa condensada. Confirme o nome do export no `next/font/google`. |
| **Fraunces** (600) | Direção tipográfica do contexto original: serifa suave e calorosa. Não é condensada, então desça um degrau na escala display (por exemplo `display-lg` → `display-md`) e use tracking `-0.01em`. |
| **Anton** | Se quiser mais impacto e menos charme clássico. É sans condensada pesada. |
| **Sofia Sans Extra Condensed** (800–900) | Se quiser o mesmo grau de condensação da Gloucester, em sans. |

### 3.2 Regras do display

- Só a partir de **28px**. Abaixo disso a extra condensada perde legibilidade.
- Máximo de 2 linhas. Alinhado à esquerda.
- Nunca em botões, labels, campos, menus ou texto corrido.
- Peso único (regular da fonte). Não simule negrito.
- Tracking `0` em tamanhos grandes e `+0.01em` entre 28 e 36px.
- Onde usar: wordmark, saudação do dia, nome do Círculo, título de página, título do painel lateral ("Seus círculos"), título de estado vazio.

### 3.3 Escala

| Token | Fonte | Tamanho / linha | Peso | Uso |
|---|---|---|---|---|
| `display-2xl` | Display | 80 / 80 | 400 | Hero de landing, onboarding |
| `display-xl` | Display | 64 / 64 | 400 | Saudação do dia ("Boa noite, Alex") |
| `display-lg` | Display | 48 / 48 | 400 | Título de página (Descobrir, Perfil) |
| `display-md` | Display | 36 / 38 | 400 | Nome do Círculo, checklist, estado vazio |
| `display-sm` | Display | 28 / 30 | 400 | Título do painel lateral |
| `heading-lg` | Inter | 24 / 32 | 700 | Título de diálogo |
| `heading-md` | Inter | 20 / 28 | 600 | Título da topbar, subtítulos |
| `heading-sm` | Inter | 18 / 26 | 700 | Título de card, nome do Círculo em lista |
| `body` | Inter | 16 / 26 | 400 | Legenda de faísca e resposta |
| `body-medium` | Inter | 16 / 24 | 500 | Item de navegação, botão |
| `body-sm` | Inter | 14 / 22 | 400 | Texto secundário, trecho |
| `label` | Inter | 14 / 20 | 500 | Rótulo de campo, ação |
| `caption` | Inter | 12 / 16 | 500 | Chip, selo, contador pequeno |

**Regras gerais**

- Texto corrido com no máximo ~70 caracteres por linha (`max-w-[65ch]` na legenda da faísca).
- Números em listas e contadores (lugares do Círculo, passos, duração de voz) usam `tabular-nums`.
- Rótulos e chips em sentence case. Sem caixa alta, sem tracking aberto.
- Hierarquia de headings respeitada (`h1 > h2 > h3`). O estilo visual não decide o nível semântico.

### 3.4 Datas e durações (pt-BR)

```ts
// Tempo relativo: "agora", "há 5 min", "há 2 h", "ontem, 19:40", "16 de jan."
// Duração de voz: "0:42" (tabular-nums)
```

Não há contadores de reação para formatar. Onde houver números (lugares do Círculo, passos do onboarding), use `tabular-nums`.

---

## 4. Layout e espaçamento

### 4.1 Espaçamento

Base de **4px**, escala padrão do Tailwind.

| Contexto | Valor |
|---|---|
| Entre ícone e texto | `gap-2` (8px) a `gap-3` (12px) |
| Padding de faísca | `px-4 py-5` (mobile), `px-6 py-6` (md+), com respiro generoso |
| Padding de card / painel | `p-4` a `p-6` |
| Gap entre itens de lista | `gap-3` ou `gap-4` |
| Margem entre seções | `my-8` a `my-12` |

### 4.2 Estrutura em três colunas (desktop)

As colunas são separadas por linhas de 1px (`border-border`), sem espaço entre elas, como na referência.

```
┌──────────────┬────────────────────────────┬──────────────────┐
│ SIDEBAR      │ Cabeçalho do Círculo       │ RAIL             │
│ 264px        │ Leitura de domingo · 9/12  │ 336px            │
│              ├────────────────────────────┤                  │
│ Logo         │ Composer                   │ Comece seu       │
│ Início       ├────────────────────────────┤ primeiro círculo │
│ Círculos     │ Faísca                     │ 2/4              │
│ Descobrir    ├────────────────────────────┤                  │
│ Avisos       │ Faísca (voz)               │ Seus círculos    │
│ Perfil       ├────────────────────────────┤  Leitura    ●    │
│              │ Faísca                     │  Cozinha         │
│ [Convide     ├────────────────────────────┤                  │
│  alguém]     │ Você viu tudo por hoje     │ Rodapé           │
└──────────────┴────────────────────────────┴──────────────────┘
```

A Fogueira ocupa a coluna central, com no máximo 640px. Todo conteúdo é alinhado à esquerda.

### 4.3 Breakpoints

Usamos os breakpoints padrão do Tailwind, mobile-first.

| Faixa | Layout |
|---|---|
| `< md` (< 768px) | Feed em tela cheia. Topbar de 56px (logo, avisos, avatar). Barra inferior de 64px + safe area. |
| `md` (768 a 1023px) | Sidebar compacta de 72px (só ícones) + feed. |
| `lg` (1024 a 1279px) | Sidebar de 264px + feed. |
| `xl` (≥ 1280px) | Sidebar + feed + painel lateral de 336px. |

**Barra inferior (mobile)**

```
┌──────────────────────────────────────────┐
│  Início  Círculos   (+)  Descobrir Perfil │
└──────────────────────────────────────────┘
                      ↑ botão circular laranja 48px, "Nova faísca"
```

Avisos fica no sino da topbar.

- Alvos de toque mínimos de **44 × 44px**.
- Conteúdo com `pb-[calc(64px+env(safe-area-inset-bottom))]` para não ficar sob a barra.

### 4.4 Grade de mídia

| Tipo | Proporção | Raio |
|---|---|---|
| Capa de Círculo (card em Descobrir) | 16:9 | `rounded-lg` |
| Foto em faísca | livre, entre 4:5 e 16:9, `max-h-[560px]` | `rounded-xl` |
| Várias imagens (2 a 4) | grade 2 colunas com gap de 2px | `rounded-xl` no conjunto |
| Avatar | 1:1 | `rounded-full` |

---

## 5. Forma: raio, borda e elevação

### 5.1 Raio

| Elemento | Classe |
|---|---|
| Botões, itens de navegação, chips de filtro, avatar, badges | `rounded-full` |
| Chips de categoria (rótulo estático) | `rounded-md` |
| Campos de texto, selects | `rounded-xl` |
| Cards, painéis, diálogos, menus | `rounded-xl` |
| Mídia (miniaturas, imagens) | `rounded-lg` a `rounded-xl` |

Os botões em pílula seguem a referência e são a exceção deliberada ao raio `rounded-lg` padrão dos botões. Nenhum elemento visível usa `rounded-none`.

### 5.2 Bordas

- Divisores: `border-border`, 1px.
- Campos e controles: `border-input`, 1px. Foco: `ring-2 ring-ring`.
- A Fogueira é uma lista de faíscas separadas por borda. Cards só aparecem para conteúdo destacado (Brasa, convite, onboarding, aviso de upgrade, card de Círculo).

### 5.3 Elevação

| Nível | Tema escuro | Tema claro |
|---|---|---|
| Página | `background` | `background` |
| Superfície | `card` + borda | `card` + borda |
| Menu / popover | `popover` + borda, sem sombra | `popover` + sombra `0 12px 32px rgb(18 28 53 / 0.18)` |
| Diálogo | `popover` + borda + scrim | idem + sombra acima |
| Scrim | `rgb(var(--background) / 0.8)` | `rgb(var(--foreground) / 0.5)` |

No escuro, a profundidade vem do degrau de cor entre camadas e da borda. Sombras só no tema claro.

---

## 6. Iconografia e o símbolo Burst

### 6.1 Ícones

- **Biblioteca:** Lucide React. Nunca emoji como ícone funcional.
- **Traço:** fino e com pontas suaves. `strokeWidth={1.5}`, `strokeLinecap="round"`, `strokeLinejoin="round"`, sem cantos vivos. `size` 20 (inline), 24 (navegação), 16 (dentro de chip).
- **Cor:** herda `currentColor`.
- **Ícone sem texto sempre leva `aria-label`.**

| Função | Ícone Lucide |
|---|---|
| Início | `Home` |
| Círculos | `Users` |
| Descobrir | `Compass` |
| Avisos | `Bell` |
| Perfil | `User` |
| Calor | `Flame` |
| Foto | `Image` |
| Voz | `Mic` / `MicOff` |
| Tocar / pausar | `Play` / `Pause` |
| Convidar | `UserPlus` |
| Privado / por convite / fácil de achar | `Lock` / `Mail` / `Eye` |
| Mais opções | `MoreVertical` |
| Fechar | `X` |
| Carregando | `Loader2` com `animate-spin` |

### 6.2 Burst

O **Burst** é o símbolo da marca: uma estrela de 12 pontas que representa o estouro e a faísca. Ele é a base do logo, do botão **Nova faísca**, do card de Brasa e do estado vazio. O Calor usa o ícone `Flame`.

```svg
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M12.00 1.00 L13.86 5.05 L17.50 2.47 L17.09 6.91 L21.53 6.50 L18.95 10.14 L23.00 12.00 L18.95 13.86 L21.53 17.50 L17.09 17.09 L17.50 21.53 L13.86 18.95 L12.00 23.00 L10.14 18.95 L6.50 21.53 L6.91 17.09 L2.47 17.50 L5.05 13.86 L1.00 12.00 L5.05 10.14 L2.47 6.50 L6.91 6.91 L6.50 2.47 L10.14 5.05Z"
        fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
```

O traço de 1,5 com junção arredondada, na mesma cor do preenchimento, suaviza as pontas, em linha com a regra de ícones sem cantos vivos.

| Uso | Aparência |
|---|---|
| Logo | Burst creme com a palavra "Boom" em Gloucester ao lado |
| Botão Nova faísca (mobile) | Burst branco sobre círculo `primary` de 48px |
| Card de Brasa | Burst de 20px em `link` |
| Estado vazio e fim da Fogueira | Burst de 32px em `muted-foreground` |
| Avatar oficial do Boom | Burst creme sobre círculo laranja |

Uso restrito: o Burst não é textura, padrão de fundo nem decoração de botões.

---

## 7. Ilustração e mídia

O estilo vem da referência: formas chapadas e geométricas, fundo de cor sólida, volumes simples em duas ou três cores, e pontos conectados por linhas finas como detalhe.

**Paleta de ilustração**

| Cor | Hex | Uso |
|---|---|---|
| Ameixa | `#32004B` | Fundo chapado principal |
| Laranja | `#F37121` | Ponto focal (um por ilustração) |
| Creme | `#EED9B7` | Formas de luz e destaque |
| Tinta | `#200031` | Sombras chapadas e fundo escuro |
| Branco | `#FFFFFF` | Contornos e detalhes finos |
| Apoio | `#7A9E7E`, `#F2B632` | No máximo 5% da área, só detalhes |

**Regras**

- Sem degradês, sem sombras suaves, sem texturas.
- Cada ilustração tem um ponto focal em laranja.
- Linhas finas de 1,5px e pontos de 6 a 8px conectam elementos.
- Capas de Círculo: 16:9 em Descobrir e quadrada com `rounded-xl` como avatar do Círculo. Fundo chapado de ameixa, creme ou tinta, nunca foto stock genérica.
- Motivos: fogueira, brasa, círculos concêntricos, mãos e objetos dos hobbies (câmera, livro, panela, mochila).
- As fotos das faíscas são sempre as das pessoas, sem filtro nem moldura aplicados pelo app.
- Avatares sem foto usam iniciais em creme sobre `bg-secondary`.

---

## 8. Componentes

Os exemplos usam classes Tailwind com os tokens da seção 12.

### 8.1 Botão

| Variante | Classes principais | Quando usar |
|---|---|---|
| **Primário** | `bg-primary text-primary-foreground hover:bg-primary-hover` | Ação principal da tela (Compartilhar, Entrar, Enviar calor no campo de resposta) |
| **Secundário** | `bg-secondary text-secondary-foreground hover:bg-secondary/80` | Ação de apoio (Entrar na sessão ao vivo) |
| **Inverso** | `bg-accent text-accent-foreground hover:bg-accent/90` | Ação principal em fundo escuro quando o laranja já foi usado |
| **Outline** | `border border-input bg-transparent hover:bg-muted` | Ações neutras (Convidar, Pedir para entrar) |
| **Ghost** | `hover:bg-muted` | Ações de barra (Enviar calor) |
| **Destrutivo** | `bg-destructive text-destructive-foreground` | Só em diálogo de confirmação |
| **Link** | `text-link underline-offset-4 hover:underline` | Ações de texto ("Ver todos") |

```tsx
<Button className="h-11 rounded-full bg-primary px-5 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover md:h-10">
  Compartilhar
</Button>
```

**Tamanhos:** `sm` h-8 (só desktop), `md` h-10, `lg` h-12. No mobile, o mínimo é `h-11` (44px).

**Estados**

- Hover: ver tabela acima. Pressed: `active:scale-[0.98]`.
- Foco: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`.
- Desabilitado: `disabled:opacity-50 disabled:pointer-events-none`.
- Carregando: `Loader2` à esquerda do rótulo, largura do botão preservada, `aria-busy="true"`.

**Botão de ícone:** círculo de 44px, `bg-muted`, ícone 20px, igual aos botões de sino e grade da referência.

### 8.2 Navegação

**Sidebar (desktop).** Itens: Início, Círculos, Descobrir, Avisos, Perfil.

```tsx
<a
  aria-current={active ? "page" : undefined}
  className={cn(
    "flex h-12 items-center gap-3 rounded-full px-4 text-base font-medium transition-colors",
    active
      ? "bg-secondary font-semibold text-secondary-foreground"
      : "text-foreground hover:bg-muted"
  )}
>
  <Icon className="size-6" aria-hidden /> Início
</a>
```

- Selo "Novo": `rounded-full bg-accent px-2 text-xs font-semibold text-accent-foreground`.
- Na sidebar compacta (md), só o ícone, com tooltip e `aria-label`.
- **Card "Convide alguém"** na base da sidebar: `rounded-xl bg-muted p-4`, ícone `UserPlus`, título `label` e legenda `caption` em `muted-foreground` ("Círculos crescem por convite").

**Barra inferior (mobile).** Início, Círculos, botão central **Nova faísca**, Descobrir, Perfil. Avisos fica na topbar. O botão central é um círculo de 48px em `bg-primary` com o Burst em branco.

### 8.3 Cabeçalho do Círculo

```
┌──────────────────────────────────────────────────────┐
│ Leitura de domingo                                    │
│ Livros, trechos e o que estamos lendo esta semana.    │
│ (av)(av)(av)(av)(av)  9 de 12 lugares   [Convidar]    │
│ [Privado]                                             │
│ Fogueira · Membros · Sobre                            │
└──────────────────────────────────────────────────────┘
```

- Nome em `display-md`. Descrição em `body-sm`, `text-muted-foreground`, até 2 linhas.
- Chip de visibilidade: **Privado** (`Lock`), **Só por convite** (`Mail`) ou **Fácil de achar** (`Eye`).
- Pilha com até 5 avatares de 32px e o texto "9 de 12 lugares". Não há contagem de seguidores nem de alcance.
- Anfitrião recebe o selo "Anfitrião" (`rounded-md bg-muted caption`) na lista de membros.

### 8.4 Faísca

Uma linha da Fogueira, separada da próxima por `border-b border-border`. A ordem é sempre cronológica.

```
┌────────────────────────────────────────────────────┐
│ (avatar 40)  Maya                  ontem, 19:40  ⋮ │
│              Primeira tentativa de pão de          │
│              centeio. Ficou denso, mas cheiroso.   │
│              ┌──────────────────────────────┐      │
│              │  foto (rounded-xl)           │      │
│              └──────────────────────────────┘      │
│              [Enviar calor]                        │
│              (av)(av)  Léo e mais 2 enviaram calor │
│              Respostas curtas aparecem aqui        │
└────────────────────────────────────────────────────┘
```

| Parte | Especificação |
|---|---|
| Avatar | 40px, coluna própria, conteúdo recuado com `pl-3` |
| Nome | `body-medium` semibold, `text-foreground` |
| Tempo | `body-sm`, `text-subtle`. Formato "há 2 h" ou "ontem, 19:40" |
| Legenda | `body`, `text-foreground`, `max-w-[65ch]`, até 280 caracteres |
| Mídia | `mt-3`, `rounded-xl`, `border border-border`, sem filtro aplicado pelo app |
| Voz | Player de voz (8.6) no lugar da foto, ou junto dela |
| Padding | `px-4 py-5` no mobile, `px-6 py-6` em `md+` |
| Quem enviou calor | Pilha de até 3 avatares de 20px + "Léo e mais 2 enviaram calor" em `body-sm muted-foreground` |
| Respostas | Até 2 visíveis, em ordem cronológica. "Ver as outras 4 respostas" em `text-link` |

Faíscas não têm contagem numérica de reações, botão de compartilhar para fora do Círculo nem ordenação por engajamento.

### 8.5 Calor

O Calor é uma resposta, não um toque. Para enviar calor, a pessoa escreve ou grava algo curto.

```
[Enviar calor]                       (ghost, ícone Flame)
┌──────────────────────────────────────────────┐
│ Escreva algo curto para a Maya               │
│                                              │
│ [Mic]                     212 / 240   [Enviar calor] │
└──────────────────────────────────────────────┘
```

- **Botão:** ghost com `Flame` 20px e rótulo "Enviar calor" sempre visível. `aria-expanded` e `aria-controls` apontam para o campo.
- **Campo:** abre embaixo da faísca em 280ms. `textarea` `rounded-xl`, até 240 caracteres. O botão de microfone grava até 60 s.
- **Enviar:** botão primário "Enviar calor". Esc fecha o campo e mantém o rascunho.
- **Depois de enviado:** o `Flame` fica preenchido em `primary` e o rótulo muda para "Você enviou calor". A resposta aparece no fio.
- Sem contador de calor e sem animação de contagem.

### 8.6 Player de voz

```
( ▶ )  ▁▂▅▇▅▃▂▁▂▄▆▄▂▁▂▃▅▃▂  0:42
```

- Container `rounded-full bg-muted px-3 py-2`, `max-w-[360px]`.
- Botão de play: círculo de 40px, `bg-secondary text-secondary-foreground`, ícones `Play` e `Pause` de 18px.
- Forma de onda: 32 barras de 3px com gap de 2px, `rounded-full`, altura máxima de 28px. Parte já tocada em `foreground`, o resto em `muted-foreground`.
- Duração em `caption tabular-nums`. Velocidade 1×, 1,5×, 2× em chip opcional.
- Acessibilidade: `role="group"` com `aria-label="Mensagem de voz de Maya, 42 segundos"`, posição controlável por `role="slider"` e link "Mostrar transcrição" quando houver.
- **Gravando:** ponto em `primary` com pulso de 2,4 s, tempo corrido em `tabular-nums` e botões "Cancelar" e "Parar".

### 8.7 Brasa

O resumo leve que o autor recebe depois de compartilhar.

```
┌────────────────────────────────────────────────────┐
│ ✺  Sua faísca aqueceu o círculo                  × │
│    Maya, Léo e mais 4 pessoas responderam.         │
│    Duas delas em voz.                [Ver respostas] │
└────────────────────────────────────────────────────┘
```

- Card `rounded-xl bg-muted p-4 md:p-5`. Burst de 20px em `text-link`, título `heading-sm`, texto `body-sm`.
- Aparece uma vez, cerca de 24 horas depois da faísca, no topo da Fogueira de quem compartilhou. Pode ser dispensada.
- Fala de pessoas e de frases, nunca de alcance, impressões ou desempenho.

### 8.8 Sessão de áudio ao vivo

- Faixa `rounded-xl border border-border bg-card p-4`, fixada no topo da Fogueira enquanto a sessão durar.
- Indicador: ponto de 8px em `success` com pulso lento de 2,4 s, sempre acompanhado do texto "Ao vivo".
- Texto: "4 pessoas do círculo estão conversando" em `body-sm`, pilha de avatares e botão **Secundário** "Entrar".
- Dentro da sessão: botões de ícone `Mic` / `MicOff` e o botão "Sair", em tela simples com a lista de participantes. Quem fala recebe um anel `ring-2 ring-ring`.

### 8.9 Card de Círculo (Descobrir)

Usa o layout editorial horizontal da referência: capa à esquerda, texto à direita.

```
┌──────────────────────────────────────────────────────┐
│ ┌────────────────┐  Fotografia           ⋮              │
│ │                │  Caminhadas com câmera                │
│ │  capa 16:9     │  Saídas curtas pelo bairro para        │
│ │  (ilustração)  │  fotografar sem pressa, em até três    │
│ └────────────────┘  linhas, cortado com reticências…      │
│                     7 de 12 lugares      [Pedir para entrar] │
└──────────────────────────────────────────────────────┘
```

- Capa: `w-[320px]` em `lg+`, 16:9, `rounded-lg`, ilustração do estilo da seção 7.
- Intenção do Círculo em `caption` `subtle`. Nome em `heading-sm`, `line-clamp-2`. Descrição em `body-sm muted-foreground`, `line-clamp-3`.
- Lugares disponíveis em `label`. Botão **Outline** "Pedir para entrar". Nenhum card em Descobrir usa botão laranja.
- Em `< lg`, empilha: capa em cima, texto abaixo.
- Só aparecem Círculos de visibilidade moderada. Sem ranking, sem "populares", sem contagem de membros totais.

### 8.10 Chips e filtros

| Tipo | Classes |
|---|---|
| Intenção do Círculo (estático) | `h-6 rounded-md bg-muted px-2 text-xs font-medium text-muted-foreground` |
| Filtro (selecionável, em Descobrir) | `h-9 rounded-full border border-input px-4 text-sm font-medium` |
| Filtro selecionado | `bg-accent text-accent-foreground border-transparent` + `aria-pressed="true"` |

### 8.11 Avatar

| Tamanho | Uso |
|---|---|
| 20px | Pilha de quem enviou calor |
| 24px | Menções, listas densas |
| 32px | Pilha de membros no cabeçalho do Círculo |
| 40px | Faísca, resposta |
| 56px | Painel lateral, cabeçalho de diálogo |
| 96px | Perfil |

Fallback: iniciais em `font-semibold` creme sobre `bg-secondary`. Imagem com `alt` do nome, ou `alt=""` quando o nome já está escrito ao lado. Pessoas usam avatar redondo. Círculos usam avatar quadrado `rounded-xl` com a capa.

### 8.12 Abas (dentro do Círculo)

- Abas: **Fogueira**, **Membros**, **Sobre**.
- Texto `heading-md`, ativa em `text-foreground` semibold, inativa em `text-muted-foreground`.
- Indicador: barra de 4px, `rounded-full`, `bg-primary`, sob o rótulo ativo.
- Navegação por setas, `role="tablist"`.

### 8.13 Campos e composer

**Campo**

```tsx
<Input className="h-11 rounded-xl border-input bg-card px-4 text-base placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring" />
```

- Rótulo sempre visível acima (`label`). Placeholder não substitui rótulo.
- Erro: `border-danger` + ícone `AlertCircle` + mensagem abaixo em `danger`, ligada por `aria-describedby`.

**Composer de faísca**

```
┌────────────────────────────────────────────────────┐
│ (avatar 40)  O que você quer compartilhar com a    │
│              Leitura de domingo?                   │
│                                                    │
│              [Foto] [Voz]            [Compartilhar] │
└────────────────────────────────────────────────────┘
```

- Textarea sem borda, `text-lg`, cresce com o conteúdo, legenda de até 280 caracteres. O contador só aparece nos últimos 40.
- Seletor do Círculo de destino visível acima do campo quando a pessoa está em mais de um.
- Rascunho salvo automaticamente, com aviso discreto "Rascunho salvo".
- Sem filtros, sem edição de aparência e sem prévia de desempenho.
- O botão **Compartilhar** é o único laranja preenchido da tela. Desabilitado enquanto vazio.

### 8.14 Progresso e checklist (onboarding)

Segue o bloco "Fund your account" da referência.

```
Comece seu primeiro círculo               ▓▓▓▓░░░░ 2/4

✓ Conta criada
✓ E-mail verificado
○ Entre em um círculo ou crie o seu      [Escolher círculo]
○ Convide 2 pessoas
```

- Título em `display-md`. Contador `2/4` em `label` com `tabular-nums`.
- Barra: `h-2 rounded-full`, trilho `bg-muted`, preenchimento `bg-accent` (escuro) ou `bg-secondary` (claro). `role="progressbar"` com `aria-valuenow`.
- Passo concluído: ícone `CheckCircle2` em `success`, texto em `muted-foreground`.
- Passo atual: texto em `foreground` semibold, com o botão de ação à direita.

### 8.15 Painel "Seus círculos"

Lista lateral que substitui o "Top Movers" da referência. Sem variação, sem ordem por popularidade.

```
Seus círculos                               Ver todos
2 de 2 círculos no plano gratuito

[capa] Leitura de domingo                       ●
       3 faíscas novas
[capa] Cozinha de quarta
       Sem novidades
```

- Cabeçalho: `display-sm` + link `Ver todos` em `text-link`. Legenda do plano em `caption subtle`.
- Linha: capa quadrada de 40px `rounded-xl`, nome `body-medium` semibold, estado `body-sm subtle` ("3 faíscas novas" ou "Sem novidades").
- Ponto de novidade de 8px em `bg-accent` à direita, só quando houver faíscas novas. Sem números.
- Ordem: a do último acesso. Linha clicável com altura mínima de 56px e `hover:bg-muted`.

### 8.16 Aviso de upgrade (Hearth+)

```
┌────────────────────────────────────────────────────┐
│ Você está em 2 círculos                            │
│ É o limite do plano gratuito. O Hearth+ libera     │
│ círculos ilimitados, recursos avançados de voz e   │
│ acesso offline.                                    │
│ [Conhecer o Hearth+]   Agora não                   │
└────────────────────────────────────────────────────┘
```

- Card `rounded-xl border border-border bg-card p-4`. Botão **Outline** e ação ghost "Agora não".
- Aparece apenas quando a pessoa tenta entrar ou criar um terceiro Círculo, e em Configurações. Nunca dentro da Fogueira.
- Uma vez por sessão. Sem contagem regressiva, sem escassez, sem bloquear o uso do básico.

### 8.17 Indicador de aviso

- Ponto de 10px em `bg-primary` com `ring-2 ring-background`, no canto do sino. Sem número.
- O botão leva `aria-label="Avisos, 3 novos"` para quem usa leitor de tela.
- Na sidebar, o item Círculos usa o ponto `bg-accent` quando algum Círculo tem novidade.

### 8.18 Menu, diálogo e toast

- **Menu** (`DropdownMenu`): `rounded-xl bg-popover border border-border p-1`, itens `h-10 rounded-lg px-3`.
- **Diálogo:** `rounded-xl`, largura máxima 520px, título `heading-lg`, ações à direita (cancelar à esquerda do principal). No mobile, vira bottom sheet com `rounded-t-2xl`.
- **Toast:** canto inferior central no mobile, inferior esquerdo no desktop. Fundo `popover`, borda, ícone de status. `role="status"`, some em 5 s, pausa no hover. O botão "Compartilhar" gera o toast "Compartilhado", com ação "Desfazer" quando aplicável.

### 8.19 Carregando, vazio, erro e fim da Fogueira

**Carregando.** Skeleton com `animate-pulse` e `bg-muted`, no formato exato do conteúdo (avatar redondo, linhas de texto, bloco de mídia, barra de voz). Nunca tela em branco.

**Fim da Fogueira.** Não há rolagem infinita. Ao terminar as faíscas novas, aparece um bloco centralizado com o Burst, o texto "Você viu tudo por hoje" e a linha "Volte quando quiser, o círculo continua aqui." Faíscas antigas ficam atrás de "Ver faíscas anteriores".

**Vazio.** Sempre ícone ou Burst + título + uma ação.

| Contexto | Título | Texto | Ação |
|---|---|---|---|
| Fogueira sem faíscas | A fogueira está acesa e esperando | Compartilhe a primeira faísca do círculo. | Compartilhar faísca |
| Sem círculos | Você ainda não está em nenhum círculo | Entre por convite ou encontre um círculo para você. | Descobrir círculos |
| Sem avisos | Tudo em dia | Quando alguém enviar calor, aparece aqui. | |
| Descobrir sem resultado | Nenhum círculo encontrado | Tente outro interesse ou lugar. | Limpar filtros |

**Erro.** Diga o que houve e como resolver, sem pedir desculpas e sem tom de piada.

| Situação | Mensagem |
|---|---|
| Falha ao compartilhar | Não foi possível compartilhar. Verifique sua conexão e tente de novo. |
| Círculo completo | O círculo está completo. Peça ao anfitrião para abrir uma vaga. |
| Gravação longa demais | A gravação passou de 60 segundos. Grave uma mensagem mais curta. |
| Imagem grande demais | A imagem tem mais de 10 MB. Escolha um arquivo menor. |
| Sessão expirada | Sua sessão expirou. Entre de novo para continuar. |
| Campo obrigatório | Informe seu nome de usuário. |

---

## 9. Movimento

O movimento do Boom é lento e deliberado, para reforçar a ideia de ficar e prestar atenção.

| Token | Duração | Uso |
|---|---|---|
| `fast` | 160ms | Hover, pressed |
| `base` | 280ms | Troca de aba, abrir campo de resposta |
| `slow` | 480ms | Diálogo, bottom sheet, Calor enviado |

Easing padrão: `cubic-bezier(0.22, 0.61, 0.36, 1)` (token `calm`).

**Regras**

- Movimento responde a uma ação da pessoa. Sem animação de entrada em seções ou faíscas durante a rolagem.
- Mudanças de escala são graduais e pequenas (no máximo 1,12 no Calor e 1,02 em hover).
- Nada pisca, treme ou pulsa rápido. Loops existem só em indicadores de "ao vivo" e "gravando", com período de 2,4 s ou mais.
- Transições de página: fade de 200ms, sem deslizar.
- Respeitar `prefers-reduced-motion`.

**Calor enviado (600ms, só ao enviar)**

1. O campo de resposta fecha em 280ms e a resposta entra no fio com fade.
2. O `Flame` passa de contorno para preenchido em `primary` com crossfade de 400ms.
3. O ícone escala de 1 → 1,12 → 1 durante os 600ms.
4. O rótulo troca para "Você enviou calor".

Sem partículas, sem raios, sem contagem animada. Com `prefers-reduced-motion`, o ícone muda de contorno para preenchido sem escala nem crossfade.

```tsx
const reduce = useReducedMotion();
<motion.span
  animate={sent && !reduce ? { scale: [1, 1.12, 1] } : { scale: 1 }}
  transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
/>
```

---

## 10. Acessibilidade

- **Idioma:** `<html lang="pt-BR">`.
- **Contraste:** mínimo de 4,5:1 para texto e 3:1 para componentes de interface (tabela da seção 2.6).
- **Foco visível sempre.** Anel de 2px com `ring-offset-2`. Nunca `outline: none` sem substituto.
- **Alvos de toque:** 44 × 44px no mobile. Ícones de 20px têm área clicável de 44px com `p-3`.
- **Cor nunca sozinha:** erro usa ícone e texto, "ao vivo" usa o texto além do ponto, Calor enviado muda de contorno para preenchido e o rótulo muda para "Você enviou calor".
- **Calor:** botão com `aria-expanded` e `aria-controls` enquanto o campo de resposta está aberto. Depois de enviado, `aria-label="Você enviou calor"`. Não há contadores para anunciar.
- **Voz:** todo player tem controle por teclado, posição em `role="slider"`, duração anunciada e transcrição opcional. A gravação indica o estado por texto, não só pelo ponto.
- **Imagens:** `alt` descritivo ou `alt=""` quando decorativa. O composer oferece o campo "Descrição da imagem".
- **Teclado:** todos os controles alcançáveis por Tab, abas por setas, diálogos prendem o foco e fecham com Esc.
- **Anúncios:** toasts em `role="status"`, erros de formulário ligados por `aria-describedby`.
- **Movimento:** `prefers-reduced-motion` desativa escala, crossfade e loops de pulso.
- **Headings** em ordem, um `h1` por página.

---

## 11. Voz e microcopy

### 11.1 Tom

Acolhedor, ponderado e confiante sem alarde. O Boom fala como um amigo de confiança que não tem pressa: incentiva sem euforia, é direto sem frieza e humano sem forçar intimidade.

### 11.2 Regras

- Português do Brasil, tratamento por **você**.
- Sentence case em todos os textos de interface.
- Verbo no botão, dizendo o que acontece: "Compartilhar", não "Enviar".
- A mesma ação mantém o mesmo nome em todo o fluxo. O botão "Compartilhar" gera o toast "Compartilhado".
- Frases curtas, sem exclamações, sem jargão técnico.
- Sem urgência artificial ("não perca", "últimas vagas", "agora ou nunca").
- Sem comparação ("você está atrás") e sem culpa por ausência ("sentimos sua falta").
- Erros explicam o que houve e como resolver, sem pedir desculpas.

### 11.3 Vocabulário fixo

| Conceito | Termo |
|---|---|
| Grupo pequeno | Círculo |
| Espaço do Círculo | Fogueira |
| Postagem | Faísca |
| Publicar uma faísca | Compartilhar |
| Reação principal | Calor ("Enviar calor") |
| Resumo para o autor | Brasa |
| Explorar Círculos | Descobrir |
| Notificações | Avisos |
| Criador de Círculo | Anfitrião |
| Assinatura | Hearth+ |

### 11.4 Notificações push

Cada push chama a pessoa de volta a uma relação, não a uma métrica. Nunca traz contagem de reações nem urgência. Vários eventos do mesmo Círculo no mesmo período viram um único aviso.

| Situação | Texto |
|---|---|
| Atividade no Círculo | Seu círculo está esperando. Alguém deixou um bilhete junto à fogueira. |
| Faísca de uma pessoa | Um momento de tranquilidade da Maya acabou de chegar. |
| Resumo do dia | Três pessoas do seu círculo compartilharam algo novo hoje. |

### 11.5 Exemplos

| Local | Texto |
|---|---|
| Saudação do dia | Boa noite, Alex. |
| Placeholder do composer | O que você quer compartilhar com a Leitura de domingo? |
| Toast de sucesso | Compartilhado |
| Confirmação de exclusão | Excluir faísca? Ela some da Fogueira para todo o círculo. |
| Botão de exclusão | Excluir faísca |
| Cadastro, subtítulo | Entre em círculos pequenos e fale com quem importa. |
| Limite do plano gratuito | Você está em 2 círculos. É o limite do plano gratuito. |

---

## 12. Implementação

### 12.1 `globals.css`

Os tokens usam canais RGB separados por espaço, para permitir modificadores de opacidade do Tailwind (`bg-primary/10`). O tema escuro é o padrão.

```css
@layer base {
  :root {
    /* Tema claro */
    --background: 248 240 226;
    --foreground: 32 0 49;
    --card: 255 255 255;
    --popover: 255 255 255;
    --muted: 244 230 208;
    --muted-foreground: 90 74 104;
    --subtle: 122 89 138;
    --primary: 243 113 33;
    --primary-hover: 221 101 27;
    --primary-foreground: 50 0 75;
    --secondary: 50 0 75;
    --secondary-foreground: 238 217 183;
    --accent: 238 217 183;
    --accent-foreground: 32 0 49;
    --border: 218 198 165;
    --input: 138 122 92;
    --ring: 50 0 75;
    --link: 176 76 15;
    --destructive: 148 38 38;
    --destructive-foreground: 255 255 255;
    --danger: 168 50 31;
    --success: 63 107 71;
    --warning: 138 91 0;
    --radius: 0.75rem;
  }

  .dark {
    /* Tema escuro (padrão do produto) */
    --background: 32 0 49;
    --foreground: 238 217 183;
    --card: 39 0 58;
    --popover: 44 0 66;
    --muted: 44 0 66;
    --muted-foreground: 218 198 165;
    --subtle: 198 179 147;
    --primary: 243 113 33;
    --primary-hover: 221 101 27;
    --primary-foreground: 50 0 75;
    --secondary: 50 0 75;
    --secondary-foreground: 238 217 183;
    --accent: 238 217 183;
    --accent-foreground: 32 0 49;
    --border: 75 47 94;
    --input: 122 89 138;
    --ring: 238 217 183;
    --link: 246 148 88;
    --destructive: 148 38 38;
    --destructive-foreground: 255 255 255;
    --danger: 232 121 121;
    --success: 122 158 126;
    --warning: 242 182 50;
  }

  body {
    @apply bg-background font-sans text-foreground antialiased;
  }
}
```

Use `next-themes` com `defaultTheme="dark"` e `attribute="class"`.

### 12.2 `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: token("background"),
        foreground: token("foreground"),
        card: token("card"),
        popover: token("popover"),
        muted: { DEFAULT: token("muted"), foreground: token("muted-foreground") },
        subtle: token("subtle"),
        primary: {
          DEFAULT: token("primary"),
          hover: token("primary-hover"),
          foreground: token("primary-foreground"),
        },
        secondary: { DEFAULT: token("secondary"), foreground: token("secondary-foreground") },
        accent: { DEFAULT: token("accent"), foreground: token("accent-foreground") },
        destructive: { DEFAULT: token("destructive"), foreground: token("destructive-foreground") },
        border: token("border"),
        input: token("input"),
        ring: token("ring"),
        link: token("link"),
        danger: token("danger"),
        success: token("success"),
        warning: token("warning"),
        // Escalas de marca, para ilustração e estados
        sage: { 500: "#7A9E7E", 700: "#3F6B47" },
        plum: { 500: "#32004B", 600: "#2C0041", 700: "#250038", 800: "#1F002E", 900: "#180025" },
        boom: { 400: "#F69458", 500: "#F37121", 600: "#DD651B" },
        cream: { 50: "#F8F0E2", 100: "#F4E6D0", 200: "#EED9B7", 300: "#DAC6A5" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Libre Caslon Condensed", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["5rem", { lineHeight: "5rem" }],
        "display-xl": ["4rem", { lineHeight: "4rem" }],
        "display-lg": ["3rem", { lineHeight: "3rem" }],
        "display-md": ["2.25rem", { lineHeight: "2.375rem" }],
        "display-sm": ["1.75rem", { lineHeight: "1.875rem", letterSpacing: "0.01em" }],
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "var(--radius)",
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
};

export default config;
```

### 12.3 Fontes (`app/layout.tsx`)

```tsx
import { Inter, Libre_Caslon_Condensed } from "next/font/google";
import localFont from "next/font/local";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

// Fallback gratuito do display (confirme o export no next/font/google)
const caslon = Libre_Caslon_Condensed({
  subsets: ["latin"], weight: ["700"], variable: "--font-caslon", display: "swap",
});

// Gloucester MT Extra Condensed, só com licença de webfont
const gloucester = localFont({
  src: "../../public/fonts/GloucesterMT-ExtraCondensed.woff2",
  variable: "--font-display",
  display: "swap",
});
```

Sem a licença da Gloucester, remova o `localFont` e aponte `--font-display` para a variável da Libre Caslon Condensed. Para seguir a direção da Fraunces, troque a importação por `Fraunces` (peso 600) e desça um degrau na escala display, como indicado na seção 3.1.

### 12.4 Estrutura de pastas

```
src/
├── app/
│   ├── (auth)/            # entrar, cadastrar
│   ├── (app)/             # início, círculos, descobrir, avisos, perfil
│   └── layout.tsx
├── components/
│   ├── ui/                # shadcn/ui base
│   ├── shared/            # Avatar, AvatarStack, Burst, EmptyState, VoicePlayer
│   └── circulos/          # Fogueira, Faisca, CalorReply, BrasaCard, CircleCard,
│                          # CircleHeader, Composer, LiveSessionBar, UpgradeNotice
├── hooks/
├── lib/
├── stores/
└── types/
```

---

## 13. Anti-patterns e checklist

### 13.1 Proibido

**De produto**

- Contadores públicos de reação, seguidores ou alcance.
- Rankings, tendências, "populares" ou qualquer comparação entre pessoas ou Círculos.
- Rolagem infinita e ordenação por engajamento na Fogueira.
- Anúncios ou espaços reservados para anúncio.
- Notificações com urgência, escassez ou culpa.
- Upsell dentro da Fogueira, repetido ou com contagem regressiva.

**De interface**

- Mais de um botão laranja preenchido por tela.
- Ameixa `#32004B` como cor de texto ou de contorno sobre o fundo escuro.
- Gloucester abaixo de 28px, em botões, labels ou texto corrido.
- Texto creme sobre laranja em tamanho pequeno.
- Gradientes, glassmorphism, sombras no tema escuro.
- Rótulos em caixa alta com espaçamento aberto sobre cada título.
- Emoji como ícone funcional.
- Cor como única indicação de estado (erro, ao vivo, Calor enviado).
- Animações de entrada em faíscas ou seções durante a rolagem, e qualquer animação rápida ou que pisque.
- `#000` ou `#FFF` escritos direto nas classes. Use os tokens.
- `style={{ }}` inline e `!important`.
- Texto de interface em inglês.
- Lista ou tela vazia sem estado vazio.

### 13.2 Checklist antes de entregar uma tela

- [ ] Só os tokens da seção 2.4 são usados para cor.
- [ ] Há no máximo uma ação laranja preenchida.
- [ ] Nenhum número público de reação, ranking ou comparação aparece.
- [ ] Títulos em Gloucester têm 28px ou mais e no máximo 2 linhas.
- [ ] Todos os alvos de toque têm 44px no mobile.
- [ ] Foco visível em todos os controles, testado só com teclado.
- [ ] Funciona nos temas escuro e claro.
- [ ] Contraste conferido em texto secundário e metadados.
- [ ] Loading (skeleton), vazio, erro e fim da Fogueira estão implementados.
- [ ] Textos seguem a seção 11 e o vocabulário fixo, sem urgência.
- [ ] Movimento lento, e funciona com `prefers-reduced-motion`.
- [ ] Mensagens de voz têm controle por teclado e transcrição opcional.
- [ ] Layout testado em 375px, 768px, 1024px e 1280px.
