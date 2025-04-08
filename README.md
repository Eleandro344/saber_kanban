# 🧩Saber AFL - Sistema de Gerenciamento de Tarefas Kanban

Este projeto é um sistema completo de gerenciamento de tarefas estilo Kanban, desenvolvido com **Django REST Framework** no backend e **React** no frontend. Ele permite criar quadros, etapas personalizadas e atividades (cards), com recursos de arrastar, atualizar status e acompanhar prazos.

---

## 🚀 Funcionalidades

- ✅ Login com autenticação JWT
- ✅ Criação e edição de **quadros**
- ✅ Criação e movimentação de **tarefas**
- ✅ Visualização do status da tarefa (em dia/atrasado)
- ✅ Drag & Drop entre colunas
- ✅ Design responsivo e interface moderna

---

## 🛠️ Tecnologias Utilizadas

### Backend:
- [Python](https://www.python.org/)
- [Django](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
- SQLite (por padrão)

### Frontend:
- [React](https://reactjs.org/)
- [react-router-dom](https://reactrouter.com/)
- [@hello-pangea/dnd](https://www.npmjs.com/package/@hello-pangea/dnd)
- Bootstrap 5

---

## 📦 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

---

### 🔹 1. Clone o repositório

```bash
git clone https://github.com/Eleandro344/saber_kanban.git
cd saber_kanban

🔹 2. Configure o ambiente virtual e instale as dependências do backend
venv/Scripts/activate       # Windows
pip install -r requirements.txt

🔹 3. Rode o backend
python manage.py migrate
python manage.py runserver

🔹 4. Instale e inicie o frontend
cd frontend
npm install
npm start

🔐 5. Login de acesso
Acesse http://localhost:3000/login e use:

Usuário: Eleandro

Senha: 20152012



