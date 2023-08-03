import url from "../../config";

describe("video clips", () => {
    beforeEach(() => {
      cy.visit(url.GUEST);
      cy.wait(3000);
      cy.contains("Video Clips").click();
    });
    it("redirect to video clips", () => {
      cy.url().should("include", "video-clip");
    });
  
    it("display qr code", () => {
      cy.wait(2000);
      cy.get("iframe")
        .its("0.contentDocument")
        .its("body")
        .find("#qrcode")
        .should("exist");
        cy.get('.fixed > .btn-cursor').click();
    });
  });