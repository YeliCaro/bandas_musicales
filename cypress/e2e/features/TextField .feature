Feature:Validar TextField 

Scenario Outline: Validar que funciona TextField correctamente
Given Ingreso a la pagina
When ingreso nombre de la Banda "<banda>"
When presiono el boton Buscar
Then se muetsra grilla con las canciones de la banda 
Then se muestra en la grilla la canciónde la banda morat "<cancion>"

Examples:
 |banda|cancion|
 |Morat| Cuando Nadie Ve|

