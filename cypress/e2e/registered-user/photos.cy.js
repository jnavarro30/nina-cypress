describe("photos", () => {
    beforeEach(() => {
      cy.visit("https://tv.independa.com/?device_id=ghost&tv=lg");
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
      cy.contains(/No Photos|\d+/).should("be.visible"); // second empty account
    });
  
    it("filter by not seen", () => {
      cy.contains("Not Seen").click();
      cy.contains(/No Photos|New/).should("be.visible");
    });
  
    it("filter by sender", () => {
      cy.contains("Sender").click();
      cy.contains("From").should("be.visible");
    });
  
    // it("filter by favorites", () => {
    //   cy.contains("Favorites").click();
    //   cy.contains("My favorite photo").should("be.visible");
    // });
  });
  
//   describe("message navigation", () => {
//     beforeEach(() => {
//       cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
//       cy.wait(3000);
//       cy.contains("Messages").click();
//     });
  
//     it("next", () => {
//       cy.contains("My favorite message").click();
//       cy.contains("Next").click();
//       cy.contains("Hi").should("be.visible");
//     });
  
//     it("previous", () => {
//       cy.contains("Hi").click();
//       cy.contains("Previous").click();
//       cy.contains("My favorite message").should("be.visible");
//     });
  
//     it("add/remove favorite", () => {
//       cy.contains("My favorite message").click();
//       cy.contains("Favorite").click();
//       cy.get("#back-btn").click();
//       cy.contains("Favorites").click();
//       cy.contains("My favorite message").should("be.visible");
  
//       cy.contains("My favorite message").click();
//       cy.contains("Favorite").click();
//       cy.contains("Favorites").click();
//       cy.contains("No Messages").should("be.visible");
//     });
  
//     it("react to message", () => {
//       cy.contains("Hi").click();
//       cy.contains("React").click();
//       cy.contains("😍").should("be.visible");
//       cy.contains("😎").click();
//       cy.contains("😎").should("be.visible");
//     });
  
//     it("delete message", () => {
//       cy.contains("Hi").click();
//       cy.contains("Delete").click();
//       cy.contains("Are You Sure?").should("be.visible");
//       cy.get("#back-btn").click();
//     });
  
//     it("display more", () => {
//       cy.contains("More").should("be.visible");
//     });
//   });