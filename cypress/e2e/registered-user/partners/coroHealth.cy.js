describe("coro health", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains("Videos On Demand").click();
    cy.contains("Faith").click();
  });

  it("redirect to faith", () => {
    cy.url().should("include", "faith");
  });

  it("info video", () => {
    cy.contains("Watch Info Video").click();
    cy.url().should("include", "learn-more");
  });

  it("get started", () => {
    cy.contains("Get Started").click();
    cy.url().should("include", "faith/app");
  });

  it("back from iframe", () => {
    cy.contains("Get Started").click();
    cy.wait(2000);
    cy.get("#back-btn").click();
    cy.url().should("include", "faith");
  });
});
