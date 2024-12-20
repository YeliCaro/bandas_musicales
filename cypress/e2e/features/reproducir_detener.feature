Feature: Reproducir y detener

Scenario Outline: Validar titulos de la grilla
  Given Ingreso a la pagina
  When ingreso nombre de la Banda "<banda>"
  When presiono el boton Buscar
  Then Reprodusco y detengo musica
 

Examples:
  | banda |
  | Reik  |
  

