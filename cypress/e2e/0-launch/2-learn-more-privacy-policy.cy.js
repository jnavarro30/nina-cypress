describe("launch screen", () => {
  it("learnmore privacy policy visibilit and functionality", () => {
    cy.visit("https://tv.independa.com/launch?device_id=PROD&tv=lg");
    cy.contains("Learn More").click();
    cy.url().should("match", /.+learn-more.+/);
    cy.visit("https://tv.independa.com/launch/learn-more?device_id=PROD&tv=lg");
    cy.contains("See Privacy Policy").click();
    cy.contains("PLEASE READ THIS PRIVACY POLICY").should("be.visible");
    cy.contains("Read More").click();
    cy.contains("absolute security.").should("be.visible");
    cy.contains("Back").click();
    cy.contains("About The Independa Health Hub").should("be.visible");
  });
});
