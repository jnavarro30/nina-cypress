describe("rx home test", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains("At-Home Tests").click();
    cy.contains("At Home Lab Tests").click();
  });

  it("redirect to rx home test", () => {
    cy.url().should("include", "home-lab-tests");
  });

  it("info video", () => {
    cy.contains("Watch Info Video").click();
    cy.url().should("include", "learn-more");
  });

  it("get started", () => {
    cy.contains("Get Started").click();
    cy.url().should("include", "home-lab-tests/app");
  });

  it("back from iframe", () => {
    cy.contains("Get Started").click();
    cy.get("#back-btn").click();
    cy.url().should("include", "home-lab-tests");
  });
});
