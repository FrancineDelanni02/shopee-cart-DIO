# Descrição 
Criar um carrinho de compras baseado no carrinho da shopee, aonde o carrinho armazene itens e faça o cálculo de sub-items automaticamente. O exercício foi desenvolvido para cumprir um dos desafios do módulo de Nodejs no Bottcamp de desenvolvimento Mobile da plataforma educativa DIO. Foi desenvolvido para ser puramente educativo.
## Entidades
- Carrinho
- Item
## Passo a passo
1. Criar uma parta services para colocar regras de negócio de cart e item
2. Arquivos com nomes em letra minúscula
3. Criar apenas assinaturas dos métodos de cart (sem lógica ainda), quais ações o meu carrinho pode fazer? 
    1. Criar item 
    2. Remover um item 
    3. Deletar um item
    4. Calcular total 
4. Assinatura dos métodos de item
    1. Criar item com id, nome, preço e quantidade
## Funcionamento
O código foi desenvolvido  em Javascript, utilizando o padrão ESM para trabalhar com módulos. 
### Módulo de Item
Possui apenas um método createItem, responsável por criar um item e retornar um objeto. As propriedades de cada item são: 
- name
- price
- quantity
- subtotal (referente ao preço total de acordo com a quantidade)
### Módulo de Cart (carrinho)
Possui um CRUD de itens. Os itens são armazenados dentro de um vetor dentro da própria classe, que só pode ser acessado diretamente pela mesma. Os métodos exportados são:
- addItem (adiciona um item ao carrinho)
- deleteItem (deleta um item do carrinho)
- listItens (mostra todos os itens dentro do carrinho)
- removeItem (remove um item do carrinho)
- calculateTotal (calcula o preço total do carrinho)
### Módulo de WishList (Lista de desejos)
Possui os método de adição, deletar e listar itens dentro da wish list.
</br>
O index.js é o responsável por representar a criação de itens, carrinho e lista de desejos e chamar os métodos necessários para testar todas as funcionalidades. 

