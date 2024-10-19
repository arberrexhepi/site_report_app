// Test cases for userRoutes api endpoint
import supertest from 'supertest';

const user = require('../models/userModel'); // Import your express server here
describe('USER ROUTES', () => {
  test('Should return success', async () => {
    const http = await supertest(user);
    expect(http.status).toEqual(200);
  });
});
