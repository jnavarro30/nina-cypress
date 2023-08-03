import config from "../../../config";
const { name, title, section, sub } = config.partners[11];

describe(name, () => {
  beforeEach(() => {
    cy.visit(config.GUEST);
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains(section).click();
    cy.contains(title).click();
  });

  it(`redirects to ${sub}`, () => {
    cy.url().should("include", sub);
  });

  it("plays the info video", () => {
    cy.contains("Watch Info Video").click();
    cy.url().should("include", "learn-more");
    cy.contains("Back").click();
  });

  it("has a qrcode", () => {
    cy.get('.h-56 > img').should("be.visible");
  });
});