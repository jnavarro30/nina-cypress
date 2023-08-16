import { signOut } from "../../support/utils";
import { GUEST_LAUNCH, GUEST } from "../../config";

describe("launch screen", () => {
  it("full access help navigation and functionality", () => {
    cy.visit(GUEST_LAUNCH);
    cy.contains("Learn More").click();
    cy.contains("Full Access").click();
    cy.contains("Help").click();
    cy.contains("Sign Up Now to Access File").should("be.visible");
    cy.contains("Independa Privacy Policy").click();
    cy.contains("PLEASE READ THIS PRIVACY POLICY").should("be.visible");
    cy.contains("Back").click();
    cy.contains("Independa Terms of User").click();
    cy.contains("1. SITE").should("be.visible");
    cy.contains("Back").click();

    cy.contains("Read More").click();
    cy.contains("Read More").click();
    cy.contains("Read More").click();
    cy.contains("Read More").click();
    cy.contains("Sign Up Now to Access File").should("be.visible");
    cy.contains("Back").click();
    cy.contains("UNLOCK FULL ACCESS").should("be.visible");
  });

  after(() => {
    cy.visit(GUEST);
    signOut(GUEST);
  });
});
