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

  it("get started qrcode", () => {
    cy.contains("Get Started").click();
    cy.contains("call 911").should("be.visible");
    cy.contains("OK").click();
    // cy.contains("can't find your USB camera").should("be.visible");
    cy.get("iframe")
      .its("0.contentDocument")
      .its("body")
      .find("#qrcode")
      .should("exist");
    cy.contains("Back").click();
    cy.url().should("include", "doctor-televisit");
  });
});
