describe("memory match", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains("Games").click();
    cy.contains("Memory Match").click();
  });

  it("redirect to difficulty menu", () => {
    cy.url().should("include", "games/difficulty-menu");
  });

  it("redirect to memory match", () => {
    cy.contains("Medium").click();
    cy.url().should("include", "memory-match");
  });

  it("flip card", () => {
    cy.contains("Medium").click();
    cy.get(".border-yellow-300 > .box3d").type("{enter}");
    cy.get(".border-yellow-300 > .h-full").should("be.visible");
  });

  it("paused", () => {
    cy.contains("Medium").click();
    cy.contains("Back").click();
    cy.contains("Paused").should("be.visible");
  });

  it("quit", () => {
    cy.contains("Medium").click();
    cy.contains("Back").click();
    cy.contains("Quit").click();
    cy.url().should("include", "app-details");
  });

  it("high score", () => {
    cy.contains("Medium").click();
    cy.contains("Back").click();
    cy.contains("High Score").click();
    cy.contains("No Score Yet").should("be.visible");
    cy.get("#back-btn").click();
  });
});
