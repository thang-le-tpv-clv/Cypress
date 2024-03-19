describe('API POST Test', () => {
    it('should successfully create a new resource', () => {
      // Define the request payload
      const requestBody = {
        name: 'morpheus',
        job: 'leader',

      };
  
      // Send a POST request to the API endpoint with the request payload
      cy.request('POST', 'https://reqres.in/api/users', requestBody)
        .then((response) => {
          // Assert that the status code is 201 (Created)
          expect(response.status).to.equal(201);
  
          // Assert that the response body contains the created resource
          expect(response.body).to.have.property('id');
          expect(response.body.name).to.equal(requestBody.name);
          expect(response.body.job).to.equal(requestBody.job);
          expect(response.body).to.have.property('createdAt');
        });
    });
  });