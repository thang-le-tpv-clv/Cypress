describe('User API Test', () => {
    it('should return correct user information', () => {
      cy.request('GET', 'https://reqres.in/api/users/2')
        .then((response) => {
          // Assert that the status code is 200
          expect(response.status).to.equal(200);
  
          // Assert that the response body contains the correct user information
          expect(response.body.data).to.have.property('id').to.equal(2);
          expect(response.body.data).to.have.property('email').to.equal('janet.weaver@reqres.in');
          expect(response.body.data).to.have.property('first_name').to.equal('Janet');
          expect(response.body.data).to.have.property('last_name').to.equal('Weaver');
        });
    });
  });