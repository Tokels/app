it('works', () => {
  cy.visit('/');
  cy.contains('Welcome');
});
