describe("home page", () => {
  it("left navigation panel is visible and functional", () => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.get(".stroke-2").click();
    cy.contains("Games").should("be.visible");
    cy.contains("Other").should("be.visible");
    cy.contains("Home").type("{rightArrow}");
  });

  it("left navigation panel section items are visible", () => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.get(".stroke-2").click();
    cy.contains("Highlighted Partners").click();
    cy.contains("Hearing Check").should("be.visible");
    cy.contains("Physical Trainer").should("be.visible");
  });
});