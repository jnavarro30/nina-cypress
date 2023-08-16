import { signOut } from "../../support/utils";
import { GUEST, GUEST_LAUNCH} from "../../config";

describe("launch screen", () => {
  it("learn more redirect to learn more page", () => {
    cy.visit(GUEST_LAUNCH);
    cy.contains("Learn More").click();
    cy.url().should("include", "learn-more");
  });

  it("enjoy free redirect to homepage", () => {
    cy.visit("https://tv.independa.com/launch/learn-more?device_id=GUEST&tv=lg");
    cy.contains("Enjoy FREE").click();
    cy.contains("Guest User!");
  });

  after(() => {
    signOut(GUEST);
  })
});
