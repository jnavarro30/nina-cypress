export const signOut = () => {
    cy.visit("https://tv.independa.com/?device_id=PROD&tv=lg");
    cy.get(".stroke-2").click();
    cy.contains("Settings").click();
    cy.contains("Personalization").click();
    cy.contains("Sign Out").click();
    cy.contains("Yes").click();
    cy.contains("Yes").click();
}