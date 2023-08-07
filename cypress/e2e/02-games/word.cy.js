describe("word hunt", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains("Games").click();
    cy.contains("Word Hunt").click();
  });

  it("redirect to word hunt", () => {
    cy.url().should("include", "word-hunt");
  });

  it("keyboard", () => {
    cy.contains("H").click();
    cy.contains("Enter").click();
    cy.contains("Please enter a 5").should("be.visible");
  });

  it("paused", () => {
    cy.get("#back-btn").click();
    cy.contains("Paused").should("be.visible");
  });

  it("quit", () => {
    cy.get("#back-btn").click();
    cy.contains("Quit").click();
    cy.url().should("include", "app-details");
  });

  it("statistics", () => {
    cy.get("#back-btn").click();
    cy.contains("Statistics").click();
    cy.contains("No Statistics Yet").should("be.visible");
    cy.get("#back-btn").click();
  });
});
