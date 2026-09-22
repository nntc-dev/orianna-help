---
title: Lista Negra
module: Admin. de personal
screen: lista-negra
version: 1.0
updated: 2026-09-21
---

# Lista Negra

Esta pantalla permite administrar los empleados registrados en la **Lista Negra**, consultar la información asociada a cada registro y, de acuerdo con los permisos del usuario, agregar o eliminar empleados.

**Nota**

Un empleado no puede registrarse más de una vez en la Lista Negra. Al agregar un empleado, el registro se crea como **Aplicado**.

## ¿Para qué sirve?

La pantalla de **Lista Negra** permite llevar el control de los empleados que han sido registrados en esta lista y consultar la causa y los comentarios asociados a cada registro.

Desde esta pantalla es posible:

* Consultar los empleados registrados.
* Agregar un empleado a la Lista Negra.
* Seleccionar la causa correspondiente.
* Registrar un comentario.
* Eliminar un empleado de la Lista Negra, si se cuenta con el permiso correspondiente.

## ¿Cómo se utiliza?

Al ingresar a la pantalla se muestra una tabla con los registros existentes dentro de la lista negra.

Los datos disponibles son:

* **Clave:** identificador del empleado.
* **Nombre:** nombre del empleado.
* **Causa:** motivo por el que fue registrado.
* **Comentario:** información adicional capturada al momento del registro.
* **Aplicado:** indica si el registro se encuentra aplicado.
* **Fecha:** fecha en que se realizó el registro.

## Acciones disponibles

### Agregar empleado

Para agregar un empleado a la Lista Negra:

1. Selecciona el botón **Agregar** (+).
2. En el formulario, selecciona el **Empleado**.
3. Selecciona la **Causa**.
4. Captura un **Comentario**, cuando sea necesario.
5. Selecciona **Guardar**.

El empleado y la causa se seleccionan mediante campos de búsqueda. La causa permite realizar búsquedas por texto y también por identificador.

Las causas disponibles son:

* **Ninguna**
* **Faltas recurrentes**
* **Bajo Desempeño**
* **Conducta inapropiada**
* **Incumplimiento de politicas**
* **Falta de integridad**

Al guardar el registro, el sistema valida la información capturada. Si el empleado ya se encuentra registrado en la Lista Negra, no se permite agregarlo nuevamente.

### Eliminar empleado

Para eliminar un empleado:

1. Selecciona el botón **Eliminar** correspondiente al registro.
2. Revisa el mensaje de confirmación.
3. Selecciona **Aceptar** para confirmar la eliminación.

Antes de eliminar el registro, el sistema muestra la **clave y el nombre del empleado** para confirmar que se está eliminando el registro correcto.

La eliminación es una acción sujeta a permisos. Si el usuario no cuenta con permiso para eliminar, el botón de eliminación se muestra deshabilitado.

## Consideraciones

El acceso a la pantalla y las acciones disponibles dependen de los permisos asignados al usuario.

---

Versión 1.0 · Última actualización: Septiembre 2026
