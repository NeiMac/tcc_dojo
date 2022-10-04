
//const API_URL = Cypress.env('API_BASE_URL')
const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`

it.only('Cupons - Buscar todos os Cupons', () => {
    cy.getTodosOsCupons()
        .then(response => {
            expect(response.status).to.equal(200)
            cy.log(JSON.stringify(response.body))
            cy.log(response)
        })
})
