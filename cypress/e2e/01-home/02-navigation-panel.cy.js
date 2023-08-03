import url from "../../config";
describe("navigation", () => {
  beforeEach(() => {
    cy.visit(url.GUEST);
    cy.get(".stroke-2").click();
  })
  it("is visible and functional", () => {
    cy.contains("Games").should("be.visible");
    cy.contains("Other").should("be.visible");
    cy.contains("Home").type("{rightArrow}");
  });

  it("has panel section items visible", () => {
    cy.contains("Highlighted Partners").click();
    cy.contains("Hearing Check").should("be.visible");
    cy.contains("Physical Trainer").should("be.visible");
  });
});
