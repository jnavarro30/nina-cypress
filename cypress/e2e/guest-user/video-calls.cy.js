import { GUEST } from "../../config";

describe("video calls", () => {
    beforeEach(() => {
      cy.visit(GUEST);
      cy.wait(3000);
      cy.contains("Video Calls").click();
    });
    it("redirect to video calls", () => {
      cy.url().should("include", "video-call");
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