---
title: Flujos de autorización
module: Configuración
screen: flujos-autorizacion
version: 1.0
updated: 2026-09-22
---

# Flujos de autorización

Esta pantalla permite consultar y configurar los **flujos de autorización** que se utilizan para establecer quién debe autorizar determinados procesos y en qué orden.

## ¿Para qué sirve?

La pantalla de **Flujos de autorización** permite administrar los flujos de autorización y definir las personas o responsables que participan en cada nivel de autorización.

Desde esta pantalla es posible:

* Consultar los flujos de autorización existentes.
* Identificar el proceso al que pertenece cada flujo.
* Consultar la razón social a la que aplica el flujo.
* Agregar autorizantes a un flujo.
* Definir el nivel de autorización.
* Seleccionar el tipo de autorizante.
* Seleccionar el usuario que participará en la autorización.
* Eliminar un autorizante cuando corresponda.

## ¿Cómo se utiliza?

Al ingresar a la pantalla se muestra una lista con los flujos de autorización disponibles.

Los datos disponibles son:

* **Flujo:** nombre del flujo de autorización.
* **Proceso:** proceso al que pertenece el flujo.
* **Razón Social:** razón social a la que aplica el flujo. Cuando aplica para todas, se muestra **(Todas)**.

Para consultar los autorizantes de un flujo:

1. Selecciona el flujo que deseas consultar.
2. Revisa la información de los autorizantes que se muestra en la sección de detalle.

Los datos disponibles de cada autorizante son:

* **Nivel:** posición que ocupa dentro del flujo de autorización.
* **Tipo:** tipo de responsable que participa en el nivel.
* **Usuario:** usuario asignado, cuando corresponde.

Los niveles se muestran en el orden en que deben participar los autorizantes.

## Acciones disponibles

### Agregar autorizante

Para agregar un autorizante a un flujo:

1. Selecciona el flujo al que deseas agregar el autorizante.
2. Selecciona **Agregar**.
3. Revisa el **Nivel** asignado.
4. Selecciona el **Tipo de autorizante**.
5. Selecciona el **Usuario**, cuando corresponda.
6. Selecciona **Guardar**.

El sistema asigna automáticamente el siguiente nivel disponible dentro del flujo.

Los tipos de autorizante disponibles son:

* **Usuario:** permite seleccionar un usuario específico.
* **Jefe Funcional:** utiliza al responsable funcional correspondiente.
* **Coordinador:** utiliza al coordinador correspondiente.

Cuando el tipo de autorizante es **Usuario**, es necesario seleccionar el usuario que participará en ese nivel.

### Eliminar autorizante

Para eliminar un autorizante:

1. Selecciona el botón **Eliminar** correspondiente.
2. Revisa el mensaje de confirmación.
3. Selecciona **Borrar** para confirmar.

La eliminación de un autorizante está disponible únicamente para el último nivel del flujo.

Si el autorizante no puede eliminarse, el botón **Eliminar** se muestra deshabilitado.

## Consideraciones

Cada flujo puede contar con uno o varios niveles de autorización.

El nivel de un nuevo autorizante se asigna automáticamente de acuerdo con los niveles existentes en el flujo.

La disponibilidad de las acciones para agregar o eliminar autorizantes depende de los permisos asignados al usuario.

---

Versión 1.0 · Última actualización: Septiembre 2026