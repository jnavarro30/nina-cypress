import { signOut } from "../../support/utils";
describe("launch screen", () => {
  it("learn more redirect to learn more page", () => {
    cy.visit("https://tv.independa.com/launch?device_id=PROD&tv=lg");
    cy.contains("Learn More").click();
    cy.url().should("match", /.+learn-more.+/);
  });

  it("enjoy free redirect to homepage", () => {
    cy.visit("https://tv.independa.com/launch/learn-more?device_id=PROD&tv=lg");
    cy.contains("Enjoy FREE").click();
    cy.url().should("match", /.*tv.independa.com.*device_id=PROD.*/);
  });

  after(() => {
    signOut();
  })
});
