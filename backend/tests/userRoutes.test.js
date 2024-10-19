// Test cases for userRoutes api in backend using Mocha and SuperTest
import supertest from 'supertest';
import app from '../../app';

describe('User API Routes', () => {
  it('should return status 200 when user info is retrieved'), async () => {
    await supertest(req().
    .get('/api/user').expect(200);
  });
});
