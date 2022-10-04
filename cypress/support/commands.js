// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... }s

Cypress.Commands.add('login', (user, pass) => {
    cy.get('#reg_email').type(user)
    cy.get('#reg_password').type(pass)
    cy.get('input[name="register"]').click()
})

Cypress.Commands.add('relLogin', (user, pass) => {
    cy.get('#username').type(user)
    cy.get('#password').type(pass)
    cy.get('.inline').click()
    cy.get('input[name="login"]').click()
})

Cypress.Commands.add('produto', () => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.contains('Atlas Fitness Tank').click({ force: true })
    cy.get('[data-title="M"]').click()
    cy.get('[data-title="Blue"]').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
})

Cypress.Commands.add('produto01', () => {
    cy.get(':nth-child(7) > .page-numbers').click()
    cy.contains('Teton Pullover Hoodie').click({ force: true })  //'Teton Pullover Hoodie'
    cy.get('[data-title="XL"]').click()
    cy.get('[data-title="Red"]').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
})

Cypress.Commands.add('produto02', () => {
    cy.get(':nth-child(7) > .page-numbers').click()
    cy.contains('Taurus Elements Shell').click({ force: true })
    cy.get('[data-title="L"]').click()
    cy.get('[data-title="White"]').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
})

Cypress.Commands.add('produto03', () => {
    cy.get(':nth-child(7) > .page-numbers').click()
    cy.contains('Thorpe Track Pant').click({ force: true })
    cy.get('[data-title="36"]').click()
    cy.get('[data-title="Purple"]').click()
    cy.get('.single_add_to_cart_button').click()
})

const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`

Cypress.Commands.add('getTodosOsCupons', () =>{
    cy.api({
        method: 'GET',
        url: `wp-json/wc/v3/coupons`,
        headers: { authorization }
    })
})

Cypress.Commands.add('postCupom', cupom => {
    cy.api({
        method: 'POST',
        url: '/wp-json/wc/v3/coupons',
        failOnStatusCode: false,
        body: cupom,
        headers: { authorization }
    })
})
