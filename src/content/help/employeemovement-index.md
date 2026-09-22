---
title: Movimientos de empleados
module: Admin. de personal
screen: movimientos-empleados
version: 1.0
updated: 2026-09-21
---

# Movimientos de empleados

Esta pantalla permite administrar los **movimientos de empleados**: altas, bajas, reingresos, cambios de estructura, cambios de salario y cambios de clave de empleado, así como su flujo de autorización y su aplicación posterior.

> **Nota**
>
> Cada movimiento pasa por un ciclo de estatus (Creado, En espera, En autorización, Autorizado, Rechazado, Subiendo, Cerrado, Aplicado) que determina qué acciones están disponibles sobre él en cada momento.

## ¿Para qué sirve?

Sirve para capturar, revisar, autorizar y aplicar los movimientos que afectan la información laboral de un empleado: su alta como nuevo ingreso, su baja, su reingreso después de una baja, cambios en su estructura organizacional o salario, o el cambio de su clave de empleado.

## ¿Cómo se utiliza?

La tabla muestra el listado de movimientos capturados, con el folio, tipo de movimiento, empleado relacionado, fecha, estructura organizacional y estatus de cada uno, y puede filtrarse por razón social, departamento, ubicación, registro patronal y rango de fechas.

Selecciona el botón **Agregar** para capturar un nuevo movimiento, indicando el tipo de movimiento y, cuando aplica, el empleado relacionado. Según el tipo elegido (Alta, Baja, Reingreso, Cambios, Cambio de salario o Cambio de clave de empleado), el sistema despliega el formulario correspondiente con la información necesaria: datos del empleado, estructura organizacional, sueldo y demás información asociada al movimiento.

Desde la tabla también puedes:

* **Revisar** un movimiento, para validar su información antes de autorizarlo.
* **Editar** un movimiento que aún no ha sido autorizado.
* **Consultar** el detalle de un movimiento en cualquier estatus.
* **Eliminar** un movimiento, cuando su estatus lo permite.
* **Consultar documentos** relacionados al movimiento.
* **Iniciar el flujo de autorización** de los movimientos listos para autorizarse.
* **Aplicar** los movimientos ya autorizados.
* **Revertir** un movimiento cerrado.
* **Exportar** el listado a Excel o generar el reporte maestro con los filtros aplicados.

## Tipos de movimiento

* **Alta:** ingreso de un nuevo empleado.
* **Baja:** termina la relación laboral de un empleado, indicando si es recontratable.
* **Reingreso:** vuelve a dar de alta a un empleado que había causado baja.
* **Cambios:** modifica la estructura organizacional de un empleado activo.
* **Cambio de salario:** modifica el sueldo de un empleado.
* **Cambio de clave de empleado:** asigna una nueva clave, conservando el historial del empleado.
* **Cambio de razón social:** mueve al empleado a otra razón social o sucursal.

## Revisión y flujo de autorización

Antes de iniciar el flujo de autorización, un movimiento debe pasar por una **revisión**, la cual ejecuta las validaciones configuradas para el tipo de movimiento y muestra el número de errores encontrados. Si no hay errores, el movimiento queda listo para autorización: si el tipo de movimiento no requiere flujo, queda **autorizado** directamente; si lo requiere, queda en estatus **En espera**.

Cuando la posición asignada es de **nueva creación**, el sistema valida el límite de headcount configurado para la combinación de razón social, centro de costo, departamento, puesto y ubicación; si el límite se supera, el movimiento se marca con un aviso de límite superado y se notifica por correo al responsable configurado para esa razón social.

Los movimientos en estatus **En espera** pueden agruparse e iniciar su **flujo de autorización**. Al iniciar el flujo, se busca la configuración de flujo correspondiente a la razón social del empleado, se genera el proceso de autorización y se notifica por correo a los usuarios responsables de autorizar. El movimiento pasa entonces a estatus **En autorización**.

## Aplicación del movimiento

Una vez autorizados, los movimientos disponibles para el usuario (según sus permisos de razón social, ubicación, departamento y periodo) pueden **enviarse** para su aplicación en nómina. Si ocurre un error durante la aplicación, el movimiento muestra un ícono de error con el detalle correspondiente.

## Reversión

Los movimientos en estatus **Cerrado** pueden revertirse cuando fueron creados por el usuario actual.

## Eliminación

Un movimiento puede eliminarse siempre que no se encuentre en estatus **En autorización**, **Autorizado**, **Subiendo** o **En espera**. Al eliminar un movimiento de tipo Alta, también se elimina el registro de pre-alta relacionado.

## Reporte maestro

Desde el listado es posible generar un **reporte maestro** de movimientos, aplicando los mismos filtros de razón social, departamento, ubicación, registro patronal y rango de fechas usados en la tabla. El reporte incluye información completa del empleado y del movimiento (datos personales, estructura organizacional, salario, cuentas bancarias, INFONAVIT y domicilio, entre otros).

## Consideraciones

Las acciones de agregar, modificar, eliminar y enviar dependen de los permisos asignados al usuario sobre la opción de Movimientos de empleados y sobre la aplicación de movimientos de pre-alta.

La consulta y aplicación de movimientos considera los permisos de seguridad del usuario sobre razón social, ubicación, departamento y periodo.

Los tipos de movimiento y si requieren flujo de autorización se administran desde la pantalla de **Tipos de movimiento**.

Cuando un empleado se encuentra en la **lista negra** (no recontratable), el sistema lo indica al capturar un movimiento relacionado con dicho empleado.

---

**Versión 1.0 · Última actualización: septiembre 2026**
