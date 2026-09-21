---
title: Puestos
module: Admin. de personal
screen: puestos
version: 1.0
updated: 2026-09-21
---

# Puestos

Esta pantalla permite administrar los puestos que forman parte de la estructura de la empresa.

## ¿Para qué sirve?

Sirve para registrar y administrar los puestos disponibles en la empresa, definiendo la información utilizada para identificar cada puesto y su salario establecido.

Los puestos pueden ser utilizados para establecer el puesto que corresponde a cada empleado dentro de la organización.

## ¿Cómo se utiliza?

Desde esta pantalla puedes agregar un nuevo puesto o seleccionar un puesto existente para modificar su información.

Al registrar o editar un puesto puedes definir:

* **Nombre:** nombre del puesto.
* **Nombre corto:** nombre abreviado del puesto.
* **Salario mínimo:** monto de salario mínimo correspondiente al puesto.
* **Salario cero:** permite indicar que el puesto no maneja salario.

## Acciones disponibles

Desde esta pantalla puedes **agregar, editar y eliminar** puestos.

Al agregar un puesto, el sistema genera automáticamente su **Clave** de manera consecutiva dentro de la empresa.

Al editar un puesto puedes modificar su **Nombre**, **Nombre corto**, **Salario mínimo** y **Salario cero**.

Cuando **Salario cero** está habilitado, el sistema establece el **Salario mínimo en 0**.

Al eliminar un puesto, el sistema intenta eliminar el registro correspondiente. Si existen relaciones con otros registros que impiden su eliminación, el sistema mostrará el mensaje correspondiente.

## Consideraciones

Los puestos forman parte de la estructura organizacional y pueden ser asociados a los **empleados** mediante la información de su registro.

El **Salario mínimo** puede ser definido al registrar o modificar el puesto, excepto cuando se establece la opción **Salario cero**, en cuyo caso el sistema guarda el salario como `0`.
---

## Versión 1.0 · Última actualización: Septiembre 2026
