describe('Página de Login', () => {
  it('Debe cargar y permitir ingresar credenciales', () => {
    cy.visit('http://localhost:5173/login')

    cy.get('input[type="email"]').type('test@example.com')
    cy.get('input[type="password"]').type('1234')
    cy.contains('Ingresar').click()

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Intentando login con email: test@example.com')
    })
  })
})

describe('Autenticación', () => {
  it('Debería permitir registrarse', () => {
    cy.visit('/register')

    cy.get('input[name="nombre"]').type('Usuario Test')
    cy.get('input[name="email"]').type('usuario@test.com')
    cy.get('input[name="password"]').type('123456')
    cy.get('select[name="rol"]').select('Estudiante')
    cy.get('button[type="submit"]').click()

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Registrando: Usuario Test, usuario@test.com, Estudiante')
    })
  })

  it('Debería permitir iniciar sesión', () => {
    cy.visit('/login')

    cy.get('input[type="email"]').type('usuario@test.com')
    cy.get('input[type="password"]').type('123456')
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/dashboard')
    cy.contains('Bienvenido').should('be.visible')
  })
})

describe('Reportes de residuos', () => {
  beforeEach(() => {
    cy.login('usuario@test.com', '123456') // Función custom para login
  })

  it('Debería permitir crear un nuevo reporte', () => {
    cy.visit('/reportes/nuevo')

    cy.get('textarea[name="descripcion"]').type('Basura acumulada cerca del parque')
    cy.get('input[name="ubicacion"]').type('Campus Central')
    cy.get('button[type="submit"]').click()

    cy.contains('Reporte creado con éxito').should('be.visible')
  })

  it('Debería mostrar lista de reportes', () => {
    cy.visit('/reportes')

    cy.get('.reporte-item').should('have.length.greaterThan', 0)
    cy.contains('Basura acumulada cerca del parque').should('be.visible')
  })
})

describe('Minijuegos educativos', () => {
  beforeEach(() => {
    cy.login('usuario@test.com', '123456')
    cy.visit('/minijuegos')
  })

  it('Debería iniciar un minijuego y obtener puntaje', () => {
    cy.contains('Juego de Clasificación').click()

    // Simula juego, ejemplo: clic en opciones correctas
    cy.get('.opcion.correct').first().click()
    cy.get('.opcion.correct').eq(1).click()
    cy.get('button.finalizar-juego').click()

    cy.contains('Puntaje obtenido:').should('be.visible')
  })

  it('Debería mostrar el historial de puntajes', () => {
    cy.visit('/perfil')

    cy.get('.historial-puntajes').should('exist')
    cy.get('.historial-puntajes .puntaje').should('have.length.greaterThan', 0)
  })
})
