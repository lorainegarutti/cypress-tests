describe('Search for an existent repository', () => {
    it('Should visit the GitHub homepage', () => {
        cy.visitHome();
    });

    it('Should search for the existent repository "sorry-cypress"', () => {
        let repoName = 'sorry-cypress';
        cy.searchRepo(repoName);
        cy.contains('repository results');
        cy.get('.repo-list')
            .contains(repoName);
    });
});

