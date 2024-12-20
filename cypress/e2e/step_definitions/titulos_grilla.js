import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BuscarCancionesPage from '../../page/TextField_page';  // Ruta de tu archivo POM
import titulogrillapage from '../../page/titulo_grilla';
// Dado que estamos en la página
Given('Ingreso a la pagina', () => {
  cy.visit("/");  // URL de la página
});

// Cuando ingreso el nombre de la banda
When('ingreso nombre de la Banda {string}', (banda) => {
  BuscarCancionesPage.ingresarNombreBanda(banda);
});

// Cuando presiono el botón Buscar
When('presiono el boton Buscar', () => {
  BuscarCancionesPage.presionarBotonBuscar();
});

//Entonces se muestra la grilla con las canciones de la banda
Then('se muetsra en la grilla los titulos correctamente', () => {
    titulogrillapage.verificarTitulosGrilla();
});


