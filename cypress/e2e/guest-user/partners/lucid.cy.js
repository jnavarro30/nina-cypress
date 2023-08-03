import config from "../../../config";
const { name, title, section, sub } = config.partners[5];

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

  if (name === "lucid" || name === "flexIt") {
    it("has get started and iframe", () => {
      cy.contains("Get Started").click();
      cy.get('#enterprisePortalFrame').should("be.visible");
      cy.get('.p-2').click();
    })
  } else {
    it("has a qrcode", () => {
      cy.get('.h-56 > img').should("be.visible");
    });
  }
});