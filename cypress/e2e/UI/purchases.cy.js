// Regras de negócio: 
// •	Não é permitido inserir mais de 10 itens de um mesmo produto ao carrinho;
// •	Os valores não podem ultrapassar a R$ 990,00;
// •	Valores entre R$ 200 e R$ 600 , ganham cupom de 10% 
// •	Valores acima de R$ 600 ganham cupom de 15%
/// <reference types="cypress" />
describe('Comprar produtos', () => {
    
    it('produtos no carrinho', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        cy.produto()
        cy.produto01()
        cy.produto02()
        cy.produto03()

        cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')
        cy.get('.table-responsive')
            .should('contain.text', 'Atlas Fitness Tank - M, Blue')
            .and('contain.text', 'Teton Pullover Hoodie - XL, Red')
            .and('contain.text', 'Taurus Elements Shell - L, White')
            .and('contain.text', 'Thorpe Track Pant - 36, Purple')
    });
});

