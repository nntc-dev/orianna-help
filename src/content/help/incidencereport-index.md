---
title: Reporte de incidencias
module: IncidenceReport
screen: Reporte de incidencias
version: 1.0
updated: 2026-09-22
---

# Reporte de incidencias

El **Reporte de incidencias** permite consultar las incidencias registradas para los empleados dentro de un periodo determinado.

La información se presenta en una tabla donde cada registro corresponde a una incidencia y muestra los datos principales del empleado, la fecha en que ocurrió, los horarios registrados y la información de la incidencia.

La pantalla también permite utilizar diferentes filtros para localizar rápidamente la información que se necesita y cuenta con una opción para **exportar el resultado a Excel**.

## ¿Para qué sirve?

El reporte permite revisar las incidencias de los empleados sin necesidad de consultar cada empleado individualmente.

Puede utilizarse para:

* Consultar las incidencias de un empleado específico.
* Revisar las incidencias de un departamento.
* Consultar las incidencias de una ubicación.
* Buscar un tipo de incidencia determinado.
* Consultar las incidencias de un periodo específico.
* Revisar si una incidencia fue registrada manualmente.
* Consultar los horarios de entrada y salida asociados al registro.
* Revisar las observaciones capturadas.
* Exportar la información obtenida para trabajar con ella fuera del sistema.
| **Observaciones** | Información adicional registrada para la incidencia.                |

## ¿Cómo se utiliza?

### 1. Seleccionar el periodo

El reporte permite definir un rango de fechas mediante los campos:

* **Fecha inicial**
* **Fecha final**

La fecha inicial se utiliza como comienzo del periodo que se desea consultar y la fecha final como límite del periodo.

Por ejemplo, para consultar las incidencias de todo un mes:

1. Seleccione como **Fecha inicial** el primer día del mes.
2. Seleccione como **Fecha final** el último día del mes.
3. El sistema actualizará la información de acuerdo con el periodo seleccionado.

La fecha inicial aparece configurada inicialmente con el primer día del mes actual.

Si necesita consultar un periodo diferente, simplemente cambie ambas fechas.

> Para obtener resultados correctos, revise que la fecha inicial corresponda al inicio del periodo y que la fecha final corresponda al final del periodo que desea consultar.

## Filtros disponibles

Los filtros permiten reducir la cantidad de información mostrada en el reporte.

Los filtros disponibles son:

* **Estatus**
* **Incidencia**
* **Ubicación**
* **Departamento**
* **Empleado**
* **Fecha inicial**
* **Fecha final**

Los filtros pueden utilizarse individualmente o combinarse.

Por ejemplo, puede consultar únicamente las incidencias de un empleado determinado dentro de un rango de fechas, o las incidencias de todo un departamento durante un mes.

### 2. Filtrar por estatus

El campo **Estatus** permite seleccionar el estatus con el que se desea realizar la consulta.

Para utilizarlo:

1. Haga clic en **Estatus**.
2. Escriba el estatus que desea buscar o revise las opciones disponibles.
3. Seleccione una opción.
4. El reporte se actualizará automáticamente.

Si no se selecciona un estatus específico, la consulta no limita los resultados por este criterio.

### 3. Filtrar por incidencia

El campo **Incidencia** permite seleccionar el tipo de incidencia que desea consultar.

Para utilizarlo:

1. Haga clic en **Incidencia**.
2. Escriba el nombre de la incidencia.
3. Seleccione la incidencia correspondiente.
4. El reporte se actualizará automáticamente.

Este filtro es útil cuando se desea revisar únicamente un tipo de incidencia en particular.

Por ejemplo, si desea revisar las incidencias correspondientes a un concepto específico, selecciónelo en este campo y mantenga los demás filtros según corresponda.

### 4. Filtrar por ubicación

El campo **Ubicación** permite consultar únicamente los registros asociados con una ubicación determinada.

Para utilizarlo:

