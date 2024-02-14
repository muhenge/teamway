import request, {Response} from 'supertest';
import app from '../../app';

describe('POST /api/employees', () => {
  let response: Response;
  const employeeData = { name: 'John Doe' };

  beforeEach(async () => {
    response = await request(app)
      .post('/api/employees')
      .send(employeeData);
  });
  it('should return 201 created', async () => {
    expect(response.statusCode).toBe(201);
  })

  it('should return the body property', async () => {
    expect(response.body).toHaveProperty('message', 'New employee created');
  })

  it('should body data', async () => {
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('name', employeeData.name);
  })
})

