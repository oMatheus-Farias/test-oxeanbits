![Logo do projeto](https://raw.githubusercontent.com/oMatheus-Farias/test-oxeanbits/main/public/mockup-oxeanbits.png)

# Desafio Oxeanbits

Este projeto é uma aplicação React.js que utiliza os poderosos componentes do Kendo UI para criar uma tabela interativa com dados fictícios provenientes da Fake Store API. Desenvolvido com as mais recentes tecnologias web, incluindo Kendo UI, React.js, JavaScript, Jest, Testing Library e Supertest, este projeto destaca-se por sua robustez e funcionalidades avançadas.

## 🔥 Funcionalidades Principais

- **Integração de Componentes Kendo UI:** O projeto incorpora componentes chave do Kendo UI, como DropDownList, Grid e GridColumn, proporcionando uma experiência de usuário elegante e altamente interativa.
  
- **Filtragem e Ordenação Avançadas:** A tabela permite filtrar os dados por categoria (todos, eletrônicos, jóias, roupas masculinas, roupas femininas) e ordenar por Nome, Preço, Quantidade e Avaliação, proporcionando uma visão personalizada dos dados.
  
- **Fetch Dinâmico de Dados:** Uma função específica foi implementada para realizar o fetch de dados da Fake Store API, garantindo uma integração suave e dinâmica com fontes externas.
  
- **Testes Abrangentes com Jest e Testing Library:** O projeto é acompanhado por um conjunto robusto de testes unitários realizados com Jest e Testing Library, garantindo a confiabilidade e consistência das funcionalidades críticas.
  
- **Teste de Integração com Supertest:** Para assegurar o correto funcionamento da Fake Store API, foi implementado um teste de integração utilizando Supertest, validando a integridade e resposta adequada da API.
  
- **Prototipagem:** Antes da implementação, uma etapa de prototipagem foi conduzida no Figma, garantindo uma abordagem de design bem planejada.
  
- **Responsividade:** O projeto é 100% responsivo, garantindo uma experiência consistente em diferentes dispositivos, proporcionando acessibilidade e facilidade de uso.
  
### ⚙️ Pré-requisitos

- npm ou yarn

### 🔨 Guia de instalação

1. Clone o repositório: `git clone https://github.com/oMatheus-Farias/test-oxeanbits.git`>
2. Navegue até o diretório do projeto: `cd test-oxeanbits`
3. Instale as dependências: `npm install` (ou use o gerenciador de pacotes apropriado)
4. No diretório raiz do projeto crie um arquivo .env
5. Neste arquivo .env insira uma variável de ambiente -> REACT_APP_NOME="api_url" (substitua NOME pelo nome que desejar e "api_url" por "https://fakestoreapi.com/products") 
6. Inicie o servidor: `npm start`
7. O aplicativo estará disponível no localhost que aparecera no seu painel ex: [http://localhost:3000](http://localhost:3000/)
8. Para executar os testes, utilize `npm test`.

### 📦 Tecnologias usadas

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
* ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

### 📄 Licença

Este projeto está sob a [Licença MIT](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)