1. Haga clic en **Ubicación**.
2. Escriba el nombre de la ubicación.
3. Seleccione la ubicación.
4. El reporte se actualizará automáticamente.

Este filtro puede combinarse con el filtro de departamento, empleado o incidencia.

### 5. Filtrar por departamento

El campo **Departamento** permite limitar el reporte a un departamento determinado.

Para utilizarlo:

1. Haga clic en **Departamento**.
2. Escriba el nombre del departamento.
3. Seleccione el departamento correspondiente.
4. El reporte se actualizará automáticamente.

Esto permite consultar, por ejemplo, las incidencias de todos los empleados pertenecientes a un departamento durante un periodo determinado.

### 6. Filtrar por empleado

El campo **Empleado** permite consultar las incidencias de un empleado específico.

Para realizar una búsqueda:

1. Haga clic en **Empleado**.
2. Escriba el nombre o dato del empleado.
3. Seleccione al empleado de la lista.
4. El reporte se actualizará automáticamente.

Este filtro resulta especialmente útil cuando se desea revisar el historial de incidencias de una sola persona.

### 7. Combinar filtros

Los filtros pueden utilizarse simultáneamente.

Por ejemplo, si desea consultar las incidencias de un departamento específico durante un determinado mes:

Seleccione la **Fecha inicial**.
Seleccione la **Fecha final**.
Seleccione el **Departamento**.
Revise los resultados mostrados.

También puede agregar otros filtros para hacer la búsqueda más específica.

Por ejemplo:

* Departamento + Incidencia.
* Ubicación + Departamento.
* Empleado + rango de fechas.
* Empleado + Incidencia + rango de fechas.
* Ubicación + Departamento + rango de fechas.

Cada vez que se modifica un filtro, el reporte se actualiza automáticamente.

## Consultar los resultados

Después de seleccionar los filtros, los resultados aparecen en la tabla principal.

La tabla permite desplazarse verticalmente para consultar más registros y horizontalmente cuando es necesario visualizar todas las columnas disponibles.

La información se presenta de manera individual por incidencia, por lo que un mismo empleado puede aparecer en varias filas cuando tiene más de una incidencia dentro del periodo consultado.

### Folio

El **Folio** identifica el registro de incidencia.

Permite distinguir un registro de otro cuando existen varias incidencias para el mismo empleado.

### Clave

La **Clave** corresponde al identificador del empleado.

Esta columna facilita localizar rápidamente a un empleado cuando se conoce su número de identificación.

### Empleado

Muestra el nombre del empleado relacionado con la incidencia.

### Departamento

Muestra el departamento asociado al empleado en el resultado de la consulta.

### Ubicación

Muestra la ubicación asociada al empleado.

### Fecha

Muestra la fecha en la que corresponde el registro de la incidencia.

Esta información permite identificar exactamente el día al que pertenece el registro.

### Entrada

Muestra la hora de entrada registrada para la fecha correspondiente.

Si no existe un registro de entrada disponible, el campo puede aparecer vacío.

### Salida

Muestra la hora de salida registrada para la fecha correspondiente.

Si no existe un registro de salida disponible, el campo puede aparecer vacío.

### Incidencia

Muestra el nombre de la incidencia registrada.

Esta columna permite identificar qué situación o concepto corresponde al registro.

### Valor

Muestra el valor asociado a la incidencia cuando existe.

Dependiendo de la incidencia, este valor puede representar la cantidad correspondiente al registro.

Cuando la incidencia no tiene un valor asociado, el campo puede aparecer vacío.

### Manual

La columna **Manual** permite identificar si el registro fue capturado manualmente.

Cuando el registro es manual, se muestra **Sí**.

Cuando el registro no es manual, no se muestra ningún texto en esta columna.

### Observaciones

La columna **Observaciones** muestra información adicional asociada al registro.

Puede utilizarse para consultar detalles que hayan sido registrados junto con la incidencia.

## Paginación

El reporte utiliza paginación para organizar los resultados cuando existe una cantidad grande de registros.

