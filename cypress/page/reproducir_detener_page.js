class AudioPage {
    reproducirAudio() {
        cy.get('#audioElement').then((audio) => {
            audio[0].play(); // Inicia la reproducción del audio
        });
    }
}

export default new AudioPage();
