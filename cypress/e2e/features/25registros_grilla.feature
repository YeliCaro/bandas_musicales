Feature:Titulos de la grilla

Scenario Outline: Validar titulos de la grilla
Given Ingreso a la pagina
When ingreso nombre de la Banda "<banda>"
When presiono el boton Buscar
Then se muetsra los 25 registros en la grilla correctamente 

Examples:
 |banda|
 |Reik| 
 |Maná|
