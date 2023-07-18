describe("launch screen", () => {
  it("display the start now button", () => {
    cy.visit("https://tv.independa.com/launch?device_id=PROD&tv=lg");
    cy.contains("Start Now").click();
  });

  it("signout back to launch screen", () => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.get('.stroke-2').click();
    cy.contains('Settings').click();
    cy.contains('Personalization').click();
    cy.contains('Sign Out').click();
    cy.contains('Yes').click();
    cy.contains('Yes').click();
  })
});
