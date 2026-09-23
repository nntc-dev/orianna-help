---
title: Kardex mensual
module: MonthlyKardex
screen: Kardex mensual
version: 1.0
updated: 2026-09-22
---

# Kardex mensual

El **Kardex mensual** permite consultar la información de los empleados correspondiente a un mes específico, mostrando en una sola vista el comportamiento de cada día del mes y diferentes indicadores relacionados con el empleado.

La pantalla permite consultar la información de forma general o aplicar filtros para localizar empleados específicos, departamentos, ubicaciones, razones sociales o periodos de pago. También permite consultar el significado de las abreviaciones utilizadas en los días y exportar la información a Excel.

## ¿Para qué sirve?

El Kardex mensual sirve para consultar de manera rápida la información de los empleados durante un mes determinado.

La información se presenta en forma de tabla, donde cada empleado ocupa una fila y cada día del mes aparece como una columna. De esta manera, es posible revisar visualmente lo ocurrido durante el periodo seleccionado.

La pantalla también puede mostrar información adicional del empleado en columnas posteriores a los días del mes, dependiendo de los indicadores configurados para el Kardex.

Entre la información disponible se encuentra:

* **Clave:** identifica al empleado mediante su número de empleado.
* **Empleado:** muestra el nombre completo del empleado.
* **F. Ingreso:** muestra la fecha de ingreso del empleado.
* **Días del mes:** muestra una columna para cada día del periodo seleccionado.
* **Indicadores adicionales:** muestra información adicional configurada para el Kardex.

## ¿Cómo se utiliza?

### 1. Seleccionar el período

En el campo **Período** se selecciona el mes y año que se desea consultar.

El selector está configurado para trabajar por **mes y año**, por lo que no es necesario seleccionar un día específico.

Al cambiar el período, la información del Kardex se actualiza automáticamente y se muestran únicamente los días correspondientes al mes seleccionado.

Por ejemplo:

* Si se selecciona **enero de 2026**, se muestran los días del 1 al 31.
* Si se selecciona **febrero de 2026**, se muestran únicamente los días correspondientes a febrero.
* Si se selecciona **abril de 2026**, se muestran los días del 1 al 30.

Los días que no pertenecen al mes seleccionado no se muestran.

### 2. Buscar un empleado

El campo **Empleado** permite localizar un empleado específico.

Para realizar una búsqueda:

Seleccione el campo **Empleado**.
Escriba el nombre o los datos del empleado que desea localizar.
Seleccione el empleado de la lista.
El Kardex se actualizará automáticamente mostrando la información correspondiente.

Si no se selecciona ningún empleado, la consulta puede mostrar todos los empleados que cumplan con los demás filtros establecidos.

### 3. Filtrar por razón social

El campo **Razón social** permite limitar la consulta a una razón social determinada.

Para utilizarlo:

Seleccione **Razón social**.
Escriba parte del nombre de la razón social.
Seleccione la opción correspondiente.
El Kardex se actualizará automáticamente.

Este filtro puede utilizarse junto con los demás filtros disponibles.

### 4. Filtrar por departamento

El campo **Departamento** permite consultar únicamente a los empleados pertenecientes a un departamento específico.

Para utilizarlo:

Seleccione **Departamento**.
Escriba el nombre del departamento.
Seleccione el departamento de la lista.
La información del Kardex se actualizará automáticamente.

### 5. Filtrar por ubicación

El campo **Ubicación** permite limitar la consulta a los empleados asociados con una ubicación determinada.

Para utilizarlo:

Seleccione **Ubicación**.
Escriba el nombre de la ubicación.
Seleccione la ubicación correspondiente.
El Kardex se actualizará automáticamente.

### 6. Filtrar por periodo de pago

El campo **Periodo de pago** permite consultar únicamente a los empleados pertenecientes a un periodo de pago determinado.

Para utilizarlo:

Seleccione **Periodo de pago**.
Escriba el nombre o dato correspondiente.
Seleccione el periodo de pago.
La información se actualizará automáticamente.

## Acciones disponibles

### Consultar el Kardex

Una vez seleccionado el período, el sistema muestra la información correspondiente en una tabla.

La tabla contiene primero los datos generales del empleado y posteriormente las columnas correspondientes a los días del mes.

Las primeras columnas permanecen visibles al desplazarse horizontalmente por la tabla, lo que permite seguir identificando al empleado mientras se consultan los días y los indicadores adicionales.

La tabla contiene:

* **Clave:** número identificador del empleado.
* **Empleado:** nombre completo.
* **F. Ingreso:** fecha de ingreso.
* **Días:** una columna por cada día del mes seleccionado.
* **Columnas adicionales:** indicadores configurados para el Kardex.

### Interpretar la información de los días

Cada día puede mostrar una abreviación dentro de una etiqueta de color.

La abreviación permite identificar rápidamente el tipo de incidencia o situación registrada para ese día.

El color utilizado puede variar dependiendo del tipo de registro. Por ejemplo, las vacaciones utilizan el color configurado para representar este concepto.

Cuando un día no tiene una abreviación visible, significa que no existe una marca especial que mostrar para ese día dentro de la información presentada por el Kardex.

Para conocer el significado exacto de las abreviaciones y sus colores, utilice la opción **Glosario**.

### Consultar el Glosario

El botón **Glosario** permite consultar el significado de las abreviaciones utilizadas en el Kardex.

Al abrirlo se muestra una tabla con tres columnas:

* **Nombre:** nombre completo del concepto.
* **Abreviación:** abreviación que aparece dentro de las celdas del Kardex.
* **Color:** color utilizado para identificar visualmente el concepto.

Para consultar el glosario:

Haga clic en **Glosario**.
Localice la abreviación que aparece en el Kardex.
Consulte el nombre completo del concepto y el color asociado.
Cuando termine, haga clic en **Cerrar**.

El glosario es especialmente útil cuando se encuentra una abreviación cuyo significado no se recuerda.

### Consultar indicadores adicionales

Después de las columnas correspondientes a los días del mes pueden aparecer columnas adicionales.

Estas columnas representan indicadores configurados específicamente para el Kardex y pueden variar dependiendo de la configuración existente.

Los valores se muestran de acuerdo con el tipo de información definido para cada indicador. Por ejemplo, algunos indicadores pueden mostrar:

* Un valor numérico.
* Un valor decimal.
* **Sí** o **No** para indicadores de tipo booleano.

El nombre de cada indicador aparece directamente en el encabezado de la columna.

### Cambiar de página

Cuando existen más empleados de los que pueden mostrarse en una sola página, se muestran controles de paginación en la parte inferior de la tabla.

Para consultar más empleados:

Utilice los números de página disponibles.
También puede utilizar las flechas para avanzar o regresar.
El sistema cargará los empleados correspondientes a la página seleccionada.

Los filtros y el período seleccionado se mantienen al cambiar de página.

### Exportar a Excel

El botón **Exportar Excel**, identificado con el icono de Excel, permite descargar la información del Kardex en un archivo de Excel.

La exportación toma en cuenta la información seleccionada en la pantalla, incluyendo:

* Período.
* Empleado, si se seleccionó uno.
* Ubicación.
* Departamento.
* Periodo de pago.
* Razón social.

Para exportar la información:

Seleccione el **Período** que desea consultar.
Aplique los filtros necesarios.
Verifique que la información mostrada corresponda a la consulta que desea obtener.
Haga clic en **Exportar Excel**.
El sistema generará la información correspondiente a los criterios seleccionados.

---
Versión 1.0 · Última actualización: septiembre 2026
