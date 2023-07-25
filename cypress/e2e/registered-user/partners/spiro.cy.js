describe("spiro", () => {
    beforeEach(() => {
      cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
      cy.wait(3000);
      cy.get(".stroke-2").click();
      cy.contains("Videos On Demand").click();
      cy.contains("Exercise").click();
    });
  
    it("redirect to exercise", () => {
      cy.url().should("include", "exercise");
    });
  
    it("info video", () => {
      cy.contains("Watch Info Video").click();
      cy.url().should("include", "learn-more");
    });
  
    it("get started", () => {
      cy.contains("Get Started").click();
      cy.url().should("include", "exercise/app");
    });
  
    it("back from iframe", () => {
      cy.contains("Get Started").click();
      cy.wait(2000);
      cy.get("#back-btn").click();
      cy.url().should("include", "exercise");
    });
  });