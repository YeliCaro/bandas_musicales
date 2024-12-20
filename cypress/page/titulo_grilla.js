class titulogrillapage{
    verificarTitulosGrilla() {
        cy.get('th') // Obtener todas las cabeceras de la tabla
          .eq(0) // Verificar la primera cabecera (Favorita)
          .should('have.text', 'Nombre Canción'); // Validar que el texto sea "Favorita"
    
        cy.get('th') // Obtener todas las cabeceras de la tabla
          .eq(1) // Verificar la segunda cabecera (Nombre Canción)
          .should('have.text', 'Nombre Álbum'); // Validar que el texto sea "Nombre Canción"
        
        cy.get('th') // Obtener todas las cabeceras de la tabla
          .eq(2) // Verificar la segunda cabecera (Nombre Canción)
          .should('have.text', 'Escuchar'); // Validar que el texto sea "Nombre Canción"
        
        cy.get('th') // Obtener todas las cabeceras de la tabla
          .eq(3) // Verificar la segunda cabecera (Nombre Canción)
          .should('have.text', 'Precio'); // Validar que el texto sea "Nombre Canción"
      
        cy.get('th') // Obtener todas las cabeceras de la tabla
          .eq(4) // Verificar la segunda cabecera (Nombre Canción)
          .should('have.text', 'Fecha de Lanzamiento'); // Validar que el texto sea "Nombre Canción"
        
        cy.get('th') // Obtener todas las cabeceras de la tabla
          .eq(5) // Verificar la segunda cabecera (Nombre Canción)
          .should('have.text', 'Favorita'); // Validar que el texto sea "Nombre Canción"
        
        
        }



    }
    
    export default new titulogrillapage();
    
