describe('The Songs List', () => {
  beforeEach(() => {
    cy.visit('/playlists/songs');
  });

 it('should display some songs', () => {
  cy.get('[data-test-id="song-list"]').should('exist');
 });
});

describe('The Songs List With No Data from the Api', () => {
  beforeEach(() => {
    cy.visit('/playlists/songs');
  });

 it('should not display song list', () => {
  cy.get('[data-test-id="song-list"]').not('exist');
 });
});
