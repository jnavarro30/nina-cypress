import { GUEST_LAUNCH } from "../../config";

describe("launch screen", () => {
    it("camera offer redirect to flex it", () => {
      cy.visit(GUEST_LAUNCH);
      cy.contains("FREE Camera").should("be.visible");
      cy.contains("FREE Camera").click();
      cy.url().should("eq", "https://tv.independa.com/healthy-offerings/physical-trainer/app")
    });
  });
  