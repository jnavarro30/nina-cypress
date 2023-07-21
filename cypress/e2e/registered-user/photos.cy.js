describe("photos", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=GHOST&tv=lg");
    cy.wait(3000);
    cy.contains("Photos").click();
  });

  it("redirect to photos", () => {
    cy.url().should("include", "photos");
  });

  it("no photos", () => {
    cy.contains("No Photos Available.").should("be.visible");
  })
});

describe("filter options", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.contains("Photos").click();
  });

  it("filter by date", () => {
    cy.contains("Date");
    cy.contains(/No Photos|\d+/).should("be.visible");
  });

  it("filter by sender", () => {
    cy.contains("Sender").click();
    cy.contains("From").should("be.visible");
  });

  it("filter by not seen", () => {
    cy.contains("Not Seen").click();
    cy.contains(/No Photos|NEW/).should("be.visible");
  });

  it("filter by favorites", () => {
    cy.contains("Favorites").click();
    cy.contains(/No Photos|Care Receiver/).should("be.visible");
  });
});

describe("photos navigation", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.contains("Photos").click();
  });

  it("slideshow", () => {
    cy.contains("Slideshow").click();
    cy.contains(/^\d+ \/ \d+$/).should("be.visible");
  })

  it("next", () => {
    cy.contains("test contact").click();
    cy.contains("Next").click();
    cy.contains("Care Receiver").should("be.visible");
  });

  it("previous", () => {
    cy.contains("Care Receiver").click();
    cy.contains("Previous").click();
    cy.contains("test contact").should("be.visible");
  });

  it("add/remove favorite", () => {
    cy.contains("test contact").click();
    cy.contains("Favorite").click();
    cy.get("#back-btn").click();
    cy.contains("Favorites").click();
    cy.contains("test contact").should("be.visible");

    cy.contains("test contact").click();
    cy.contains("Favorite").click();
    cy.contains("Favorites").click();
    cy.contains("No Photos").should("be.visible");
  });

  it("react to photo", () => {
    cy.contains("test contact").click();
    cy.contains("React").click();
    cy.contains("😍").should("be.visible");
    cy.contains("😎").click();
    cy.contains("😎").should("be.visible");
  });

  it("delete message", () => {
    cy.contains("test contact").click();
    cy.contains("Delete").click();
    cy.contains("Delete this photo?").should("be.visible");
    cy.get("#back-btn").click();
  });
});