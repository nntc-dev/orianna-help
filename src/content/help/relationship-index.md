---
title: Relación
module: Admin. de personal
screen: relacion
version: 1.0
updated: 2026-09-21
---

# Relación

Esta pantalla permite consultar y administrar las relaciones entre los elementos de la estructura utilizados en la aplicación.

## ¿Para qué sirve?

La pantalla de **Relación** permite seleccionar un elemento principal de la estructura y consultar los elementos relacionados con él.

Desde esta pantalla es posible:

* Seleccionar el **Maestro** que se desea consultar.
* Seleccionar el **Detalle** que se desea relacionar.
* Consultar los elementos disponibles del maestro.
* Consultar los elementos relacionados con un registro seleccionado.
* Marcar o desmarcar relaciones entre los elementos, cuando se cuenta con el permiso correspondiente.

## ¿Cómo se utiliza?

Al ingresar a la pantalla se muestran los campos **Maestro** y **Detalle**.

Los tipos de **Maestro** disponibles son:

* **Razón social**
* **Ubicación**
* **Método de pago**

El tipo de **Detalle** disponible depende del maestro seleccionado.

Para **Razón social** se pueden consultar:

* **Ubicación**
* **Periodo de pago**
* **Método de pago**

Para **Ubicación** se pueden consultar:

* **Registro patronal**
* **Centro de costo**

Para **Método de pago** se puede consultar:

* **Banco**

Al seleccionar un maestro, la tabla de la izquierda muestra los registros disponibles.

Los datos generales de los registros son:

* **Clave:** identificador del registro.
* **Nombre:** nombre del registro.

Selecciona un registro del maestro para consultar en la tabla de la derecha los elementos correspondientes al detalle seleccionado.

En la tabla de detalle se muestra:

* **Nombre:** nombre del elemento relacionado.
* **Relacionado:** indica si el elemento se encuentra relacionado con el registro seleccionado.

## Acciones disponibles

### Consultar relaciones

Para consultar las relaciones de un elemento:

1. Selecciona el tipo de **Maestro**.
2. Selecciona el tipo de **Detalle**.
3. Localiza el registro que deseas consultar en la tabla del maestro.
4. Selecciona el registro.
5. Revisa los elementos mostrados en la tabla de detalle.
6. Consulta el estado de cada elemento en la columna **Relacionado**.

### Relacionar elementos

Para establecer una relación:

1. Selecciona el registro correspondiente en la tabla del maestro.
2. Selecciona uno o varios elementos en la tabla de detalle.
3. Selecciona **Sí**.
4. Los elementos seleccionados quedan marcados como relacionados.

### Deshacer una relación

Para quitar una relación:

1. Selecciona el registro correspondiente en la tabla del maestro.
2. Selecciona uno o varios elementos que actualmente estén relacionados.
3. Selecciona **No**.
4. Los elementos seleccionados dejan de estar relacionados.

Las acciones **Sí** y **No** se encuentran disponibles de acuerdo con los permisos asignados al usuario.

## Consideraciones

La información disponible en la tabla de detalle depende del tipo de **Maestro** y **Detalle** seleccionado.

Las relaciones se administran seleccionando uno o varios elementos del detalle.

El acceso a las acciones de modificación depende de los permisos asignados al usuario.

---
Versión 1.0 · Última actualización: Septiembre 2026
