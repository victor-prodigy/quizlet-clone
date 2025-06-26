
# Prompt Engineer – Quizlet Clone (Stack: Next.js, TailwindCSS, Shadcn, TypeScript, Prisma ORM, Clerk)

## 1. Definição do Projeto

Preciso construir um aplicativo SaaS de estudo chamado **Quizlet Clone** que resolve o problema de organização e memorização de conteúdos para estudantes, professores e autodidatas.

A proposta de valor central é: Um sistema intuitivo de cartões de estudo, avaliações e atividades interativas, permitindo que qualquer pessoa aprenda de forma eficiente, divertida e personalizada.

O aplicativo deve ter os seguintes objetivos de alto nível:
- Permitir a criação, compartilhamento e estudo de listas de cartões (flashcards)
- Oferecer modos de estudo variados (aprender, revisar, combinar, testar)
- Proporcionar uma experiência responsiva, acessível e visualmente agradável

---

## 2. Definição da Stack Técnica

**Stack Técnica:**
Frontend: Next.js (com TypeScript) e TailwindCSS para estilização  
Componentes: Shadcn UI  
Backend: Next.js API routes  
Banco de Dados: PostgreSQL (via Prisma ORM)  
Autenticação: Clerk (Google, Email/Senha)  
Gerenciamento de Estado: React Context + SWR  
Hospedagem/Deploy: Vercel

**Tecnologias Adicionais:**
- Prisma ORM para modelagem e acesso ao banco de dados
- Shadcn UI para componentes visuais
- Lucide Icons para ícones
- Chart.js para gráficos de desempenho (opcional)
- react-beautiful-dnd para drag-and-drop (futuro)

---

## 3. Planejamento de Funcionalidades

**Funcionalidades Principais (em ordem de prioridade):**
1. **Gestão de Usuários:** Cadastro, login, perfis e permissões básicas
   - Registro e autenticação via Clerk
   - Edição de perfil
2. **Listas de Cartões:** Criação, edição, exclusão e compartilhamento de flashcards
   - Editor de cartões com campos frente/verso
   - Organização em pastas e listas
3. **Modos de Estudo:** Diferentes formas de estudar os cartões
   - Aprender (quiz interativo)
   - Revisar (autoavaliação)
   - Combinar (jogo de associação)
   - Avaliar (testes rápidos)
4. **Descoberta e Popularidade:** Listas populares, busca e recomendações
   - Página de listas populares
   - Busca por temas/matérias
5. **Acessibilidade e Responsividade:** Layout adaptável e acessível

**Funcionalidades explicitamente FORA do escopo:**
- Chat em tempo real
- Upload de arquivos/documentos
- Sistema de gamificação avançado

---

## 4. Requisitos de UI/UX

