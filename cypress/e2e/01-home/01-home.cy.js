import url from "../../config";
describe("home", () => {
  it("has greeting and date visible", () => {
    cy.visit(url.GUEST);
    cy.contains("Today is").should("be.visible");
    cy.contains(/^Good morning|afternoon|night.*/).should("be.visible");
  });

  it("has sections visible", () => {
    cy.visit(url.GUEST);
    cy.contains("Highlighted Partners").should("be.visible");
    cy.contains("Featured Free").should("be.visible");
    cy.contains("Recent Apps").should("be.visible");
  });
});
