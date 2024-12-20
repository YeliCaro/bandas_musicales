class BuscarCancionesPage {
    // Selector para el campo de entrada donde se escribe el nombre de la banda
    get buscarBandaInput() {
      return cy.get('input[placeholder="Ingrese nombre de la banda"]');
    }
  
    // Selector para el botón de búsqueda
    get botonBuscar() {
      return cy.get('.btn');
    }
  
    // Selector para la grilla de canciones
    get grillaCanciones() {
      return cy.get(':nth-child(4) > .text-center');  // Asume que esta es la clase de la grilla de canciones
    }
  
    // Métodos para interactuar con los elementos
    ingresarNombreBanda(nombreBanda) {
      this.buscarBandaInput.clear().type(nombreBanda);
    }
  
    presionarBotonBuscar() {
      this.botonBuscar.click();
    }
  
    verificarGrillaCanciones() {
      this.grillaCanciones.should('be.visible');  // Verifica que la grilla sea visible
    }

    verificarCancionEnGrilla(cancion) {
      cy.get('#app > div > div:nth-child(4) > table > tbody > tr')
        .contains('td', cancion) // Verifica que el nombre de la canción esté en alguna celda
        .should('be.visible');
    }


  }
  
  export default new BuscarCancionesPage();
  
