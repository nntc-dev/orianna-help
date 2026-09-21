---
title: Tipos de movimiento
module: Admin. de personal
screen: tipos-movimiento
version: 1.0
updated: 2026-09-21
---

# Tipos de movimiento

Esta pantalla permite administrar los tipos de movimiento utilizados para clasificar los movimientos de los empleados dentro de la empresa.

> **Nota**
>
> Cada tipo de movimiento pertenece a un **tipo** (alta, baja, promoción, reingreso o modificación de salario). Cuando el tipo corresponde a una baja, es obligatorio indicar el **subtipo de baja** relacionado.

## ¿Para qué sirve?

Sirve para registrar y administrar los tipos de movimiento con los que opera la empresa, permitiendo clasificar los movimientos que se generan en el historial laboral de los empleados.

Cada tipo de movimiento indica si requiere pasar por un **flujo de autorización** antes de aplicarse, lo que determina si el movimiento queda autorizado directamente o si permanece pendiente hasta su autorización.

## ¿Cómo se utiliza?

En el grid se muestran las siguientes columnas:

* **Nombre:** nombre del tipo de movimiento.
* **Nombre corto:** nombre abreviado del tipo de movimiento.
* **Tipo:** clasificación del movimiento (alta, baja, promoción, reingreso o modificación de salario).
* **Subtipo de baja:** motivo de baja relacionado, cuando el tipo corresponde a una baja.
* **Tiene flujo:** indica, mediante un ícono, si el movimiento requiere autorización antes de aplicarse.

Al registrar o editar un tipo de movimiento puedes definir:

* **Nombre:** nombre del tipo de movimiento.
* **Nombre corto:** nombre abreviado del tipo de movimiento.
* **Tipo:** clasificación del movimiento. Es un campo obligatorio.
* **Subtipo de baja:** obligatorio únicamente cuando el **Tipo** seleccionado corresponde a **Baja**. Para el resto de los tipos, este campo permanece deshabilitado.
* **Tiene flujo:** casilla que indica si el movimiento debe pasar por un flujo de autorización.

## Acciones disponibles

### Agregar tipo de movimiento

Permite registrar un nuevo tipo de movimiento proporcionando su **Nombre**, **Nombre corto**, **Tipo**, **Subtipo de baja** (cuando aplique) y si **Tiene flujo** de autorización.

### Editar tipo de movimiento

Permite modificar la información de un tipo de movimiento existente.

### Eliminar tipo de movimiento

Permite eliminar un tipo de movimiento cuando no existen registros relacionados que impidan su eliminación.

## Relación con movimientos de empleado

El campo **Tiene flujo** determina el estatus con el que se genera el movimiento del empleado al capturarse:

* Si el tipo de movimiento **no tiene flujo**, el movimiento del empleado queda **autorizado** de forma directa.
* Si el tipo de movimiento **tiene flujo**, el movimiento del empleado queda en estatus **listo**, en espera de su autorización.

## Consideraciones

Los tipos de movimiento forman parte de la información utilizada para clasificar el historial laboral de los empleados.

El **tipo de baja** solo aplica cuando el **Tipo** seleccionado corresponde a una baja; para los demás tipos, este campo no es requerido.

Las acciones de agregar, modificar y eliminar dependen de los permisos asignados al usuario.

Un tipo de movimiento que ya esté siendo utilizado en movimientos de empleados no debería eliminarse, ya que puede afectar la información relacionada.

---

**Versión 1.0 · Última actualización: septiembre 2026**
