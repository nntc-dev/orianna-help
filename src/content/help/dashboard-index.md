---
title: Dashboard
module: Tiempo y Asistencia
screen: dashboard-tya
version: 1.0
updated: 2026-09-22
---

# Dashboard

Esta pantalla permite consultar, de forma visual y resumida, el estado de asistencia del personal para un día específico.

> **Nota**
>
> La información que se muestra depende de los empleados que el usuario tiene bajo su cargo o supervisión, según sus permisos de seguridad.

## ¿Para qué sirve?

Sirve para tener una vista rápida de cómo se comportó la asistencia del personal en un día determinado: cuántos empleados asistieron, cuántos llegaron tarde, cuántos faltaron y el total de empleados considerados, además de poder consultar el detalle por empleado y revisar tendencias a lo largo del tiempo.

## ¿Cómo se utiliza?

En la parte superior selecciona los filtros con los que se calculará la información del Dashboard:

* **Fecha:** el día que se desea consultar. Por defecto se muestra la fecha actual.
* **Supervisor:** permite acotar la consulta a los empleados de un supervisor específico.
* **Periodo de pago:** permite acotar la consulta a los empleados de un periodo de pago específico.

Al cambiar cualquiera de los filtros, toda la información del Dashboard se actualiza automáticamente.

## Tarjetas de resumen

En la parte superior se muestran cuatro tarjetas con los totales del día consultado:

* **Total empleados:** número de empleados considerados según los filtros aplicados.
* **Asistencia:** número de empleados que registraron asistencia ese día.
* **Retardos:** número de empleados que llegaron tarde ese día.
* **Ausentismos:** número de empleados que faltaron ese día.

## Estado actual de empleados

Muestra una tabla con el detalle de cada empleado considerado en la consulta: su clave, nombre, departamento, estado del día (**Presente**, **Retardo**, **Ausente**, **Descanso** u otro estado) y la hora de su marcaje de entrada, cuando aplica.

Esta tabla puede ordenarse, filtrarse por columna y **exportarse a Excel**.

## Tendencia de asistencia del mes

Muestra una gráfica de líneas con la evolución diaria, a lo largo del mes de la fecha seleccionada, de tres indicadores: **Asistencia**, **Retardo** y **Ausentismo**. Esto permite identificar patrones o días con comportamientos fuera de lo normal durante el mes.

## Comparativo semanal

Muestra una gráfica de barras que compara, semana a semana, el porcentaje de **Asistencia**, **Retardo** y **Ausentismo** del personal, lo que permite identificar si la tendencia mejora o empeora conforme avanzan las semanas.

## Consideraciones

La información del Dashboard se calcula considerando únicamente a los empleados sobre los que el usuario tiene permiso de consulta (de forma directa o a través de sus supervisores a cargo).

Los datos mostrados se mantienen en caché por un par de minutos, por lo que un cambio muy reciente en los marcajes podría no reflejarse de inmediato al recargar el Dashboard con los mismos filtros.

Es recomendable utilizar los filtros de supervisor y periodo de pago cuando se desea revisar el comportamiento de un grupo específico de empleados, en lugar de la totalidad de la empresa.

---

Versión 1.0 · Última actualización: septiembre 2026