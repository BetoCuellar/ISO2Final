const reportController = require('../controllers/reportController');

beforeEach(() => {
  reportController.setReports([]);
});

test('should create a new report', () => {
  const req = {
    body: { descripcion: 'Basura acumulada', ubicacion: 'Zona A' }
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };

  reportController.createReport(req, res);

  expect(res.status).toHaveBeenCalledWith(201);
  expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
    message: 'Reporte creado',
    report: expect.objectContaining({ descripcion: 'Basura acumulada', ubicacion: 'Zona A' })
  }));
});

test('should retrieve all reports', () => {
  const fixedDate = new Date('2023-01-01T00:00:00Z');
  reportController.setReports([
    { id: 1, descripcion: 'Basura acumulada', ubicacion: 'Zona A', fechaReporte: fixedDate },
    { id: 2, descripcion: 'Plástico', ubicacion: 'Zona B', fechaReporte: fixedDate }
  ]);

  const req = {};
  const res = {
    json: jest.fn()
  };

  reportController.getAllReports(req, res);

  expect(res.json).toHaveBeenCalledWith(expect.arrayContaining([
    expect.objectContaining({ descripcion: 'Basura acumulada', ubicacion: 'Zona A', id: 1 }),
    expect.objectContaining({ descripcion: 'Plástico', ubicacion: 'Zona B', id: 2 })
  ]));
});
