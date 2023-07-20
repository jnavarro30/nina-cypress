import { signOut } from "../../support/utils";
describe("launch screen", () => {
  it("start now redirect to homepage", () => {
    cy.visit("https://tv.independa.com/launch?device_id=PROD&tv=lg");
    cy.contains("Start Now").click();
    cy.url().should("match", /.*tv.independa.com\/.*device_id=PROD.*/);
  });

  after(() => {
    signOut();
  })
});
