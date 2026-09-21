---
title: Departamentos
module: Admin. de personal
screen: departamentos
version: 1.0
updated: 2026-09-21
---

# Departamentos

Esta pantalla permite administrar los departamentos que forman parte de la estructura de la empresa.

> **Nota**
>
> Los departamentos mantienen una relación con las **áreas** de la empresa y con los **empleados**.

## ¿Para qué sirve?

Sirve para registrar y administrar los departamentos de la empresa, permitiendo mantener organizada su estructura y establecer la relación correspondiente con las áreas y los empleados.

Los departamentos pueden ser utilizados para identificar la estructura organizacional a la que pertenece cada empleado.

## ¿Cómo se utiliza?

Desde esta pantalla puedes agregar un nuevo departamento o seleccionar un departamento existente para modificar su información.

Al registrar o editar un departamento puedes definir:

* **Nombre:** nombre del departamento.
* **Nombre corto:** nombre abreviado del departamento.
* **Área:** área a la que pertenece el departamento.

El área puede seleccionarse desde el catálogo de áreas disponible en el sistema.

## Acciones disponibles

Desde esta pantalla puedes **agregar, editar y eliminar** departamentos.

Al agregar un departamento, el sistema genera automáticamente su **Clave** de manera consecutiva dentro de la empresa.

Al crear un departamento, el sistema genera los registros correspondientes para los días festivos configurados para la empresa.

Al editar un departamento puedes modificar su **Nombre**, **Nombre corto** y **Área**. La **Clave** no puede modificarse.

Al eliminar un departamento, el sistema elimina también los registros de permisos de días festivos asociados al departamento.

## Integración con Hikvision

Los departamentos pueden relacionarse con la configuración de **Hikvision**.

La información de Hikvision asociada al departamento permite asignar códigos y niveles de acceso para su utilización en el control de acceso.

### Código de departamento

Es posible asignar al departamento un **código de departamento Hikvision** y un **nombre de departamento Hikvision**.

Esta asignación se realiza de acuerdo con el departamento y la sucursal correspondiente.

El código asignado no puede repetirse dentro de la misma sucursal. Si el código ya está asignado a otro departamento, el sistema muestra un mensaje indicando que el código ya está asignado.

También es posible modificar o eliminar la asignación del código de Hikvision.

### Niveles de acceso

Los departamentos pueden tener asociados uno o varios **niveles de acceso Hikvision**.

Cada nivel de acceso cuenta con un **clave** y un **nombre**.

Los niveles de acceso pueden asignarse, modificarse o eliminarse para el departamento y la sucursal correspondiente.

## Consideraciones

Los departamentos mantienen una relación con las **áreas**, por lo que el área seleccionada determina su relación dentro de la estructura organizacional.

Los **empleados** pueden tener un departamento asociado mediante la información de su registro.

La consulta de departamentos considera los permisos de seguridad del usuario, por lo que la información disponible puede depender de los departamentos a los que tenga acceso el usuario.

La configuración de **Hikvision** es información relacionada con el departamento y se administra mediante las funcionalidades correspondientes.

La eliminación de un departamento está sujeta a las relaciones existentes con otros registros. Si existen relaciones que impiden la eliminación, el sistema mostrará el mensaje correspondiente.

---

## Versión 1.0 · Última actualización: Septiembre 2026

---
