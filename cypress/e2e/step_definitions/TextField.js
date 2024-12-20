import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BuscarCancionesPage from '../../page/TextField_page';  // Ruta de tu archivo POM

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
Then('se muetsra grilla con las canciones de la banda', () => {
 BuscarCancionesPage.verificarGrillaCanciones();
});

Then('se muestra en la grilla la canciónde la banda morat {string}',(cancion) => {
  BuscarCancionesPage.verificarCancionEnGrilla(cancion);
});
