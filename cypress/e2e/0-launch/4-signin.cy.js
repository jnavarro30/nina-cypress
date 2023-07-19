import { signOut } from "../../support/utils";
describe("launch screen", () => {
  it("sign in redirect to sign in page", () => {
    cy.visit("https://tv.independa.com/launch?device_id=PROD&tv=lg");
    cy.contains("Sign In").click();
    cy.url().should("match", /.*sign-in-form.*/);
    cy.get("input").type("jesse.nvrro@gmail.com");
    cy.contains("Continue").click();
    cy.get("input").should("have.value", "jesse.nvrro@gmail.com");
  });

  after(() => {
    signOut();
  })
});