En la parte inferior de la tabla se muestran los controles necesarios para cambiar de página.

Para consultar más resultados:

Revise la información de la página actual.
Utilice los controles de paginación.
Seleccione la página que desea consultar.
El sistema cargará los registros correspondientes.

La cantidad de registros mostrados por página está configurada en **150 registros**.

La paginación no cambia los filtros seleccionados, por lo que puede continuar recorriendo las páginas manteniendo los mismos criterios de búsqueda.

## Exportar el reporte

El botón con el icono de **Excel** permite exportar la información del reporte.

La exportación utiliza los filtros establecidos en la pantalla para generar el archivo.

Antes de exportar, es recomendable verificar:

* Fecha inicial.
* Fecha final.
* Empleado.
* Incidencia.
* Departamento.
* Ubicación.
* Estatus.

### ¿Cómo exportar?

Seleccione el rango de fechas que desea consultar.
Aplique los filtros necesarios.
Revise que los resultados mostrados sean los que necesita.
Haga clic en el botón de **Excel** ubicado en la parte superior derecha.
El sistema generará el archivo **Reporte de incidencias**.

La información exportada incluye:

* Clave.
* Empleado.
* Departamento.
* Ubicación.
* Fecha.
* Registro de entrada.
* Registro de salida.
* Incidencia.
* Valor.
* Manual.
* Observación.

El archivo se genera con la información correspondiente a los criterios seleccionados para la consulta.

## Consideraciones importantes

> Los filtros se aplican automáticamente. Al modificar un filtro, no es necesario presionar un botón adicional para actualizar la información.

> El periodo de consulta está determinado por la **Fecha inicial** y la **Fecha final**.

> Si no se selecciona un empleado, el reporte puede mostrar información de varios empleados de acuerdo con los demás filtros establecidos.

> Un mismo empleado puede aparecer varias veces, ya que cada fila representa un registro de incidencia.

> Los campos **Entrada** y **Salida** pueden aparecer vacíos cuando no existe información registrada para ese día.

> La columna **Manual** muestra **Sí** cuando el registro fue capturado manualmente. Si no es manual, la celda permanece vacía.

> La columna **Valor** puede permanecer vacía cuando la incidencia no tiene un valor asociado.

> Las **Observaciones** permiten consultar información adicional relacionada con la incidencia y pueden estar vacías si no se registró ninguna.

> Si la consulta no muestra los resultados esperados, revise principalmente el rango de fechas y los filtros seleccionados.

> Al exportar a Excel, se utilizan los criterios de consulta establecidos en la pantalla.

## Ejemplos de consultas

### Consultar todas las incidencias de un mes

1. Seleccione como **Fecha inicial** el primer día del mes.
2. Seleccione como **Fecha final** el último día del mes.
3. Deje los demás filtros sin una selección específica.
4. Revise los resultados.

Esto permite consultar las incidencias correspondientes al periodo indicado.

### Consultar las incidencias de un empleado

Seleccione la **Fecha inicial**.
Seleccione la **Fecha final**.
En **Empleado**, busque y seleccione al empleado.
Revise los resultados.

La tabla mostrará los registros correspondientes al empleado seleccionado dentro del periodo indicado.

### Consultar una incidencia específica

Seleccione el rango de fechas.
En **Incidencia**, seleccione el tipo de incidencia que desea consultar.
Revise los resultados.

Si necesita limitar aún más la información, puede agregar un departamento, ubicación o empleado.

### Consultar las incidencias de un departamento

Seleccione el periodo.
Seleccione el **Departamento**.
Revise los resultados.
Si es necesario, agregue un filtro de **Incidencia** o **Ubicación**.

### Generar un archivo para revisión

Configure el periodo.
Aplique los filtros necesarios.
Revise la información en pantalla.
Haga clic en el botón de **Excel**.
Utilice el archivo generado para revisar o trabajar con la información obtenida.

---
Versión 1.0 · Última actualización: septiembre 2026
