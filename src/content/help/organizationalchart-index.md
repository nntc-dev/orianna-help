---
title: Organigrama
module: Admin. de Personal
screen: organigrama
version: 1.0
updated: 2026-09-21
---

# Organigrama

Esta pantalla permite visualizar de forma gráfica la estructura jerárquica de las posiciones de la organización, mostrando la relación de jefatura entre ellas.

> **Nota**
>
> El organigrama se construye a partir de las posiciones vacantes u ocupadas; las posiciones congeladas o canceladas no se incluyen en la gráfica.

## ¿Para qué sirve?

Sirve para consultar visualmente cómo se relacionan las posiciones entre sí a través de su jefatura, identificar posiciones vacantes dentro de la estructura y exportar el detalle de la jerarquía a Excel.

## ¿Cómo se utiliza?

Antes de generar el organigrama, elige el tipo de jefatura a graficar:

* **Jefe directo:** construye el árbol usando el jefe inmediato de cada posición.
* **Jefe jerárquico:** construye el árbol usando el jefe jerárquico configurado en cada posición.

Puedes acotar la información con los filtros **Razón social**, **Departamento**, **Ubicación**, **Área** y **Posición**. Al cambiar razón social, departamento, ubicación o área se limpia el filtro de Posición. Cuando seleccionas una posición específica, esta se convierte en el nodo raíz del organigrama.

Presiona **Generar** para construir la gráfica con los filtros seleccionados.

Cada nodo del organigrama muestra la fotografía o iniciales del empleado (o la leyenda "Vacante" si la posición no tiene empleado asignado), el nombre del puesto, el código de la plaza y el departamento. Las posiciones vacantes se resaltan visualmente dentro de su nodo.

Si un nodo tiene posiciones subordinadas, muestra un botón para **expandir o colapsar** esa rama. Puedes desplazarte por el organigrama arrastrando el área de la gráfica con el mouse, y usar el botón **Nodo principal** para regresar rápidamente al nodo raíz.

Cuando se aplica algún filtro de razón social, departamento, ubicación o área (sin seleccionar una posición puntual), el sistema agrega un nodo especial de **Filtros** como raíz, que agrupa bajo de sí a todas las posiciones que cumplen con los criterios indicados.

## Exportación

El botón **Exportar** genera un archivo de Excel con el detalle plano de la jerarquía mostrada (posición, empleado, razón social, puesto, departamento, ubicación, estatus y nivel), coloreando cada fila según su nivel jerárquico y marcando las posiciones vacantes.

## Consideraciones

El organigrama respeta los permisos de seguridad del usuario sobre razón social, ubicación, departamento y periodo; solo se muestran las posiciones a las que el usuario tiene acceso.

Cuando la estructura filtrada no tiene un único nodo raíz identificable, el sistema agrupa las posiciones encontradas bajo el nodo de Filtros para poder representarlas en un solo árbol.

---

Versión 1.0 · Última actualización: septiembre 2026
