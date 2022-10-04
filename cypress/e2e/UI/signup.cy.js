/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

describe('Home page', () => {

    const email = faker.internet.email()
    const password = '!@3456789Qaz'
    const mail = email.slice(0, email.indexOf('@')).toLowerCase()

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('registro de um usuário novo', () => {
        cy.login(email, password)

        cy.log(mail)
        cy.log(email)
        cy.get('.woocommerce-MyAccount-content')
            .find('strong')
            .eq(0)
            .invoke('text')
            .should('be.equal', mail)
    });

    it('realizar o login de um usuário', () => {

        cy.relLogin(email, password)

        cy.get('.woocommerce-MyAccount-content')
            .find('strong')
            .eq(0)
            .invoke('text')
            .should('be.equal', mail)
    });

    it('validar usuário já existente', () => {

        cy.login(email, password)

        cy.get('.woocommerce-error > li')
            .contains('Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')
            .should('be.visible')
    });
});