'use strict';
const supertest = require('supertest');
const app = require('../src/app');

describe('example', () => {
  const request = supertest(app.callback());
  it('is a test', async () => {
    const response = await request.get('/v1');

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.time).toBeLessThan(Date.now());
    expect(Array.isArray(response.body.records)).toBe(true);
  });
});
