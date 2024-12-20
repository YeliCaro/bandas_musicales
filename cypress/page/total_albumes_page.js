class AlbumesPage {
    verificarNumeroDeAlbumes() {
      // Verifica que el número de álbumes esté presente en el texto
      cy.contains('Total álbumes: 3').should('be.visible');
    }
  }
  
  export default new AlbumesPage();
  
  
  
  
  
  