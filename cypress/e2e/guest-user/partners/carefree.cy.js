describe("carefree dental", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains("Other").click();
    cy.contains("Dental Discount").click();
  });

  it("redirect to carefree dental", () => {
    cy.url().should("include", "dental-discount");
  });

  it("info video", () => {
    cy.contains("Watch Info Video").click();
    cy.url().should("include", "learn-more");
  });

  // it("get started", () => {
  //   cy.contains("Get Started").click();
  //   cy.url().should("include", "home-lab-tests/app");
  // });

  // it("back from iframe", () => {
  //   cy.contains("Get Started").click();
  //   cy.get("#back-btn").click();
  //   cy.url().should("include", "home-lab-tests");
  // });
});
