class RegistrogrillaPage {
    verificarCantidadRegistros() {
        cy.get('#app > div > div:nth-child(4) > table > tbody > tr')
            .should('have.length.lte', 25) // Verificamos que el número de registros sea menor o igual a 25
            .each(($el) => {
                // Validamos que cada registro sea visible
                cy.wrap($el).should('be.visible');
            });
    }
}

export default new RegistrogrillaPage();

