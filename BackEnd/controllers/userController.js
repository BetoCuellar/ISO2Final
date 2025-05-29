// Aquí un ejemplo simple sin base de datos, para que puedas extenderlo
const users = [];

exports.registerUser = (req, res) => {
  const { email, password, nombre, rol } = req.body;
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Usuario ya existe' });
  }
  const newUser = { id: users.length + 1, email, password, nombre, rol };
  users.push(newUser);
  res.status(201).json({ message: 'Usuario registrado', user: newUser });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }
  res.json({ message: 'Login exitoso', user });
};
