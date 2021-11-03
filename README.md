# C&A Estoque

Equipe formada por:
Aliffe Kauling
Carolina Bastos
Danilo Menezes
Israel Humberto
Nilwan Grisosti
Rafael Santos
Thiago Santos

# Aplicação para gestão de estoque C&A Estoque

# Processo:
Figma: https://www.figma.com/file/ZgxvrIavSX6EAM0NDPfXEP/InfiniteDev-team-library?node-id=0%3A1
<br>
Noton: https://www.notion.so/2ecbe75ecc4d46bebff676173e276736?v=52f58d229b084eb08127fb0e2e206d4e
<br>
Miro:
https://miro.com/app/board/o9J_lp2ZUPc=/



# Pontos de Melhoria do Projeto



1. Implementação da caixa de pesquisa (por “nome”, por exemplo) para facilitar a busca por produtos cadastrados no estoque;

2. Tratar fornecedores, setores e locais como objetos para melhor gestão.
2.1 Funcionalidade para inclusão de fornecedores. Tratar fornecedores como um objeto e assim associar nos produtos.
2.2 Funcionalidade para permitir o cadastro de setores.Tratar setores como um objeto e assim associar nos produtos.
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


