Cypress.Commands.overwrite('contains', (originalFn, subject, filter, text, options = {}) => {
    if (typeof text === 'object') {
        options = text;
        text = filter;
        filter = undefined;
    };
  
    options.matchCase = false;
    return originalFn(subject, filter, text, options);
});

Cypress.Commands.add('visitHome', () => {
    cy.visit('');
    cy.contains('sign up for github');   
});

Cypress.Commands.add('searchRepo', (repoName) => {
    cy.get('div.d-flex.flex-justify-between > .d-flex > .btn-link > .octicon')
        .click({force:true});

    cy.get('.header-search-wrapper > .form-control')
        .clear({force:true})
        .type(`${repoName}{enter}`, {force:true});
});
