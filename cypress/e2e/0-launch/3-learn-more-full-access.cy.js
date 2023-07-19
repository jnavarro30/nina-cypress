import { signOut } from "../../support/utils";
describe("launch screen", () => {
    it("learn more redirect to learn more page", () => {
      cy.visit("https://tv.independa.com/launch?device_id=PROD&tv=lg");
      cy.contains("Learn More").click();
      cy.url().should("match", /.+learn-more.+/);
    });
  
    it("full access redirect to signup page", () => {
      cy.visit("https://tv.independa.com/launch/learn-more?device_id=PROD&tv=lg");
      cy.contains("Full Access").click();
      cy.url().should("eq", "https://tv.independa.com/launch/sign-up");
    });

    it("signup page contains 3 methods", () => {
        cy.visit("https://tv.independa.com/launch/sign-up")
        cy.contains(/^https:\/\/web.independa.com\/activate.*/).should("be.visible");
        cy.contains("Using Your Cellphone").should("be.visible");
        cy.contains("Using Your Television");
    })

    after(() => {
        cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
        signOut();
      })
  });