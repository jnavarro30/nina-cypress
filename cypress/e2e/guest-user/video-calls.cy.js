describe("video calls", () => {
    beforeEach(() => {
      cy.visit("https://tv.independa.com/?device_id=GUEST&tv=lg");
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