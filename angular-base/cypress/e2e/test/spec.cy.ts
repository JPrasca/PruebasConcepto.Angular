describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('http://localhost:4200/');
    cy.contains('Angular Seed');
    cy.contains('home works!');
  });
});
