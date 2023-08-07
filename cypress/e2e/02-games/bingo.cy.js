describe("bingo", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains("Games").click();
    cy.contains("Bingo").click();
  });

  it("redirect to speed menu", () => {
    cy.url().should("include", "games/speed-menu");
  });

  it("redirect to bingo", () => {
    cy.contains("Fast").click();
    cy.url().should("include", "games/bingo");
  });

  it("start", () => {
    cy.contains("Fast").click();
    cy.contains("Start").click();
    cy.contains(/Pull [12] \/ 45/).should("be.visible");
  });

  it("speed", () => {
    cy.contains("Medium").click();
    cy.contains("Medium").next().click();
    cy.contains("Fast").should("be.visible");
    cy.contains("Fast").prev().click();
    cy.contains("Medium").should("be.visible");
  });

  it("paused", () => {
    cy.contains("Medium").click();
    cy.contains("Back").click();
    // cy.contains("Bingo Paused");
    cy.contains("Bingo Paused").should("be.visible");
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
    cy.contains("Bingo: No Score Yet").should("be.visible");
    cy.get("#back-btn").click();
  });
});
