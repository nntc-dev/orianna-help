---
title: Reporte de tiempo extra
module: Tiempo y Asistencia
screen: reporte-tiempo-extra
version: 1.0
updated: 2026-09-22
---

# Reporte de tiempo extra

Esta pantalla permite consultar y generar un reporte de las horas de **tiempo extra** registradas para los empleados.

> **Nota**
>
> El reporte se genera de acuerdo con los filtros seleccionados y se descarga en formato **Excel** para su consulta, revisión o procesamiento posterior.

## ¿Para qué sirve?

Sirve para consultar las horas de tiempo extra de los empleados dentro de un periodo determinado.

El reporte permite identificar, entre otros datos, el empleado, la fecha en que se generó el tiempo extra, la incidencia relacionada, el periodo de pago, el puesto y las horas de tiempo extra registradas.

También permite comparar la **hora de salida esperada** contra la **hora de salida real**, lo que facilita la revisión del tiempo adicional trabajado.

## ¿Cómo se utiliza?

Antes de generar el reporte, puedes utilizar los filtros disponibles para definir la información que deseas consultar.

Los filtros disponibles son:

* **Razón social:** permite seleccionar la razón social a la que pertenece el empleado.
* **Ubicación:** permite seleccionar una ubicación específica.
* **Departamento:** permite consultar empleados pertenecientes a un departamento determinado.
* **Puesto:** permite consultar el tiempo extra relacionado con un puesto específico.
* **Centro de costo:** permite filtrar la información por centro de costo.
* **Periodo de pago:** permite seleccionar el periodo de pago relacionado con los registros.
* **Empleado:** permite consultar la información de un empleado específico.
* **Fecha inicial:** define el inicio del rango de fechas que se desea consultar.
* **Fecha final:** define el final del rango de fechas que se desea consultar.

Los filtros pueden combinarse para obtener un reporte más específico. Por ejemplo, puedes seleccionar una razón social, un departamento, un periodo de pago y un rango de fechas para consultar únicamente el tiempo extra correspondiente a esos criterios.

Una vez definidos los filtros, selecciona el botón de **Excel** para generar el reporte.

El sistema utilizará los filtros seleccionados y descargará el archivo correspondiente.

## Rango de fechas

La **Fecha inicial** y la **Fecha final** permiten establecer el periodo que se utilizará para generar el reporte.

Al seleccionar una fecha inicial, la fecha final no puede ser anterior a ella. Si la fecha inicial es posterior a la fecha final que ya estaba seleccionada, el sistema ajustará la fecha final para mantener un rango válido.

Es recomendable seleccionar siempre el periodo que deseas revisar antes de generar el reporte.

## Información del reporte

El archivo de Excel generado contiene la información del tiempo extra encontrado de acuerdo con los filtros utilizados.

El reporte incluye las siguientes columnas:

* **Clave:** clave o identificador del empleado.
* **Nombre:** nombre del empleado.
* **Fecha:** fecha correspondiente al registro de tiempo extra.
* **Incidencia:** incidencia relacionada con el tiempo extra.
* **Periodo:** periodo de pago correspondiente.
* **Puesto:** puesto del empleado.
* **Hora de salida esperada:** hora en la que estaba prevista la salida del empleado de acuerdo con su jornada o turno.
* **Hora de salida real:** hora en la que se registró la salida.
* **Horas:** cantidad de horas de tiempo extra registrada.

## Acciones disponibles

### Generar reporte

Permite generar el reporte de tiempo extra utilizando los filtros seleccionados.

Para generarlo:

Selecciona los filtros que deseas utilizar.
Define la **Fecha inicial** y **Fecha final**.
Revisa que los criterios seleccionados correspondan a la información que deseas consultar.
Selecciona el botón de **Excel**.
El sistema generará y descargará el archivo **ReporteTiempoExtra.xlsx**.

### Consultar por empleado

Puedes seleccionar un empleado específico en el filtro **Empleado** para generar únicamente la información correspondiente a ese empleado.

Si no se selecciona un empleado específico, el reporte puede incluir la información de los empleados que correspondan al resto de los filtros utilizados.

### Filtrar por estructura organizacional

Los filtros de **Razón social**, **Ubicación**, **Departamento**, **Puesto** y **Centro de costo** permiten limitar la información de acuerdo con la estructura organizacional de la empresa.

Estos filtros pueden utilizarse individualmente o combinados.

### Filtrar por periodo de pago

El filtro **Periodo de pago** permite seleccionar un periodo específico para consultar los registros de tiempo extra relacionados con dicho periodo.

Este filtro puede combinarse con las fechas y demás criterios disponibles.

## Consideraciones

El reporte se genera con la información obtenida del proceso de consulta de **tiempo extra** y considera los filtros proporcionados al momento de generarlo.

La **hora de salida esperada** y la **hora de salida real** permiten identificar la diferencia entre la jornada esperada y la salida registrada.

Las horas mostradas en el reporte corresponden a la información calculada y devuelta por el proceso de tiempo extra configurado para la empresa.

Es recomendable validar el **rango de fechas**, **periodo de pago**, **empleado** y demás filtros antes de generar el archivo, especialmente cuando se requiera utilizar la información para revisión de incidencias o procesos relacionados con nómina.

El acceso a la generación del reporte depende del permiso de lectura asignado al usuario para la opción de **Reporte de tiempo extra**.

---

Versión 1.0 · Última actualización: septiembre 2026