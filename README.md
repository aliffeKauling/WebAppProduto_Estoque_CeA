# ![Logo](https://user-images.githubusercontent.com/75868001/140329925-5f4e1ab4-b928-41b9-b5ff-c50ddd8ec0c4.png)

CeA estoque é uma aplicação de gestão de estoque voltada para o varejo de roupas. 
A aplicação é munida de ferramentas que visam facilitar a organização das mercadorias, acompanhar o que entra e o que sai da loja e evitar que o comerciante venda algo que já acabou.



 **Equipe formada por:**  <img src="https://user-images.githubusercontent.com/75868001/140382756-c1b6c325-a48a-4063-94f6-dcafd0dd6448.png" align="right">
- [Aliffe Kauling](https://github.com/aliffeKauling)<br>
- [Carolina Bastos](https://github.com/bastoscarolina)<br>
- [Danilo Menezes](https://github.com/Dannmenezes)<br>
- [Israel Humberto](https://github.com/IsraelHumberto)<br>  
- [Nilwan Grisosti](https://github.com/nilwandjg)<br>
- [Rafael Santos](https://github.com/Rafael-Silva-Santos)<br>
- [Thiago Santos](https://github.com/slthiago)<br>




## ![Group 13 (1)](https://user-images.githubusercontent.com/75868001/140382124-41d3abe1-53c9-4c95-8d63-ac11722cc32e.png) Etapas e processo:
A equipe formada por sete alunos da aceleração da Gama Academy, buscou implementar os conceitos de metodologia ágil, mais especificamente, aplicando a metodologia Scrum e Kamban para auxiliar na gestão das tarefas.


#### Visão de produto
DefiniU-se a visão de produto que consistia em desenvolver uma aplicação de gestão de estoque voltada para o varejo de roupas, capaz facilitar a organização das mercadorias, acompanhar o que entra e o que sai da loja, evitar que o comerciante venda algo que já acabou e que ao final fosse algo que pudesse ser aplicado em um contexto real. 

#### Backlog
Tendo a visão de produto, a equipe então realizou duas reuniões. A primeira voltada para levanTar hard skils dos membros da equipe e a segunda para o planejamento do backlog própriamente dito. <br>
- Planejamento de backlog.<br>
Para construção do backlog, a equipe tomou o contexto da visão de produto e inicialmente aplicou o [Design baseado em cenários e histórias](https://catarinasdesign.com.br/a-influencia-dos-cenarios-na-experiencia-do-usuario/).<br>

- User Story<br>
Nessa mesma etapa, foram mapeados/ identificados, os épicos e então refinados para User Stories.<br>
Os user stories podem ser encontrados no link abaixo:<br>
Miro: https://miro.com/app/board/o9J_lp2ZUPc=/

#### Sprint
Com o backlog pronto, a equipe então realizou a sprint plan.

- Tasks<br>
No sprint plan, levantou-se as tasks e estas foram organizadas em quadro com a metodologia kamban. Através da ferramenta Notion, a equipe buscou organização e tracking das atividades de cada membro.<br>
O Kamban pode ser encontrado no link abaixo:<br>
Noton: https://www.notion.so/2ecbe75ecc4d46bebff676173e276736?v=52f58d229b084eb08127fb0e2e206d4e


- Divisão do trabalho<br>
Tendo em mente que equipe participava da aceleração para desenvolvedores(as) Full Stack e também olhando para os fundamentos do ágil, a equipe tomou por decisão em realizar uma divisão onde toda a equipe participou de todas as etapas do projeto. A equipe esbanjou em codar em tempo real. 
#

### ![Group 12 (2)](https://user-images.githubusercontent.com/75868001/140383201-c67d88db-cf57-4e04-94ac-b6fc53fb1578.png) Planejamento e construção telas Front End

Utilizando-se de conhecimentos de UI e no que já havia sido levantado utilizando-se de UX, a equipe desenhou a jornada do usuário e em seguida iniciou os rabiscos dos wireframes que posteriormente, após validados, foram transformados em protótipos.

- Protótipos<br>
Os protótipos foram desenhados e validados através da ferramenta Figma, onde geraram o Style Guide e utilizou-se da biblioteca Bootstrap, já que a equipe já visará o comportamento responsivo e a padronização.<br>
Nesse momento também foram observados os [princípios de disign de Don Norman](https://uxdesign.blog.br/don-norman-e-seus-princ%C3%ADpios-de-design-fe063669184d).<br>
O protótipo pode ser encontrado abaixo:<br>
Figma: https://www.figma.com/file/ZgxvrIavSX6EAM0NDPfXEP/InfiniteDev-team-library?node-id=0%3A1<br>

<img src="https://user-images.githubusercontent.com/75868001/140383857-357dfa38-0398-47a4-880a-b1e0e68dd314.png" align="left" width="500">

<img src="https://user-images.githubusercontent.com/75868001/140383949-b14aec73-1d3f-4673-baac-1d0e80fb20fc.png" align="right" width="500">

<img src="https://user-images.githubusercontent.com/75868001/140384035-e5781625-ab57-4255-81a9-04ea59d41eba.png" align="center" width="500"><br>
#


### ![Group 12 (1)](https://user-images.githubusercontent.com/75868001/140382619-d9e34a4e-6cbd-4166-b9cc-cbe4c115bef9.png) DDD Driven Domain Design

A equipe também fez uso do design baseado em domínios onde a través das etapas iniciais, identificou os domínios Produto e Usuário e os Bound Context Domínio em estoque e usuário em TI.

![dominio](https://user-images.githubusercontent.com/75868001/140373880-79e6e064-e2b5-4047-8a97-5ca7da6df837.jpg)


### ![Group 12 (3)](https://user-images.githubusercontent.com/75868001/140383402-31f78052-9e15-4979-93e5-686dba01d0df.png) Modelagem da base de dados

Tendo os domínios mapeados e passado da fase de DDD tático, modelou-se então a base de dados.
![modelagem](https://user-images.githubusercontent.com/75868001/140374326-cc8a9ec5-3382-4b54-9ed9-6661be686ded.jpg)


### ![Group 12 (1)](https://user-images.githubusercontent.com/75868001/140382619-d9e34a4e-6cbd-4166-b9cc-cbe4c115bef9.png) Endpoint de API

Partiu-se então para o planejamento dos endpoints de APIs a ser consumidos pelo frontend. Este pode ser visto abaixo:

![api](https://user-images.githubusercontent.com/75868001/140960524-c9757d7e-204e-4cd8-b566-72d6f4667303.jpg)


## Requisitos técinicos considerados no projeto
- Criação do banco de dados em MySQL modelado na fase de planejamento;
- Desenvolvimento da API de CRUD da aplicação;
- Desenvolvimento das telas desenhadas na fase de planejamento;
- Desenvolvimento de script Docker para execução da aplicação.

![Stacks utilizadas](https://user-images.githubusercontent.com/75868001/140376336-7989d237-8208-4175-91de-596b485aa361.png)


## Backend

Repositório:<br>
https://github.com/nilwandjg/ApiWeb_Produto_Estoque_CeA


## Funcionalidades entregues
- Criação, edição e exclusão de produtos;
- Movimentação de entrada e saída de produtos no estoque;
- Login, autenticação e logout;
- Monitoramento do estoque.

![vedeo](https://user-images.githubusercontent.com/75868001/140961510-c30c7f39-3413-4b25-8ef2-437be592337e.gif)


# Pontos de Melhoria do Projeto

1. Implementação da caixa de pesquisa (por “nome”, por exemplo) para facilitar a busca por produtos cadastrados no estoque;

2. Tratar fornecedores, setores e locais como objetos para melhor gestão.<br>
2.1 Funcionalidade para inclusão de fornecedores. Tratar fornecedores como um objeto e assim associar nos produtos.<br>
2.2 Funcionalidade para permitir o cadastro de setores.Tratar setores como um objeto e assim associar nos produtos.<br>
2.3 Funcionalidade para cadastro de locais de armazenamento.

Dessa maneira estariam isolados permitindo a melhor gestão destes de maneira separada ao produto.
Teríamos o seguinte relacional:
Usuario(#ID, Name, Password)
Produto(#Id, codigo, nome, tipo, imagem, quantidade, &local, &setor, &fornecedor)
setor referência Setor
fornecerdor referência Fornecedor
local referência Local

Setor(#Id, Nome, Especificacao, Lider, Descricao)
Fornecedor(#Id, Nome, Endereco, Contato, Avaliacao)
Local(#Id, Nome, Capacidade, Coordenadas)

3. Implementar campo do tipo busca na modal de movimentação de produtos. O campo de busca traria os produtos em estoque.

4. Criar rotina de testes. Controlar via kanban e gerar uma rotina de testes, onde membros assumem tasks para testar funcionalidade. 

5. Funcionalidade para controlar quantidade mínima de certo produto em estoque. Dentro do produto , adicionar atributo para o usuário inserir a quantidade mínima que este deve possuir, puxa-se então uma função que verifica se a quantidade atual (Procuto.quantidade) é maior que (Produto.minimo). Com isso é possível sinalizar produtos que estão com quantidade abaixo, sinalizando a necessidade de uma movimentação de entrada. 

6. Valor unitário do produto. Visando a escalabilidade, futuramente pode ser um campo útil, caso o sistema esteja integrado em um PDV ou outro sistema de gestão de vendas.

7. Contexto que possibilite um usuário “gestor” ou a TI, realizar o cadastro de usuários, bem como troca de senha etc. Sendo assim abrangível para delegar privilégios aos usuários.

8. Aplicar e desenvolver com foco em acessibilidade.
#


# ![The Future of Communication](https://user-images.githubusercontent.com/75868001/140386551-1bdb06a1-8be9-492e-810f-eaa183422dcc.gif)


