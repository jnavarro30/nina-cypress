import { signOut } from "../../support/utils";
import { GUEST_LAUNCH, GUEST } from "../../config";

describe("launch screen", () => {
    it("redirect to tv signup and fill in fields", () => {
      cy.visit(GUEST_LAUNCH);
      cy.contains("Learn More").click();
      cy.contains("Full Access").click();
      cy.contains("Using Your Television").click();
      cy.get("#0").type("Test");
      cy.get("#1").type("Tester");
      cy.get("#2").type("test@qa.com");
      cy.get("#3").type("1234567890");
      cy.get("#4").type("12345");

      cy.get("#0").should("have.value", "Test");
      cy.get("#1").should("have.value", "Tester");
      cy.get("#2").should("have.value", "test@qa.com");
      cy.get("#3").should("have.value", "1234567890");
      cy.get("#4").should("have.value", "12345");
    });
  
    after(() => {
        cy.visit(GUEST);
        signOut(GUEST);
      })
  });