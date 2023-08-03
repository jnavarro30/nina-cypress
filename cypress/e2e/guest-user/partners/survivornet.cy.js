describe("surivior net", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains("Videos On Demand").click();
    cy.contains("Inspiration").click();
  });

  it("redirect to inspiration", () => {
    cy.url().should("include", "inspiration");
  });

  it("info video", () => {
    cy.contains("Watch Info Video").click();
    cy.url().should("include", "learn-more");
  });

  it("watch streaming", () => {
    cy.contains("Watch Streaming").click();
    cy.url().should("include", "learn-more");
  });

  it("watch on demand", () => {
    cy.contains("Watch on Demand").click();
    cy.url().should("include", "partner/survivor-net");
  });

  it("back from iframe", () => {
    cy.contains("Watch on Demand").click();
    cy.wait(2000);
    cy.get("#back-btn").click();
    cy.url().should("include", "inspiration");
  });
});
