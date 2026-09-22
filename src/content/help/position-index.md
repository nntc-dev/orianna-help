---
title: Posiciones
module: Admin. de Personal
screen: posiciones
version: 1.0
updated: 2026-09-21
---

# Posiciones

Esta pantalla permite crear y administrar las **posiciones** (plazas) de la organización, así como consultar su historial de estatus y su ocupación por empleados.

> **Nota**
>
> Una posición solo puede cancelarse o congelarse mientras se encuentra **vacante**, es decir, sin un empleado asignado.

## ¿Para qué sirve?

Sirve para definir las plazas disponibles dentro de la estructura organizacional (razón social, ubicación, departamento, puesto, entre otros), controlar su ciclo de vida (vacante, ocupada, congelada, cancelada) y dar seguimiento a los movimientos que afectan cada posición a lo largo del tiempo.

Las posiciones vacantes son las que después se utilizan para asignar un empleado mediante un movimiento de alta o reingreso.

## ¿Cómo se utiliza?

La tabla muestra el listado de posiciones, con folio, código, razón social, ubicación, departamento, puesto, clave y nombre del empleado asignado (o su estatus de vacante/cancelada). Puede filtrarse por **Razón social**, **Ubicación**, **Departamento** y **Puesto**, y acotarse con los interruptores **Solo Congeladas**, **Solo Vacantes** o **Mostrar Canceladas**.

Selecciona el botón **Agregar** para crear una o varias posiciones nuevas. El formulario se organiza en tres bloques:

* **Configuración:** tipo de posición (Permanente o Temporal), cantidad de posiciones a crear, fecha de inicio y, si es temporal, fecha de fin.
* **Estructura organizacional:** razón social, ubicación base, ubicación de pago, registro patronal, centro de costo, área, departamento, periodo, puesto, prestación, categoría, nivel, tipo de empleado, clasificación y rol de turno.
* **Jefes:** jefe jerárquico y jefe directo de la posición.

Cuando se indica una **cantidad** mayor a uno, el sistema crea de forma consecutiva el número de posiciones indicado, todas con la misma configuración.

Desde la tabla también puedes:

* **Duplicar** una posición existente, para abrir el formulario de alta precargado con su misma configuración.
* **Consultar el detalle** de una posición en modo de solo lectura.
* **Consultar el historial** de estatus de una posición.
* **Congelar** o **descongelar** una posición vacante.
* **Cancelar** una posición vacante.
* **Exportar** el listado a Excel.

## Ciclo de estatus

Una posición puede encontrarse en los siguientes estatus: **Vacante**, **Ocupada** (con empleado asignado), **Congelada** o **Cancelada**. Cada cambio de estatus queda registrado en el historial de la posición.

Al crearse, una posición pasa automáticamente por los estatus Creada, Autorizada y Vacante.

## Congelar y descongelar

Una posición vacante puede **congelarse** para indicar que temporalmente no debe ocuparse; las posiciones congeladas se distinguen visualmente en la tabla. Una posición congelada puede **descongelarse** para regresarla a estatus vacante.

## Cancelación

Una posición vacante puede **cancelarse** cuando ya no se requiere. Las posiciones canceladas se muestran tachadas en la tabla y conservan su registro para consulta e historial, pero ya no están disponibles para asignación.

## Historial

Cada posición conserva un historial con folio, fecha, tipo de movimiento (Creada, Autorizada, Cancelada, Vacante, Ocupada, Congelada), clave y nombre del empleado relacionado cuando aplica.

## Consideraciones

Las acciones de agregar y modificar (congelar, descongelar, cancelar) dependen de los permisos asignados al usuario sobre la opción de Posiciones.

Una posición con empleado asignado (ocupada) no puede congelarse ni cancelarse directamente desde esta pantalla; primero debe liberarse mediante el movimiento de empleado correspondiente.

La consulta de posiciones respeta los permisos de seguridad del usuario sobre razón social, ubicación, departamento y periodo.

---

Versión 1.0 · Última actualización: septiembre 2026
