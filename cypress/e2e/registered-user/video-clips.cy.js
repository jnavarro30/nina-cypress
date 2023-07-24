// describe("video clips", () => {
//     beforeEach(() => {
//       cy.visit("https://tv.independa.com/?device_id=GHOST&tv=lg");
//       cy.wait(3000);
//       cy.contains("Video Clips").click();
//     });
//     it("redirect to video clips", () => {
//       cy.url().should("include", "video-clips");
//     });
  
//     it("no video clips", () => {
//       cy.contains("No Video Clips Available.").should("be.visible");
//     })
//   });

//   describe("filter options", () => {
//     beforeEach(() => {
//       cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
//       cy.wait(3000);
//       cy.contains("Video Clips").click();
//     });
  
//     it("filter by date", () => {
//       cy.contains("Date");
//       cy.contains(/No Video Clips|\d+/).should("be.visible");
//     });
  
//     it("filter by sender", () => {
//       cy.contains("Sender").click();
//       cy.contains("From").should("be.visible");
//     });
  
//     it("filter by not seen", () => {
//       cy.contains("Not Seen").click();
//       cy.contains(/No Video Clips|NEW/).should("be.visible");
//     });
  
//     it("filter by favorites", () => {
//       cy.contains("Favorites").click();
//       cy.contains(/No Video Clips|test contact/).should("be.visible");
//     });
//   });

  describe("video clips navigation", () => {
    beforeEach(() => {
      cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
      cy.wait(3000);
      cy.contains("Video Clips").click();
    });
  
    // it("next", () => {
    //   cy.contains("test contact").click();
    //   cy.contains("Next").click();
    //   cy.contains("Care Receiver").should("be.visible");
    // });
  
    // it("previous", () => {
    //   cy.contains("Care Receiver").click();
    //   cy.contains("Previous").click();
    //   cy.contains("test contact").should("be.visible");
    // });
  
    it("add/remove favorite", () => {
      cy.contains("test contact").click();
      cy.contains("Favorite").click();
      cy.wait(1000);
      cy.get("#back-btn").trigger("click");
    //   cy.contains("Favorites").click();
    //   cy.contains("test contact").should("be.visible");
  
    //   cy.contains("test contact").click();
    //   cy.contains("Favorite").click();
    //   cy.contains("Favorites").click();
    //   cy.contains("No Video Clips").should("be.visible");
    });
  
    // it("react to video clip", () => {
    //   cy.contains("test contact").click();
    //   cy.contains("React").click();
    //   cy.contains("😍").should("be.visible");
    //   cy.contains("😎").click();
    //   cy.contains("😎").should("be.visible");
    // });
  
    // it("delete video clip", () => {
    //   cy.contains("test contact").click();
    //   cy.contains("Delete").click();
    //   cy.contains("Delete this video").should("be.visible");
    //   cy.get("#back-btn").click();
    // });
  });