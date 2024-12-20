import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BuscarCancionesPage from '../../page/TextField_page';  // Ruta de tu archivo POM
import RegistrogrillaPage from '../../page/25registros_grilla_page';

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

// Entonces se reproduce la música
Then('Reprodusco y detengo musica', () => {
  cy.get(':nth-child(1) > :nth-child(3) > audio').then((audio) => {
    audio[0].play(); // Inicia la reproducción del audio
    cy.wait(3000)
    
  });

  cy.get(':nth-child(1) > :nth-child(3) > audio').then((audio) => {

    const isPlaying = !audio[0].paused && !audio[0].ended && audio[0].readyState > 2;
    expect(isPlaying).to.be.true; // Verifica que el audio se está reproduciendo
  });

  cy.get(':nth-child(1) > :nth-child(3) > audio').then((audio) => {
    audio[0].pause(); // Detiene la reproducción del audio
    const isPaused = audio[0].paused;
    expect(isPaused).to.be.true;
  });
});



