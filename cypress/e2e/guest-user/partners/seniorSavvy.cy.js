describe("senior savvy", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains("Videos On Demand").click();
    cy.contains("Tech Education").click();
  });

  it("redirect to tech education", () => {
    cy.url().should("include", "tech-education");
  });

  it("info video", () => {
    cy.contains("Watch Info Video").click();
    cy.url().should("include", "learn-more");
  });

  it("get started", () => {
    cy.contains("Get Started").click();
    cy.url().should("include", "senior-savvy");
  });

  it("back from iframe", () => {
    cy.contains("Get Started").click();
    cy.get("#back-btn").click();
    cy.url().should("include", "tech-education");
  });
});
