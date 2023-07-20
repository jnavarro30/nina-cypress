describe("video calls", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.contains("Video Calls").click();
  });
  it("redirect to video calls", () => {
    cy.url().should("include", "video-call");
  });

  it("help is functional", () => {
    cy.contains("Help").click();
    cy.contains("Making & Receiving a Video Call").should("be.visible");
    cy.get("#back-btn");
    cy.contains("Video Call").should("be.visible");
  });
});

describe("manage contacts", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.contains("Video Calls").click();
  });
  it("add new contact", () => {
    cy.contains("Add New Contact").click();
    cy.contains("Help").click();
    cy.contains("Adding a Contact").should("be.visible");
    cy.get("#back-btn").click();
    cy.contains("First Name").next().type("Test");
    cy.contains("Last Name").next().type("Tester");
    cy.contains("Email").next().type("test@test.com");
    cy.contains("Mobile").next().type("1234567890");
    cy.contains("Save").click();
    cy.wait(2000);
    cy.contains("Cancel").click();
  });

  // it("edit contact", () => {
  //   cy.contains("Manage").click();
  //   cy.contains("Edit").click();
  //   cy.contains("First Name").next().type("test1");
  //   cy.contains("Save").click();
  //   cy.contains("test1").should("be.visible");
  // });

  it("delete contact", () => {
    cy.contains("Manage").click();
    cy.contains("Delete").click();
    cy.contains("Delete Permanently").should("be.visible");
  });

  it("sort contacts", () => {
    cy.contains("Manage").click();
    cy.contains(/^A.*Z$/).click();
    cy.contains(/^Z.*A$/).should("be.visible");
  });
});

describe("call history", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.contains("Video Calls").click();
    cy.contains("Call History").click();
  });

  it("bring up call modal and select no", () => {
    cy.contains(/Incoming|Outgoing/).click();
    cy.contains("No").click();
    cy.contains(/Incoming|Outgoing/).should("be.visible");
  });

  it("bring up call modal, select yes and cancel call", () => {
    cy.contains(/Incoming|Outgoing/).click();
    cy.contains("Yes").click();
    cy.wait(2000);
    cy.get("#back-btn").click();
    cy.contains("Add New Contact").should("be.visible");
  });

  it("display call counter", () => {
    cy.contains(/\d+ Calls/).should("be.visible");
  });
});
