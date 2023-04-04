beforeEach(() => {
  cy.visit('https://gatsby-pokedex.pages.dev/it')
})

describe('pokemon spec', () => {
  it('Is Mew present', () => {
    cy.contains('Snorlax')
  })
  it('Visit Bulbasaur page and chech for genus', () => {
    cy.contains('Bulbasaur').click()
    cy.contains('Pokémon Seme')
  })
  it('Visit Charizard page and check content in different language', () => {
    cy.contains('Charizard').click()
    cy.contains('Pokémon Fiamma')
    cy.get('[hreflang="es"]').click()
    cy.contains('Pokémon Llama')
  })
  it('Test search return empty result', () => {
    cy.get('input').type('Rayquaza')
    cy.contains('Nessun Pokémon trovato con questa ricerca')
  })
})

