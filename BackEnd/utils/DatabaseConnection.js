class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    this.connection = null; // Aquí inicializarías la conexión real
    DatabaseConnection.instance = this;
  }

  connect() {
    if (!this.connection) {
      // Simular conexión a BD
      this.connection = 'Conexión establecida';
      console.log(this.connection);
    }
    return this.connection;
  }
}

module.exports = new DatabaseConnection();
