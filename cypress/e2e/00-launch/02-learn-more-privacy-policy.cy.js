import { GUEST_LAUNCH } from "../../config";

describe("launch screen", () => {
  it("learnmore privacy policy visibilit and functionality", () => {
    cy.visit(GUEST_LAUNCH);
    cy.contains("Learn More").click();
    cy.url().should("include", "learn-more");
    cy.visit("https://tv.independa.com/launch/learn-more?device_id=GUEST&tv=lg");
    cy.contains("See Privacy Policy").click();
    cy.contains("PLEASE READ THIS PRIVACY POLICY").should("be.visible");
    cy.contains("Back").click();
    cy.contains("About The Independa Health Hub").should("be.visible");
  });
});
