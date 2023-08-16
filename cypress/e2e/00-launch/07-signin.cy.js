import { signOut } from "../../support/utils";
import { GUEST_LAUNCH, GUEST } from "../../config";

describe("launch screen", () => {
  it("sign in redirect to sign in page", () => {
    cy.visit(GUEST_LAUNCH);
    cy.contains("Sign In").click();
    cy.url().should("include", "sign-in-form");
    cy.get("input").type("jesse.nvrro@gmail.com");
    cy.contains("Continue").click();
    cy.get("input").should("have.value", "jesse.nvrro@gmail.com");
  });

  after(() => {
    cy.visit(GUEST);
    signOut(GUEST);
  })
});