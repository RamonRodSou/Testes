describe('Testa a página de login', () => {
  it('Quando clicar em login deve ir para a página de Dashboard', () => {

    cy.visit('/')
    cy.contains("Login").click()
    cy.contains("Dashboard")

  })
})