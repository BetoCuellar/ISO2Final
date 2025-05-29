class PuntajeStrategy {
  calcularPuntaje(data) {
    throw new Error('Debe implementar calcularPuntaje');
  }
}

class PuntajeSimple extends PuntajeStrategy {
  calcularPuntaje(data) {
    // cálculo simple, ejemplo: +10 por acierto
    return data.aciertos * 10;
  }
}

class PuntajeAvanzado extends PuntajeStrategy {
  calcularPuntaje(data) {
    // cálculo más complejo con penalizaciones
    return data.aciertos * 10 - data.errores * 5;
  }
}

export { PuntajeSimple, PuntajeAvanzado };
