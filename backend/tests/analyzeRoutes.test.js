// Test cases for analyzeRoutes api in backend using Mocha and SuperTest
import supertest from 'supertest';
import app from '../../app';

describe('ANEL API Routes', () => {
  it('should return status 200 when success'), async () => {
    await supertest(req().
   .post('/api/analyze').expect(200);
  });
});
