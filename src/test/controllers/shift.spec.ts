import request from 'supertest';
import app from '../../app';
import { Employee } from '../../models/Employee.model';
import { Shift } from '../../models/Shift.model';
import http from 'http';


describe('POST /api/shifts/:id', () => {
  let server: http.Server;
  let employeeId: string;

  beforeAll(async () => {
    server = app.listen(0); // Use port 0 to dynamically assign a free port
    const port = (server.address() as any).port;
    process.env.TEST_SERVER_PORT = String(port); // Store the test server port in environment variable

    const employee = new Employee({ name: 'John Doe' });
    await employee.save();
    employeeId = employee._id;
  });

  afterAll(async () => {
    await server.close(); // Close the server after all tests are done
  });

  it('should create a new shift for the specified employee', async () => {
    const response = await request(app)
      .post(`/api/shifts/${employeeId}`)
      .send();

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'New shift created');
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('employee');
    expect(response.body.data).toHaveProperty('startTime');
    expect(response.body.data).toHaveProperty('endTime');
    expect(response.body.data).toHaveProperty('_id');
  });

  it('should handle errors gracefully', async () => {
    const employeeId = 'invalid_employee_id';

    const response = await request(app)
      .post(`/api/shifts/${employeeId}`)
      .send();

    expect(response.status).toBe(500);
  });
});
