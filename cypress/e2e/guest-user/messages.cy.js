import { GUEST } from "../../config";

describe("messages", () => {
  beforeEach(() => {
    cy.visit(GUEST);
    cy.wait(3000);
    cy.contains("Messages").click();
  });
  it("redirect to messages", () => {
    cy.url().should("include", "messages");
  });

  it("display qr code", () => {
    cy.wait(2000);
    cy.get("iframe")
      .its("0.contentDocument")
      .its("body")
      .find("#qrcode")
      .should("exist");
    cy.contains("Back").click();
    cy.url().should("include", "GUEST");
  });
});