**Estilo de Design:**  
Moderno, limpo, com cores claras e elementos arredondados.  
**Paleta de Cores:**  
Primária: Azul (#4255FF), Secundária: Amarelo (#FFD600), Neutro: Branco e cinza claro  
**Responsividade:**  
Mobile-first, otimizado para desktop e tablet  
**Acessibilidade:**  
WCAG AA, navegação por teclado, contraste adequado

**Componentes-chave:**
- Barra de navegação superior fixa
- Seção de chamada para ação (hero)
- Cards de funcionalidades (Aprender, Cartões, Avaliar, Combinar)
- Seção de listas populares com navegação
- Footer completo com links, idiomas e países

**Preferências de Layout:**
- Interface baseada em cards
- Seções bem espaçadas e agrupadas
- Ações principais sempre visíveis

---

## 5. Modelagem de Dados e Backend

**Modelo de Dados (Prisma ORM):**
1. **Usuário:**
   - id (string/UUID), email (string), nome (string), avatar (string), criadoEm (DateTime)
   - Relacionamento: possui várias listas de cartões
2. **ListaDeCartoes:**
   - id (string/UUID), titulo (string), descricao (string), autorId (string), criadoEm (DateTime)
   - Relacionamento: pertence a um usuário, possui vários cartões
3. **Cartao:**
   - id (string/UUID), frente (string), verso (string), listaId (string), criadoEm (DateTime)
   - Relacionamento: pertence a uma lista
4. **EstudoProgresso:**
   - id (string/UUID), usuarioId (string), listaId (string), acertos (int), erros (int), atualizadoEm (DateTime)

**Endpoints de API:**
GET /api/lists : Listar listas de cartões  
POST /api/lists : Criar nova lista  
GET /api/lists/:id : Detalhes da lista  
PUT /api/lists/:id : Atualizar lista  
DELETE /api/lists/:id : Excluir lista  
GET /api/cards/:listId : Listar cartões de uma lista

---

## 6. Autenticação e Autorização

**Autenticação:**  
Provider: Clerk  
Métodos: Email/senha, Google OAuth  
Fluxo: Login via Clerk, JWT seguro

**Autorização:**  
Sistema de papéis: Usuário comum e Admin  
Modelo de permissão: Usuário só pode editar/excluir suas próprias listas/cartões  
Considerações de segurança:
- CSRF protection
- Cookies httpOnly e secure
- Rate limiting em endpoints sensíveis

---

## 7. Integração de Pagamento (Opcional/Futuro)

**Requisitos de Pagamento:**  
Provider: Stripe  
Modelo: Plano gratuito e Quizlet Plus (assinatura mensal/anual)  
Planos:
- Free: Recursos básicos
- Plus: Recursos premium (estatísticas avançadas, exportação, etc.)

---

## 8. Deploy e CI/CD

**Estratégia de Deploy:**  
Hospedagem: Vercel  
CI/CD: GitHub Actions para testes, Vercel para deploy  
Ambientes: Desenvolvimento, produção  
Variáveis de ambiente documentadas no README

---

## 9. Gestão de Escopo

**Foco inicial:**  
Autenticação, criação de listas e cartões, modos de estudo básicos  
**MVP:**  
Cadastro/login, CRUD de listas/cartões, modo de estudo “Aprender”  
**Nice to have:**  
Listas populares, busca, estatísticas  
**Não implementar:**  
Chat, upload de arquivos, gamificação avançada

---

## 10. Template Completo

```
Preciso de um aplicativo SaaS de estudo chamado Quizlet Clone que resolve o problema de organização e memorização de conteúdos para estudantes, professores e autodidatas.
A proposta de valor central é: Um sistema intuitivo de cartões de estudo, avaliações e atividades interativas, permitindo que qualquer pessoa aprenda de forma eficiente, divertida e personalizada.

Stack Técnica
- Frontend: Next.js (TypeScript) com TailwindCSS
- Componentes: Shadcn UI
- Backend: Next.js API routes
- Banco de Dados: PostgreSQL (Prisma ORM)
- Autenticação: Clerk
- Adicionais: Lucide Icons, Chart.js

Funcionalidades Principais (em ordem de prioridade)
1. Gestão de Usuários: Cadastro, login, perfis (Clerk)
2. Listas de Cartões: CRUD de flashcards
3. Modos de Estudo: Aprender, Revisar, Combinar, Avaliar
4. Descoberta: Listas populares, busca

Funcionalidades explicitamente FORA do escopo:
- Chat em tempo real
- Upload de arquivos
- Gamificação avançada

UI/UX
- Estilo: Moderno, limpo, claro
- Cores: Azul, amarelo, branco, cinza
- Responsivo: Mobile-first

Modelo de Dados (Prisma)
1. Usuário: id, email, nome, avatar
2. ListaDeCartoes: id, titulo, descricao, autorId
3. Cartao: id, frente, verso, listaId

Autenticação e Autorização
- Provider: Clerk
- Papéis: Usuário, Admin
- Segurança: CSRF, cookies seguros

Pagamento (futuro)
- Provider: Stripe
- Planos: Free, Plus

Desenvolvimento
- Começar por: Autenticação (Clerk) e CRUD de listas/cartões
- Incremental: Modos de estudo, busca, populares
- Priorizar: Experiência de estudo e responsividade

Por favor, inicie configurando a estrutura do projeto e implementando o componente de cadastro/login (Clerk) e o CRUD de listas de cartões.
```
