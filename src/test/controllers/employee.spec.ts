import request from 'supertest';
import app from '../../app';

describe('POST /api/employees',() => {
  it('should return 201 created', async () => {
    const employeeData = { name: 'John Doe' };

    const response = await request(app)
      .post('/api/employees')
      .send(employeeData);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('message', 'New employee created');
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('_id');
    expect(response.body.data).toHaveProperty('name', 'John Doe');
  })
})

