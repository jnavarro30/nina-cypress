describe("flexIt", () => {
    beforeEach(() => {
      cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
      cy.wait(3000);
      cy.get(".stroke-2").click();
      cy.contains("Health & Healing").click();
      cy.contains("Physical Trainer").click();
    });
  
    it("redirect to physical trainer", () => {
      cy.url().should("include", "physical-trainer");
    });
  
    it("info video", () => {
      cy.contains("Watch Info Video").click();
      cy.url().should("include", "learn-more");
    });
  
    it("get started", () => {
      cy.contains("Get Started").click();
      cy.url().should("include", "physical-trainer/app");
    });
  
    it("back from iframe", () => {
      cy.contains("Get Started").click();
      cy.get("#back-btn").click();
      cy.url().should("include", "physical-trainer");
    });
  });