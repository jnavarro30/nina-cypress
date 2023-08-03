// describe("youtube", () => {
//     beforeEach(() => {
//       cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
//       cy.wait(3000);
//       cy.get(".stroke-2").click();
//       cy.contains("Featured Free").click();
//       cy.contains("Messages").type("{rightArrow}{enter}");
//     });
  
//     it("redirect to youtube", () => {
//       cy.url().should("include", "video-clips");
//     });
  
//     // it("info video", () => {
//     //   cy.contains("Watch Info Video").click();
//     //   cy.url().should("include", "learn-more");
//     // });
  
//     // it("get started", () => {
//     //   cy.contains("Get Started").click();
//     //   cy.url().should("include", "hearing-assessment/app");
//     // });
  
//     // it("back from iframe", () => {
//     //   cy.contains("Get Started").click();
//     //   cy.get("#back-btn").click();
//     //   cy.url().should("include", "hearing-assessment");
//     // });
//   });