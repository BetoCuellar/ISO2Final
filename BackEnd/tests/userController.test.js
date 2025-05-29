const userController = require('../controllers/userController');

describe('User Controller', () => {
  beforeEach(() => {
    // Limpiar usuarios antes de cada test si usas array simple
    userController.users = [];
  });

  test('should register a new user', () => {
    const req = {
      body: { email: 'test@example.com', password: '1234', nombre: 'Test User', rol: 'estudiante' }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    userController.registerUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Usuario registrado',
      user: expect.objectContaining({ email: 'test@example.com' })
    }));
  });

  test('should not register duplicate user', () => {
    const req1 = {
      body: { email: 'test@example.com', password: '1234', nombre: 'Test User', rol: 'estudiante' }
    };
    const req2 = {
      body: { email: 'test@example.com', password: '5678', nombre: 'Test User 2', rol: 'estudiante' }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    userController.registerUser(req1, res);
    userController.registerUser(req2, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Usuario ya existe' });
  });
});
