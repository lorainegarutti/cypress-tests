describe('Search for a non-existent repository', () => {
    it('Should visit the GitHub homepage', () => {
        cy.visitHome();
    });

    it('Should show a error message when searching for a non-existent repository', () => {
        let repoName = 'aegeg234239239jsdf';
        cy.searchRepo(repoName);
        cy.contains('we couldn’t find any repositories');
    });

    it('Should not autocorrect if the repository name is mispelled', () => {
        let repoName = 'cyprss';
        cy.searchRepo(repoName);
        cy.get('.repo-list')
            .contains(repoName);
    });
});