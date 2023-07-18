describe("launch screen", () => {
  it("display the start now button", () => {
    cy.viewport(1920, 1080);
    cy.visit("https://tv.independa.com/launch?device_id=PROD&tv=lg");
    cy.contains("Start Now");
  });
});
