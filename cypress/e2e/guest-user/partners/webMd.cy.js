describe("webMd", () => {
    beforeEach(() => {
      cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
      cy.wait(3000);
      cy.get(".stroke-2").click();
      cy.contains("Videos On Demand").click();
      cy.contains("Health Education").click();
    });
  
    it("redirect to hearing education", () => {
      cy.url().should("include", "health-education");
    });
  
    it("info video", () => {
      cy.contains("Watch Info Video").click();
      cy.url().should("include", "learn-more");
    });
  
    it("get started", () => {
      cy.contains("Get Started").click();
      cy.url().should("include", "health-education/app");
    });
  
    it("back from iframe", () => {
      cy.contains("Get Started").click();
      cy.get("#back-btn").click();
      cy.url().should("include", "health-education");
    });
  });
  