Feature:Titulos de la grilla

Scenario Outline: Validar titulos de la grilla
Given Ingreso a la pagina
When ingreso nombre de la Banda "<banda>"
When presiono el boton Buscar
Then se muetsra en la grilla los titulos correctamente

Examples:
 |banda|cancion|
 |Morat| Cuando Nadie Ve       |
