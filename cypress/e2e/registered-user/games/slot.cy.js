describe("slot machine", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains("Games").click();
    cy.contains("Slot Machine").click();
  });

  it("redirect to slot machine", () => {
    cy.url().should("include", "games/slot-machine");
  });

  it("spin", () => {
    cy.contains("SPIN").click();
  });

  it("lines", () => {
    cy.get(":nth-child(1) > :nth-child(2) > .rounded-l").click();
    cy.contains("8").should("be.visible");
    cy.get(":nth-child(1) > :nth-child(2) > .rounded-r").click();
    cy.contains("9").should("be.visible");
  });

  it("line bet", () => {
    cy.get(":nth-child(2) > :nth-child(2) > .rounded-l").click();
    cy.contains("0.1").should("be.visible");
    cy.get(":nth-child(2) > :nth-child(2) > .rounded-r").click();
    cy.get(":nth-child(2) > :nth-child(2) > .rounded-r").click();
    cy.contains("0.3").should("be.visible");
  });

  it("paused", () => {
    cy.contains("Back").click();
    // cy.contains("Paused");
    cy.contains("Paused").should("be.visible");
  });

  it("quit", () => {
    cy.contains("Back").click();
    cy.contains("Quit").click();
    cy.url().should("include", "app-details");
  });

  it("high score", () => {
    cy.contains("Back").click();
    cy.contains("High Score").click();
    cy.contains(/Top 3 Scores|No Score Yet/).should("be.visible");
    cy.get("#back-btn").click();
  });
});

describe("line wins", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains("Games").click();
    cy.contains("Slot Machine").click();
  });

  it("base game", () => {
    cy.contains("Line Wins").click();
    cy.contains("Line wins pay left to right.").should("be.visible");
  });

  it("paylines", () => {
    cy.contains("Line Wins").click();
    cy.get(".pl-14").click();
    cy.contains("Paylines").should("be.visible");
  });

  it("payback info", () => {
    cy.contains("Payback Info").click();
    cy.contains("In accordance with fair gaming practices").should(
      "be.visible"
    );
  });

  it("game rules", () => {
    cy.contains("Game Rules").click();
    cy.contains("Diamond Slots").should("be.visible");
    cy.get(".py-5").click();
    cy.contains("Lines").should("be.visible");
    cy.get(".py-5").click();
    cy.contains("Line Bet").should("be.visible");
    cy.get(".py-5").click();
    cy.get("#back-btn").click();
  });
});
