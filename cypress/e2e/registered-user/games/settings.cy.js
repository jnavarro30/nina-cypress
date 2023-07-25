describe("settings", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains("Games").click();
    cy.contains("Settings").click();
  });

  it("redirect to settings", () => {
    cy.url().should("include", "games/settings");
  });

  it("sound", () => {
    cy.get(".px-8").children().first().next().click();
    cy.contains("Off").click();
    cy.contains("On").click();
  });

  it("clear data", () => {
    cy.contains("Clear Data").click();
    cy.contains("Are You Sure").should("be.visible");
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
