import { signOut } from "../../support/utils";
import { GUEST, GUEST_LAUNCH } from "../../config";


describe("launch screen", () => {
  it("start now redirect to homepage", () => {
    cy.visit(GUEST_LAUNCH);
    cy.contains("Start Now").should("be.visible");
    cy.contains("Start Now").click();
    cy.wait(2000);
    cy.contains("Guest User!")
  });

  after(() => {
    signOut(GUEST);
  })
});
