describe("photos", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=GUEST&tv=lg");
    cy.wait(3000);
    cy.contains("Photos").click();
  });
  it("redirect to photos", () => {
    cy.url().should("include", "photos");
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
