describe("launch screen", () => {
    it("camera offer redirect to flex it", () => {
      cy.visit("https://tv.independa.com/launch?device_id=PROD&tv=lg");
      cy.contains("FREE Camera").should("be.visible");
      cy.contains("FREE Camera").click();
      cy.url().should("eq", "https://tv.independa.com/healthy-offerings/physical-trainer/app")
    });
  });
  