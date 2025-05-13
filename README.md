# Teste aplicação  requisição HTTP Rest API
Este projeto foi desenvolvido para consumir a API pública solicitada (https://jsonplaceholder.typicode.com/users) e exibir os dados dos usuários de maneira organizada. 

# Como rodar o projeto:

1. **Clone o repositório**:
   Abra o terminal e rode o seguinte comando:  `git clone https://github.com/leonardosip/Teste-RequisicaoAPI.git`

2. **Navegue até a pasta do projeto**:
   `cd Teste-RequisicaoAPI`

3. **Instale as dependências**:
  `npm install`

4. **Inicie o servidor de desenvolvimento**:
   Após instalar as dependências, inicie o servidor com o comando:
  ` npm run dev`

6. **Acesse a aplicação**:
   A aplicação estará disponível no navegador ao acessar o link dado no terminal.



# Organização do Projeto  


### Consumo da API  
Usei a API do [JSONPlaceholder](https://jsonplaceholder.typicode.com/users), que simula dados de usuários. As chamadas são feitas com `axios`, e usei `useEffect` junto com `useState` pra controlar os dados e o carregamento.

### Busca  
Adicionei um campo pra buscar os usuários pelo nome, que filtra **enquanto a pessoa digita**. Usei o `.filter()` e `.toLowerCase()` pra garantir que funciona mesmo se escrever com letra maiúscula ou minúscula.

### Estilização  
Usei CSS puro . Escolhi cores mais neutras com preto, branco e cinza.


### Erros  
- Quando a pessoa tenta acessar uma página que não existe, é redirecionada pra uma **página de erro 404**.  
- O mesmo acontece se acessar um ID de usuário que não existe — vai pra tela de erro também.

### Usabilidade e Visual  
- Os links e botões estão bem destacados.  
- Tudo está centralizado e fácil de ler.  
- Organizei as informações dos usuários em caixas, pra deixar mais claro e visualmente agradável.



