let reports = [];

exports.reports = reports;

exports.setReports = (newReports) => {
  reports = newReports;
  exports.reports = reports; // actualizar la exportación
};


exports.createReport = (req, res) => {
  const { descripcion, ubicacion } = req.body;
  const newReport = { id: reports.length + 1, descripcion, ubicacion, fechaReporte: new Date() };
  reports.push(newReport);
  res.status(201).json({ message: 'Reporte creado', report: newReport });
};

exports.getAllReports = (req, res) => {
  res.json(reports);
};
