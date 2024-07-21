import request from 'supertest';

import { app } from '@/app';

describe('Get /', () => {
  let response: request.Response;

  beforeEach(async () => {
    response = await request(app).get('/');
  });

  it('should return status 200', async () => {
    expect(response.status).toBe(200);
  });

  it('should return Content-Type: application/json; charset=utf-8', async () => {
    expect(response.header['content-type']).toBe(
      'application/json; charset=utf-8'
    );
  });

  it('should return { data: "Hello world! 🍏"', async () => {
    expect(response.body).toEqual({ data: 'Hello world! 🍏' });
  });
});
