describe("lucid", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains("Featured Free").click();
    cy.contains("Hearing Check").click();
  });

  it("redirect to hearing assessment", () => {
    cy.url().should("include", "hearing-assessment");
  });

  it("info video", () => {
    cy.contains("Watch Info Video").click();
    cy.url().should("include", "learn-more");
  });

  it("get started", () => {
    cy.contains("Get Started").click();
    cy.url().should("include", "hearing-assessment/app");
  });

  it("back from iframe", () => {
    cy.contains("Get Started").click();
    cy.get("#back-btn").click();
    cy.url().should("include", "hearing-assessment");
  });
});
