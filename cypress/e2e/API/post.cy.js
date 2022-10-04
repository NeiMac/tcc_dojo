import { faker } from '@faker-js/faker'

const cupom = {
        "code": faker.datatype.uuid(),
        "amount": "10",
        "discount_type": "fixed_product",
        "description": "Cupom de desconto de teste"
      }

it('teste', () => {
    cy.postCupom(cupom)
        .then(response => {
            cy.log(response)
            expect(response.status).to.equal(201)
        })
})
