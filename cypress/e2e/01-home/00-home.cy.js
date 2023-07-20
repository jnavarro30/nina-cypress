describe("home page", () => {
  it("greeting and date are visible", () => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.contains("Today is").should("be.visible");
    cy.contains(/^Good morning|afternoon|night.*/).should("be.visible");
  });

  it("sections are visible", () => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.contains("Highlighted Partners").should("be.visible");
    cy.contains("Featured Free").should("be.visible");
    cy.contains("Recent Apps").should("be.visible");
  });
});
