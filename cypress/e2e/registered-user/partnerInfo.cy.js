describe("partner info", () => {
  beforeEach(() => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.wait(3000);
    cy.get(".stroke-2").click();
    cy.contains("Partner Info").click();
  });

//   it("redirect to capital rx", () => {
//     cy.contains("CapitalRx").click();
//     cy.url().should("include", "learn-more");
//     cy.get("#back-btn").click();
//   });

//   it("redirect to coro faith", () => {
//     cy.contains("CoroFaith").click();
//     cy.url().should("include", "learn-more");
//     cy.get("#back-btn").click();
//   });

//   it("redirect to capital rx", () => {
//     cy.contains("CapitalRx").click();
//     cy.url().should("include", "learn-more");
//     cy.get("#back-btn").click();
//   });

//   it("redirect to coverdell", () => {
//     cy.contains("Coverdell").click();
//     cy.url().should("include", "learn-more");
//     cy.get("#back-btn").click();
//   });

//   it("redirect to dentulu", () => {
//     cy.contains("Dentulu").click();
//     cy.url().should("include", "learn-more");
//     cy.get("#back-btn").click();
//   });

//   it("redirect to doctor mediorbis", () => {
//     cy.contains("Doctor MediOrbis").click();
//     cy.url().should("include", "learn-more");
//     cy.get("#back-btn").click();
//   });

//   it("redirect to flexit", () => {
//     cy.contains("FlexIt").click();
//     cy.url().should("include", "learn-more");
//     cy.get("#back-btn").click();
//   });

  it("redirect to lucid", () => {
    cy.contains("Lucid").click();
    cy.url().should("include", "learn-more");
    cy.get("#back-btn").click();
  });

  it("redirect to rxhome test", () => {
    cy.contains("RxHomeTest").click();
    cy.url().should("include", "learn-more");
    cy.get("#back-btn").click();
  });

  it("redirect to senior savvy", () => {
    cy.contains("Senior Savvy").click();
    cy.url().should("include", "learn-more");
    cy.get("#back-btn").click();
  });

  it("redirect to spiro", () => {
    cy.contains("Spiro100").click();
    cy.url().should("include", "learn-more");
    cy.get("#back-btn").click();
  });

  it("redirect to survivornet", () => {
    cy.contains("SurvivorNet").click();
    cy.url().should("include", "learn-more");
    cy.get("#back-btn").click();
  });

  it("redirect to therapist mediorbis", () => {
    cy.contains("Therapist MediOrbis").click();
    cy.url().should("include", "learn-more");
    cy.get("#back-btn").click();
  });

  it("redirect to webmd", () => {
    cy.contains("WebMD").click();
    cy.url().should("include", "learn-more");
    cy.get("#back-btn").click();
  });
  // it("info video", () => {
  //   cy.contains("Watch Info Video").click();
  //   cy.url().should("include", "learn-more");
  // });

  // it("get started", () => {
  //   cy.contains("Get Started").click();
  //   cy.url().should("include", "hearing-assessment/app");
  // });

  // it("back from iframe", () => {
  //   cy.contains("Get Started").click();
  //   cy.get("#back-btn").click();
  //   cy.url().should("include", "hearing-assessment");
  // });
});
