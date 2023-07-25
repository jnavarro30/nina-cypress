describe("mediorbis doctor", () => {
    beforeEach(() => {
      cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
      cy.wait(3000);
      cy.get(".stroke-2").click();
      cy.contains("TeleHealth").click();
      cy.contains("Doctor TeleVisit").click();
    });
  
    it("redirect to mediorbis doctor", () => {
      cy.url().should("include", "doctor-televisit");
    });
  
    it("info video", () => {
      cy.contains("Watch Info Video").click();
      cy.url().should("include", "learn-more");
    });
  
    it("check for qr code", () => {
      cy.contains("Scan QR code to initiate.")
    });
  });